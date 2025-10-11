import { createBrowserRouter } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Register } from "../pages/Register";
import { Menu } from "../pages/Menu";
import { Header } from "../components/Header";
import { Cart } from "../pages/Cart";

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