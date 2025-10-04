import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"
import { toast } from 'react-toastify';
import { useNavigate } from "react-router";

import { api } from "../../services/api"

import { Container, Form, InputContainer, LeftContainer, RightContainer, Title, Link, } from "./styles"
import { Button } from "../../components/Button";

import Logo from '../../assets/logo-devburger.png'

export function Login() {

    let navigate = useNavigate();

    const schema = yup
        .object({
            email: yup.string().email('O e-mail deve ser válido.').required('O e-mail é obrigatório.'),
            password: yup.string().min(6, 'A senha deve ter no mínimo 6 caracteres.').required('A senha é obrigatória.'),
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
        const { data: {token}} = await toast.promise(
            api.post('/session', {
                email: data.email,
                password: data.password,
            }),
            {
                pending: 'Verificando dados 🔍',
                success: {
                    render() {
                        setTimeout(() => {
                            navigate('/');
                        }, 2000);
                        return `Seja bem-vindo! 👌`
                    },
                },
                error: 'E-mail ou senha incorretos! 🤯',
            }
        );

        localStorage.setItem('token', token)
    };

    return (
        <Container>
            <LeftContainer>
                <img src={Logo} alt="logo-devburger" />
            </LeftContainer>
            <RightContainer>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Title>Olá, seja bem vindo ao <span>Dev Burger!</span>
                        <br />
                        Acesse com seu <span>Login e senha.</span>
                    </Title>

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

                    <Button type="submit">Entrar</Button>

                    <p>Não possui conta? <Link to="/cadastro">Clique aqui.</Link></p>
                </Form>
            </RightContainer>
        </Container>
    );
}