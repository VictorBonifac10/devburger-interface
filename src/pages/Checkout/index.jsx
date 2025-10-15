import { useLocation } from 'react-router-dom';
import { Elements } from '@stripe/react-stripe-js';
import stripePromise from '../../config/stripeConfig';
import CheckoutForm from '../../components/Stripe/CheckoutForm';

export function Checkout() {
  const location = useLocation();
  const clientSecret = location.state?.clientSecret || null;

  console.log(clientSecret);

  if (!clientSecret) {
    return <div>Erro, volte e tente novamente</div>;
  }

  return (
    <Elements stripe={stripePromise} options={{ clientSecret }}>
      <CheckoutForm />
    </Elements>
  );
}
