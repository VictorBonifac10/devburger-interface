import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({});

export const CartProvider = ({ childreen }) => {

    const [cartProducts, setCartProducts] = useState([])

    const putProductInCart = (product) => { //adicionar

    }

    const clearCart = () => { //limpar

    }

    const deleteProduct = (product) => { //deletar

    }

    const increaseProduct = (productId) => { //aumentar quant.

    }

    const decreaseProduct = (productId) => { //dimunuir quant.

    }

    return (<CartContext.Provider value={{ cartProducts, putProductInCart, clearCart, deleteProduct, increaseProduct, decreaseProduct }}>
        {childreen}
    </CartContext.Provider>

    );
};

export const useCart = () => {
    const context = useContext(CartContext);

    if (!context) {
        throw new Error('Deu ruim!')
    }

    return context;
}