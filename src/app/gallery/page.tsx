'use client';
import React, {useEffect, useState} from 'react';

const GalleryPage: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, []);

  return (
    <div className='relative h-fit w-full'>
      <div className='md:pt16 flex h-fit w-full flex-col pt-32 md:flex-row'>
        <div className='flex h-64 w-1/2 flex-row justify-center rounded-lg bg-slate-300 md:h-96'>
        <h1 className='text-normal flex flex-col justify-center text-center font-bold'>
            <form action='/checkout_sessions' method='POST'>
              <button type='submit'>Checkout</button>
            </form>
          </h1>
        </div>
        <div className='text-normal flex flex-row font-bold text-white'>
          Downloadable Digitial Aviation Art
        </div>
        <div className='float-right flex h-64 w-1/2 flex-row justify-center rounded-lg bg-slate-300 md:h-96'>
        <h1 className='text-normal flex flex-col justify-center text-center font-bold'>
            <form action='/checkout_sessions' method='POST'>
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
