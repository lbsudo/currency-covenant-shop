"use client"

import React from 'react'
import { useState } from 'react';
import { MagnifyingGlassIcon, XMarkIcon } from '@heroicons/react/24/outline'
import { useTheme } from 'next-themes';

type Props = {}

function NavSearch({ }: Props) {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const handleSearchClick = () => {
    setIsSearchOpen((prevState) => !prevState);
  };

  return (
    <>
      {isSearchOpen ? (
        <div className="relative ml-3 ">
          <div className="relative">
            <button>
              <MagnifyingGlassIcon className='w-8 h-8 absolute top-0 left-0 ml-2 mt-1' />
              <input
                className={`flex bg-stone-400 dark:bg-stone-400 w-full p-2 rounded-full pl-12`}
                type="text"
                placeholder="Search"
              />
            </button>
          </div>
          <button className="absolute top-0 right-0 pr-3 py-2" onClick={handleSearchClick}>
            <XMarkIcon className='w-6 h-6' />
          </button>
        </div>
      ) : (
        <button
          className=''
          onClick={handleSearchClick}
        >
          <MagnifyingGlassIcon className={`w-8 h-8 ${isDarkMode ? 'text-primary' : 'text-dark-primary'} `} /> 
        </button>
      )}
    </>
  )
}

export default NavSearch

