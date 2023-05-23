import React from 'react'
import FaqDropDowns from '@/components/support/FaqDropdowns'


export default function contact() {
  return (
    <div className='pb-12'>
      <h1 className='text-2xl flex justify-center pt-3 pb-6'>FREQUENTLY ASKED QUESTIONS</h1>
      <div className='px-3 text-2xl flex flex-col justify-center items-center'>
        <FaqDropDowns />
      </div>
    </div>
  )
}
