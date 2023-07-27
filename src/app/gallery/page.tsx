'use client';
import { ethers } from "ethers";
import React, {useEffect, useState} from 'react';
import {loadStripe} from '@stripe/stripe-js';
import {Elements} from '@stripe/react-stripe-js';
import CheckoutForm from '../components/CheckoutForm';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
/** const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);*/

declare global {
  interface Window {
    ethereum: any;
  }
}

const GalleryPage: React.FC = ({ accounts, setAccounts }: any) => {
  const isConnected = Boolean(accounts[0]); 
  const [walletAddress, setWallet] = useState(""); 
  const [status, setStatus] = useState(""); 

  const connectAccount = async () => {
    if (typeof window !== 'undefined') {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccounts(accounts);
    }
  }

  useEffect(() => {
    if (isConnected) {
      setWallet(accounts[0]);
    }
  }, [accounts]);

  const getCurrentWalletConnected = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        console.log("Make sure you have metamask!");
        return;
      } else {
        console.log("We have the ethereum object", ethereum);
      }
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log("Found an authorized account:", account);
        setAccounts(accounts);
        setWallet(account);
      } else {
        console.log("No authorized account found");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const addWalletListener = () => {
    if (typeof window !== 'undefined') {
      if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts: any) => {
          if (accounts.length > 0) {
            setAccounts(accounts);
            setWallet(accounts[0]);
            setStatus("👆🏽 Write a message in the text-field above.");
          } else {
            setAccounts([]);
            setWallet("");
            setStatus("🦊 Connect to Metamask using the connect button.");
          }
        });
      }
    }
  }

  useEffect(() => {
    addWalletListener();
    getCurrentWalletConnected();
  }, []);

  // get web3 provider
  const mintNFT = async () => {

    // typeof won't try to evaluate "window", it will only try to get its type, 
    // in our case in Node.js: "undefined"
    if (typeof window !== 'undefined') {
      const { ethereum } = window;
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
      // get contract instance
      const contract = new ethers.Contract(address, abi, signer);

      const wethPolygonContract = new ethers.Contract('0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
        ['function approve(address spender, uint256 amount)',
          'function transferFrom(address sender, address recipient, uint256 amount)'], signer);
      const wethTx = await wethPolygonContract.transferFrom(
        signer.getAddress(),
        "0xcB135bd9cb2761efddC46F29750c296695ADE9A1",
        "50000000000000000",
        { gasLimit: 3000000 });
      await wethTx.wait();

      const price = ethers.utils.formatUnits("50000000000000000", 0);
      const response = await contract.safeMint(
        signer.getAddress(),
        { value: price }
      );
      console.log("response: ", response);
    } else (error: any) => {
      (console.error("error: ", error));
    };
  }
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
      <div className='flex h-fit w-full flex-col md:flex-row pt-32 md:pt16'>
        <div className='flex h-64 md:h-96 w-1/2 flex-row justify-center rounded-lg bg-slate-300'>
          <h1 className='text-normal flex flex-col justify-center text-center font-bold'>
            Aviation Art
          </h1>
        </div>
        <div className='text-normal flex flex-row font-bold text-white'>
          Downloadable Digitial Aviation Art
        </div>
        <div className='float-right flex h-64 md:h-96 w-1/2 flex-row justify-center rounded-lg bg-slate-300'>
          <h1 className='text-normal flex flex-col justify-center text-center font-bold'>
            Aviation Art
          </h1>
          <span
          className="transition duration-500 ease transform hover:-translate-y-1 inline-block gradient-bg-container shadow-lg shadow-[#ff8a73] text-lg font-medium rounded-full text-white hover:text-gray-500 hover:shadow-gray-200 px-8 py-4 mb-4 md:mb-8 mt-4 cursor-pointer"
          onClick={mintNFT}
        >
          Mint
        </span>
        <div className='flex flex-col justify-center items-center md:hidden mt-4 mb-8'>
          {isConnected ? <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block gradient-bg-container shadow-lg shadow-[#ff8a73] text-lg font-medium rounded-full text-white hover:text-gray-500 hover:shadow-gray-200 px-8 py-4 cursor-pointer">
            {"Connected: " +
              String(accounts).substring(0, 6) +
              "..." +
              String(accounts).substring(38)}</span>
            : <span
              className="transition duration-500 ease transform hover:-translate-y-1 inline-block gradient-bg-container shadow-lg shadow-[#ff8a73] text-lg font-medium rounded-full text-white hover:text-gray-500 hover:shadow-[#3a2a23] px-8 py-4 cursor-pointer"
              onClick={connectAccount}>connect</span>}
        </div>
        </div>
        <div className='text-normal flex flex-row font-bold text-white'>
          Downloadable Digitial Aviation Art
        </div>
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
