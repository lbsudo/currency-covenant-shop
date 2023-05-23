//Work in progress
"use client"

import React, { useState } from 'react';
import { useTheme } from 'next-themes';

const FaqDropDowns: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  return (
    <>
      <div className="relative flex flex-col items-center justify-center">
        <button
          onClick={toggleDropdown}
          className={`bg-transparent flex flex-row ${isDarkMode ? 'text-primary' : 'text-dark-primary'} px-12 py-2 rounded`}
        >
          <p className='mr-80'>DO YOU OFFER INTERNATIONAL SHIPPING?</p>
          <p className='pl-10'>+</p>
        </button>
        {isOpen && (
          <div className=" mt-2 w-1/3 bg-white shadow-lg rounded p-4">
            <p className="text-gray-700 text-sm text-center">
              Currency Covenant offers international shipping for orders placed online.

              Orders shipped outside of the United States will be subject to customs duties/taxes. Payment of duties at checkout guarantees that your package will arrive fully landed.          </p>
          </div>
        )}
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <button
          onClick={toggleDropdown}
          className={`bg-transparent flex flex-row ${isDarkMode ? 'text-primary' : 'text-dark-primary'} px-12 py-2 rounded`}
        >
          <p className='mr-80'>WHAT CURRENCY ARE YOUR PRICES IN?</p>
          <p className='pl-10'>+</p>
        </button>
        {isOpen && (
          <div className=" mt-2 w-1/3 bg-white shadow-lg rounded p-4">
            <p className="text-gray-700 text-sm text-center">
              Orders placed by customers residing in the United States will be charged in US Dollars (USD).

              International customers will see prices in USD until the checkout page, where they will convert to the local currency of the country of residence.    </p>
          </div>
        )}
      </div>

      <div className="relative flex flex-col items-center justify-center">
        <button
          onClick={toggleDropdown}
          className={`bg-transparent flex flex-row ${isDarkMode ? 'text-primary' : 'text-dark-primary'} px-12 py-2 rounded`}
        >
          <p className='mr-80'>WHAT CURRENCY ARE YOUR PRICES IN?</p>
          <p className='pl-10'>+</p>
        </button>
        {isOpen && (
          <div className=" mt-2 w-1/3 bg-white shadow-lg rounded p-4">
            <p className="text-gray-700 text-sm text-center">
              Orders placed by customers residing in the United States will be charged in US Dollars (USD).

              International customers will see prices in USD until the checkout page, where they will convert to the local currency of the country of residence.    </p>
          </div>
        )}
      </div>

    </>
  );
};

export default FaqDropDowns;

