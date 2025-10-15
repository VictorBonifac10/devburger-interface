import { useState } from "react";
import { PaymentElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { useLocation } from "react-router-dom";
import '../styles.css'
import { useCart } from "../../../hooks/CartContext";
import { api } from "../../../services/api";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export default function CheckoutForm() {
    const { cartProducts, clearCart } = useCart();
    const stripe = useStripe();
    const elements = useElements();
    const {
        state: { clientSecret },
    } = useLocation();

    const navigate = useNavigate();

    const [message, setMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            console.error("Stripe ou Elements com falha, tente novamente!")
            return;
        }

        setIsLoading(true);

        const { error, paymentIntent } = await stripe.confirmPayment({
            elements,
            redirect: 'if_required',
        });

        if (error) {
            setMessage(error.message);
            toast.error(error.message)
        } else if (paymentIntent && paymentIntent.status === 'succeeded') {

            try {

                const products = cartProducts.map((product) => {
                    return {
                        id: product.id,
                        quantity: product.quantity,
                        price: product.price
                    };
                });

                const { status } = await api.post('/orders', { products }, {
                    validateStatus: () => true
                });

                if (status === 200 || status === 201) {
                    setTimeout(() => {
                        navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
                        clearCart();
                    }, 3000);
                    toast.success('Pedido realizado com sucesso! 👌')
                } else if (status === 400 || status === 409) {
                    toast.error('Falha ao realizar o seu pedido! 🤔')
                } else {
                    throw new Error(); //faz com que caia no catch(error)
                }
            } catch (error) {
                toast.error('Falha no sistema! Tente novamente mais tarde. 😢')
            }
        } else {
            navigate(`/complete?payment_intent_client_secret=${paymentIntent.client_secret}`);
        }

        setIsLoading(false);
    };

    const paymentElementOptions = {
        layout: "accordion"
    }

    return (
        <div className="container">
            <form id="payment-form" onSubmit={handleSubmit}>

                <PaymentElement id="payment-element" options={paymentElementOptions} />
                <button disabled={isLoading || !stripe || !elements} id="submit" className="button">
                    <span id="button-text">
                        {isLoading ? <div className="spinner" id="spinner"></div> : "Pay now"}
                    </span>
                </button>
                {/* Show any error or success messages */}
                {message && <div id="payment-message">{message}</div>}
            </form>
        </div>
    );
}