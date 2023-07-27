'use client';
import React, {useEffect, useState} from 'react';
import Link from 'next/link';

declare global {
  interface Window {
    ethereum: any;
  }
}

const Navbar: React.FC = ({ accounts, setAccounts }:any) => {
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(false);
  const isConnected = Boolean(accounts[0]);
  const [walletAddress, setWallet] = useState('');
  const [status, setStatus] = useState('');

  const connectAccount = async () => {
    if (typeof window !== 'undefined') {
      const accounts = await window.ethereum.request({
        method: 'eth_requestAccounts',
      });
      setAccounts(accounts);
    }
  };

  useEffect(() => {
    if (isConnected) {
      setWallet(accounts[0]);
    }
  }, [accounts]);

  const getCurrentWalletConnected = async () => {
    try {
      const {ethereum} = window;
      if (!ethereum) {
        console.log('Make sure you have metamask!');
        return;
      } else {
        console.log('We have the ethereum object', ethereum);
      }
      const accounts = await ethereum.request({method: 'eth_accounts'});
      if (accounts.length !== 0) {
        const account = accounts[0];
        console.log('Found an authorized account:', account);
        setAccounts(accounts);
        setWallet(account);
      } else {
        console.log('No authorized account found');
      }
    } catch (error) {
      console.log(error);
    }
  };

  const addWalletListener = () => {
    if (typeof window !== 'undefined') {
      if (window.ethereum) {
        window.ethereum.on('accountsChanged', (accounts: any) => {
          if (accounts.length > 0) {
            setAccounts(accounts);
            setWallet(accounts[0]);
            setStatus('👆🏽 Write a message in the text-field above.');
          } else {
            setAccounts([]);
            setWallet('');
            setStatus('🦊 Connect to Metamask using the connect button.');
          }
        });
      }
    }
  };

  useEffect(() => {
    addWalletListener();
    getCurrentWalletConnected();
  }, []);

  /**useEffect(() => {
    try {
      setLoading(false);
    } catch (error) {
      setError(true);
    }
  }, []);*/

  return (
    <nav className='relative h-16 w-full'>
      <div className='flexBetween'>
        <Link
          className='flex h-32 w-full cursor-pointer flex-col p-4 text-2xl font-bold text-white md:h-16 md:w-3/4 md:flex-row'
          href={'/'}
        >
          Pickle Monster Cinematics
        </Link>
        <p className='md:1/2 flex h-16 w-full flex-col items-center justify-between p-4 text-sm text-white md:flex-row'>
          A DCS World fan art and cinematic website
        </p>
        <Link
          className='float-right flex h-32 w-full cursor-pointer flex-col p-4 text-2xl font-bold text-white md:h-16 md:w-1/4 md:flex-row'
          href={'/gallery/'}
        >
          Art Gallery
        </Link>
        <div className='md:fixed flex flex-col md:w-7/12 h-fit justify-center items-center mt-4 px-4'>
        {isConnected ? <span className="transition duration-500 ease transform hover:-translate-y-1 inline-block shadow-lg shadow-[#ff8a73] text-lg font-medium rounded-full text-white hover:text-gray-500 hover:shadow-gray-200 px-8 py-3 cursor-pointer">
          {"Connected: " +
            String(accounts).substring(0, 6) +
            "..." +
            String(accounts).substring(38)}</span>
          : <span
            className="transition duration-500 ease transform hover:-translate-y-1 inline-block shadow-lg shadow-[#ff8a73] text-lg font-medium rounded-full text-white hover:text-gray-500 hover:shadow-[#3a2a23] px-8 py-3 cursor-pointer"
            onClick={connectAccount}>Connect</span>}
      </div>
      </div>
    </nav>
  );
};

export default Navbar;
