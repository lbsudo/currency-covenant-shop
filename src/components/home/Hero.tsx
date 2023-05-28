"use client"

import React from 'react'
import Image from 'next/image'
import Urban from '../../../public/home/urban.svg'
import ShopNow from '../buttons/ShopNow'


export default function Hero() {


  return (
    <div className='h-screen w-full z-0 relative'>
      <Image
        src={Urban}
        alt="banner"
        fill
        priority
        style={{ objectFit: "cover" }}
        className='absolute '
      />
      <ShopNow />
          </div>
  )
}
