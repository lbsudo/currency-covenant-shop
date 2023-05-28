"use client"

import React from 'react'
import Link from 'next/link';
import { useTheme } from 'next-themes'

function ShopNow() {
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  return (
    <>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <Link href='/category/mens-all' className={` text-[#ECECEC] border ${isDarkMode ? 'border-primary' : 'border-primary'} px-6 py-3 rounded-none font-bold`}>
          SHOP NOW
        </Link>
      </div>
    </>
  )
}

export default ShopNow
