'use client';
import React, {useEffect, useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise:any = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

const GalleryPage: React.FC = () => {
  const [clientSecret, setClientSecret] = React.useState('');

  React.useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch('/api/create-checkout-session', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({items: [{id: 'prod_OKlQjZZnR0I39L'}]}),
    })
      .then((res) => res.json())
      .then((data) => setClientSecret(data.clientSecret));
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options:any = {
    clientSecret,
    appearance,
  };

  return (
    <div className='relative h-fit w-full'>
      <div className='md:pt16 flex h-fit w-full flex-col pt-32 md:flex-row'>
        <div className='flex h-64 w-1/2 flex-row justify-center rounded-lg bg-slate-300 md:h-96'>
          <h1 className='text-normal flex flex-col justify-center text-center font-bold'>
            <form action='/api/create-checkout-session' method='POST'>
              <button type='submit'>Checkout</button>
            </form>
          </h1>
        </div>
        <div className='text-normal flex flex-row font-bold text-white'>
          Downloadable Digitial Aviation Art
        </div>
        <div className='float-right flex h-64 w-1/2 flex-row justify-center rounded-lg bg-slate-300 md:h-96'>
          <h1 className='text-normal flex flex-col justify-center text-center font-bold'>
            <form action='/api/create-checkout-session' method='POST'>
              <button type='submit'>Checkout</button>
            </form>
          </h1>
        </div>
        <div className='text-normal flex flex-row font-bold text-white'>
          Downloadable Digitial Aviation Art
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
