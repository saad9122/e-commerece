import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'


import fbfooter from '../../../assets/icons/fbfooter.svg'
import twfooter from "../../../assets/icons/twitterfooter.svg"
import linkfooter from "../../../assets/icons/linkedinfooter.svg"
import instafooter from "../../../assets/icons/instafooter.svg"

export const Footer = () => {
  return (
    <section className='bg-gray-900 p-4 py-8 text-white'>
      <div className='flex flex-wrap gap-y-6'>
        <div className='flex-1 basis-full md:basis-1/2 lg:basis-1/4'>

        <p className='mb-2'>Stay Connected</p>

          <ul className='text-gray-400 space-y-2'>
            <li>Gift Cards</li>
            <li>Promotion</li>
            <li>Find a Store</li>
            <li>Sign Up for Email</li>
            <li>Become a Member</li>
            <li>Send us Feedback</li>
          </ul>
        </div>
        <div className='flex-1 basis-full md:basis-1/2 lg:basis-1/4'>
          <p className='mb-2'>Get Help</p>
          <ul className='text-gray-400 space-y-2'>
            <li>Order Status</li>
            <li>Shipping and Delivery</li>
            <li>Returns</li>
            <li>Order Cencellation</li>
            <li>Payment Option</li>
            <li>Gift Card Balance</li>
          </ul>
        </div>
        <div className='flex-1 basis-full md:basis-1/2 lg:basis-1/4'>
          <p className='mb-2'>About me</p>
          <ul className='text-gray-400 space-y-2'>
            <li>News</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Purpose</li>
          </ul>
        </div>
        <div className='flex-1 basis-full md:basis-1/2 lg:basis-1/4'>
            <div>
            <div className='flex space-x-2'>
                  <img src={fbfooter}    alt='Facebook'  className='w-12'/>
                  <img src={twfooter}    alt='Twitter '  className='w-12'/>
                  <img src={linkfooter}  alt='Linkedin'  className='w-12' />
                  <img src={instafooter} alt='Instagram' className='w-12' />
              </div>
            
          </div>
        </div>

      </div>
    </section>
  )
}
