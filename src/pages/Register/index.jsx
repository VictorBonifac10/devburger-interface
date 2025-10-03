import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router";

import { api } from "../../services/api"

import { Container, Form, InputContainer, LeftContainer, RightContainer, Title, Link, } from "./styles"
import { Button } from "../../components/Button";

import Logo from '../../assets/logo-devburger.png'

export function Register() {

    let navigate = useNavigate();

    const schema = yup
        .object({
            name: yup.string().required('O nome é obrigatório.'),
            email: yup.string().email('O e-mail deve ser válido.').required('O e-mail é obrigatório.'),
            password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres.').required('A senha é obrigatória.'),
            confirmPassword: yup.string().oneOf([yup.ref('password')], 'As senhas devem ser iguais.').required('A senha é obrigatória.'),
        })
        .required();

    const {

        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema), //parametro que valida os campos baseando-se no schema acima
    });

    const onSubmit = async (data) => {

        try {
            const { status } = await api.post('/users', {
                name: data.name,
                email: data.email,
                password: data.password,
            },
                {
                    validateStatus: () => true
                },
            );

            if (status === 200 || status === 201) {
                setTimeout(() => {
                    navigate('/login');
                }, 2000);
                toast.success('Conta cadastrada com sucesso! 👌')
            } else if (status === 400 || status === 409) {
                toast.error('Conta já existente. Faça login para continuar! 🤔')
            } else {
                throw new Error(); //faz com que caia no catch(error)
            }
        } catch (error) {
            toast.error('Falha no sistema! Tente novamente mais tarde. 😢')
        };

    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburger" />
            </LeftContainer>
            <RightContainer>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Title>Cadastre-se agora!</Title>

                    <InputContainer>
                        <label>Nome</label>
                        <input type="text" {...register("name")} />
                        <p>{errors?.name?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Email</label>
                        <input type="email" {...register("email")} />
                        <p>{errors?.email?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                        <p>{errors?.password?.message}</p>
                    </InputContainer>

                    <InputContainer>
                        <label>Confirmar senha</label>
                        <input type="password" {...register("confirmPassword")} />
                        <p>{errors?.confirmPassword?.message}</p>
                    </InputContainer>

                    <Button type="submit">Cadastrar</Button>

                    <p>Já possui conta? <Link to="/login">Clique aqui.</Link></p>
                </Form>
            </RightContainer>
        </Container>
    );
}