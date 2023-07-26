'use client';
import React, {useEffect, useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
/** const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);*/

const GalleryPage: React.FC = () => {
  /** const [art, setArt] = useState<any>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    useEffect(() => {
        const getArt = async () => {
            try {
                const res = await fetch(`/gallery/${art}`);
                const data = await res.json();
                setArt(data);
                setLoading(false);
            } catch (error) {
                setError(true);
            }
        }
        getArt();
    }, 
    [art]);
   
  return (
      <h1 className="text-white flex flex-col h-screen w-full text-4xl font-bold text-center justify-between .h1 p-12 pt-64 md:pt-12">
        {art.title}Gallery
      </h1>
  );*/
  const [clientSecret, setClientSecret] = React.useState('');

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/api/create-payment-intent', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({items: [{id: 'xl-tshirt'}]}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };

  return (
    <div className='relative h-fit w-full'>
      <div className='flex flex-row h-96 w-96 justify-center rounded-lg bg-slate-300 p-16'>
        <h1 className='flex flex-col text-normal justify-center text-center font-bold'>
          Aviation Art
        </h1>
      </div>

      <div className='flex flex-row h-96 w-96 justify-center float-right rounded-lg bg-slate-300 p-16'>
        <h1 className='flex flex-col text-normal justify-center text-center font-bold'>
          Aviation Art
        </h1>
      </div>
      {/** {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )} */}
      {/** {clientSecret && (
        <Elements options={options} stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      )} */}
    </div>
  );
};

export default GalleryPage;
