import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext({});

export const CartProvider = ({ children }) => {

    const [cartProducts, setCartProducts] = useState([])

    //-------------------------------------------------
    // Function putProductInCart() --> Adicionar itens no carrinho
    //-------------------------------------------------

    const putProductInCart = (product) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

        let newProductsInCart = [];

        if (cartIndex >= 0) {

            newProductsInCart = cartProducts;

            newProductsInCart[cartIndex].quantity =
                newProductsInCart[cartIndex].quantity + 1;

            setCartProducts(newProductsInCart);

        } else {
            product.quantity = 1
            newProductsInCart = [...cartProducts, product];

            setCartProducts(newProductsInCart);
        }

        updateLocalStorage(newProductsInCart);
    };

    //-------------------------------------------------
    // Function clearCart() --> Limpar todos os itens do carrinho
    //-------------------------------------------------

    const clearCart = () => {

        setCartProducts([]);
        
        updateLocalStorage([]);
    };

    //-------------------------------------------------
    // Function deleteProduct() --> Deletar itens do carrinho
    //-------------------------------------------------

    const deleteProduct = (productId) => {
        const newCart = cartProducts.filter((prd) => prd.id !== productId);

        setCartProducts(newCart);
        updateLocalStorage(newCart);

    };

    //-------------------------------------------------
    // Function increaseProduct() --> Add quantidade dos itens do carrinho
    //-------------------------------------------------

    const increaseProduct = (productId) => {
        const newCart = cartProducts.map(prd => {
            return prd.id === productId ? { ...prd, quantity: prd.quantity + 1 } : prd;
        })

        setCartProducts(newCart);
        updateLocalStorage(newCart);
    };

    //-------------------------------------------------
    // Function decreaseProduct() --> Dim. quantidade dos itens do carrinho
    //-------------------------------------------------

    const decreaseProduct = (productId) => {
        const cartIndex = cartProducts.findIndex((prd) => prd.id === product.id);

        if (cartProducts[cartIndex].quantity > 1) {

            const newCart = cartProducts.map(prd => {
                return prd.id === productId ? { ...prd, quantity: prd.quantity - 1 } : prd;
            });

            setCartProducts(newCart);
            updateLocalStorage(newCart);

        } else {
            deleteProduct(productId);
        }
    };

    //-------------------------------------------------
    // Function updateLocalStorage() --> Guardar informações do carrinho em LocalStorage
    //-------------------------------------------------

    const updateLocalStorage = (products) => {
        localStorage.setItem('devburger:cartInfo', JSON.stringify(products));
    };

    useEffect(() => {
        const clientCartData = localStorage.getItem('devburger:cartInfo');

        if (clientCartData) {
            setCartProducts(JSON.parse(clientCartData));
        }

    }, []);

    return (<CartContext.Provider value={{ cartProducts, putProductInCart, clearCart, deleteProduct, increaseProduct, decreaseProduct }}>
        {children}
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