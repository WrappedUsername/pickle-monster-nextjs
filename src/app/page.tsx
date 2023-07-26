import { loadStripe } from '@stripe/stripe-js';
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./components/CheckoutForm";

// localhost:3000/

// const stripe = loadStripe(process.env.STRIPE_SECRET_KEY);
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const appearance = { /* appearance */ };
const options = { /* options */ };
const elements = stripe.elements({ clientSecret, appearance });
const paymentElement = elements.create('payment', options);
paymentElement.mount('#payment-element');

export default function Home() {
  return (
    <div className='flex h-screen w-full flex-col items-center justify-between pt-64 text-4xl font-bold md:pt-12'>
      <video autoPlay muted loop className='.video flex object-cover'>
        <source src='/vbg.mp4' type='video/mp4' />
      </video>
      <video autoPlay muted loop className='.video flex object-cover'>
        <source src='/intro.mp4' type='video/mp4' />
      </video>
    </div>
  );
}
