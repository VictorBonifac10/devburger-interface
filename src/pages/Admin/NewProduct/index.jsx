import { Controller, useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { api } from "../../../services/api"
import * as yup from "yup"

import { Container, Form, InputGroup, Label, Input, LabelUpload, Select, SubmitButton, ErrorMessage } from "./styles"
import { useEffect, useState } from "react";
import { toast } from "react-toastify"

const schema = yup
    .object({
        name: yup.string()
            .required('O nome do produto é obrigatório.'),

        price: yup.number()
            .positive().required('O valor do produto é obrigatório.')
            .typeError('O valor do produto é obrigatório.'),

        category: yup.object()
            .required("A categoria do produto é obrigatória."),

        file: yup.mixed()
            .test('required', 'O upload do arquivo é obrigatório.', (value) => {
                return value && value.length > 0;
            })
            /* .test('fileSize', 'Carregue arquivos até 3mb', (value) => {
                 return value && value.length > 0 && value[0].size <= 30000;
             })*/
            .test('type', 'Carregue apenas arquivos PNG ou JPG', (value) => {
                return value && value.length > 0 && (value[0].type === 'image/jpeg' || value[0].type === 'image/png');
            }),
    });

export function NewProduct() {

    const [fileName, setFileName] = useState(null);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        async function loadCategories() {
            const { data } = await api.get('/categories');

            setCategories(data);
        }

        loadCategories();

    }, []);

    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    })

    const onSubmit = async (data) => {

        const productFormData = new FormData();

        productFormData.append('name', data.name);
        productFormData.append('price', data.price * 100);
        productFormData.append('category_id', data.category.id);
        productFormData.append('file', data.file[0]);

        await toast.promise(api.post('/products', productFormData), {
            pending: 'Adicionando o produto...',
            success: 'Produto adicionado com sucesso!',
            error: 'Falha ao adicionar o produto, tente novamente.',
        });
    };

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <InputGroup>
                    <Label>Nome</Label>
                    <Input type="text" {...register("name")} />
                    <ErrorMessage>{errors?.name?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Valor</Label>
                    <Input type="number" {...register("price")} />
                    <ErrorMessage>{errors?.price?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <LabelUpload>
                        <i className="ri-image-add-fill"></i>
                        <input
                            type="file"
                            {...register("file")}
                            accept="image/png, image/jpeg"
                            onChange={(value) => {
                                setFileName(value.target.files[0]?.name);
                                register('file').onChange(value);
                            }}
                        />

                        {fileName || 'Upload do Produto'}
                    </LabelUpload>
                    <ErrorMessage>{errors?.file?.message}</ErrorMessage>
                </InputGroup>

                <InputGroup>
                    <Label>Categorias</Label>
                    <Controller
                        name="category"
                        control={control}
                        render={({ field }) => (
                            <Select
                                {...field}
                                options={categories}
                                getOptionLabel={(category) => category.name}
                                getOptionValue={(category) => category.id}
                                placeholder="Escolha a Categoria"
                                menuPortalTarget={document.body}
                            />
                        )}
                    />

                    <ErrorMessage>{errors?.category?.message}</ErrorMessage>
                </InputGroup>

                <SubmitButton>Adicionar Produto</SubmitButton>
            </Form>
        </Container>
    )
} 