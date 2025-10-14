import { createBrowserRouter } from "react-router-dom";

import { Header } from "../components/Header";
import { Cart, Home, Login, Menu, Register } from "../pages";

export const router = createBrowserRouter([
    {
        path: '/',
        element:
            (
                <>
                    <Header />
                    <Home />
                </>
            ),
    },
    {
        path: '/login',
        element: <Login />,
    },
    {
        path: '/cadastro',
        element: <Register />,
    },
    {
        path: '/cardapio',
        element:
            (
                <>
                    <Header />
                    <Menu />
                </>
            ),
    },
    {
        path: '/carrinho',
        element: <Cart />,
    },
]);