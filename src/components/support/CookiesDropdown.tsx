"use client"

import React, { useState } from 'react';
import { useTheme } from 'next-themes';

const CookiesDropDown: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  return (
    <div className="relative flex flex-col items-center justify-center">
      <button
        onClick={toggleDropdown}
        className={`bg-transparent flex flex-row ${isDarkMode ? 'text-primary' : 'text-dark-primary'} px-12 py-2 rounded`}
      >
        <p className='mr-80'>COOKIES</p>
        <p className='pl-10'>+</p>
      </button>
      {isOpen && (
        <div className=" mt-2 w-1/3 bg-white shadow-lg rounded p-4">
          <p className="text-gray-700 text-sm text-center">
            To make this site work properly, we sometimes place small data files called cookies on your device. Most big websites do this too.

            What are cookies?

            A cookie is a small text file that a website saves on your computer or mobile device when you visit the site. It enables the website to remember your actions and preferences (such as login, language, font size and other display preferences) over a period of time, so you don’t have to keep re-entering them whenever you come back to the site or browse from one page to another.

            How do we use cookies?

            We use session and permanent cookies to provide:
          </p>
        </div>
      )}
    </div>
  );
};

export default CookiesDropDown;

