import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import { Container, Form, InputContainer, LeftContainer, RightContainer, Title } from "./styles"
import { Button } from "../../components/Button";

import Logo from '../../assets/logo-devburger.png'

export function Login() {

    const schema = yup
        .object({
            email: yup.string().email().required(),
            password: yup.string().min(6).required(),
        })
        .required()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema), //parametro que valida os campos baseando-se no schema acima
    })
    const onSubmit = (data) => console.log(data)

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
                    </InputContainer>

                    <InputContainer>
                        <label>Senha</label>
                        <input type="password" {...register("password")} />
                    </InputContainer>

                    <Button type="submit">Entrar</Button>

                    <p>Não possui conta? <a>Clique aqui.</a></p>
                </Form>
            </RightContainer>
        </Container>
    );
}