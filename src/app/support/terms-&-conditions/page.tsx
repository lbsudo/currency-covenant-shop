import React from 'react'
import TocDropDownButton from '@/components/support/TocDropDownButton'
import CookiesDropDown from '@/components/support/CookiesDropdown'


export default function contact() {
  return (
    <div className='pb-12'>
      <h1 className='text-2xl flex justify-center pt-3 pb-6'>TERMS & CONDITIONS</h1>
      <div className='px-3 text-2xl flex flex-col justify-center items-center'>
        <TocDropDownButton />  
        <CookiesDropDown />
      </div>
    </div>
  )
}
