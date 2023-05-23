import Link from 'next/link'
import React from 'react'


export default function contact() {
  return (
    <>
      <h1 className='text-2xl flex justify-center pb-6'>CONTACT</h1>
      <div className='px-3'>
        <p>For questions related to online orders, please send us an email at info@currencycovenantshop.com. Kindly include your order number for faster assistance.</p>
        <br />
        <p>We aim to respond to each email within 1 business day however during new product releases it may take us a little longer. We appreciate your patience. Please note that our current hours of service are between 9:00am – 5:00pm EST Monday to Friday.</p>
        <br />
        <p>For all other questions, please refer to our {" "}
          <Link className='underline underline-offset-2' href='/support/faq'>FAQs</Link> and{" "}
          <Link className='underline underline-offset-2' href='/support/terms-&-conditions'>Terms</Link>
        </p>
      </div>
    </>
  )
}
