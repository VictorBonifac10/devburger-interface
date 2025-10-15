import { Button } from "../Button"
import { Container } from "./styles"

import { toast } from "react-toastify"
import { useEffect, useState } from "react"

import { api } from "../../services/api"
import { useCart } from "../../hooks/CartContext"
import { formatPrice } from "../../utils/formatPrice"
import { useNavigate } from "react-router-dom"

export function CartResume() {

    const [finalPrice, setFinalPrice] = useState(0);
    const [deliveryTax] = useState(500);

    const { cartProducts, clearCart } = useCart();

    const navigate = useNavigate();

    useEffect(() => {
        const sumAllitems = cartProducts.reduce((acc, current) => {
            return current.price * current.quantity + acc;
        }, 0);
        setFinalPrice(sumAllitems);
    }, [cartProducts]);

    const submitOrder = async () => {
        const products = cartProducts.map((product) => {
            return {
                id: product.id,
                quantity: product.quantity,
                price: product.price
            };
        });

        try {
            const { data } = await api.post('/create-payment-intent', { products });

            navigate('/checkout', {
                state: data,
            });

        } catch (err) {
            toast.error('Falha ao realizar o seu pedido! 🤔')
        }
    };

    return (
        <div>
            <Container>
                <div className="container-top">
                    <h2 className="title">Resumo do Pedido</h2>
                    <p className="items">Itens</p>
                    <p className="items-price">{formatPrice(finalPrice)}</p>
                    <p className="delivery-tax">Taxa de Entrega</p>
                    <p className="delivery-taxt-price">{formatPrice(deliveryTax)}</p>
                </div>
                <div className="container-bottom">
                    <p>Total</p>
                    <p>{formatPrice(finalPrice + deliveryTax)}</p>
                </div>
            </Container>
            <Button onClick={submitOrder}>Finalizar Pedido</Button>
        </div>
    )
}