import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWhatsapp,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons'
import { faMugHot, faHeart } from '@fortawesome/free-solid-svg-icons'

import SwissFlag from '../../public/logos/swiss-flag.svg'

const Footer = () => {
  return (
    <footer className='mt-3 flex flex-col rounded-lg px-2 py-3 shadow-2xl'>
      {/* open hours */}
      <section>
        <div className='mb-3 flex flex-row justify-center text-lg text-slate-950 hover:text-slate-800'>
          Every day 6:00 am - 6:00 pm
        </div>
      </section>

      {/* links */}
      <section id='contact'>
        <div className='flex flex-row justify-between'>
          {/* contact */}
          <div className='flex-start flex flex-col items-start'>
            <address>
              <h2 className='font-bold'>Aquaman Bali</h2>
              Batu Bolong, Canggu
              <br />
              Email: <a href='mailto:canggu@gmail.com'>canggu@gmail.com</a>
              <br />
              Tel: <a href='tel:+6282289427321'>0822-8942-7321</a>
            </address>
          </div>

          {/* icons */}
          <div className='my-auto flex flex-col items-center justify-around'>
            <div className='flex justify-between'>
              <a href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'>
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className='me-3 p-2 text-3xl font-bold text-teal-700 hover:text-teal-500'
                />
              </a>

              <a href='https://www.instagram.com/aquaman_bali/'>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className='p-2 text-3xl text-purple-600 hover:text-purple-500'
                />
              </a>
            </div>

            <div className='flex justify-between'>
              <a href='http://www.google.com'>
                <FontAwesomeIcon
                  icon={faTwitter}
                  className='me-3 p-2 text-3xl text-cyan-500 hover:text-cyan-400'
                />
              </a>

              <a href='https://www.buymeacoffee.com/aquamansurfbali'>
                <FontAwesomeIcon
                  icon={faMugHot}
                  className='p-2 text-3xl text-amber-400 hover:text-amber-500'
                />
              </a>
            </div>
          </div>
        </div>

        <h2 className='mt-3 text-center text-sm text-slate-800 hover:text-slate-700 dark:text-white dark:hover:text-gray-200'>
          ©2023 SiegfriedBz & Aquaman Bali
        </h2>
        {/* credits */}
        {/* <span className='mt-1 flex items-center justify-center text-sm text-slate-800 hover:text-slate-700'>
          <Image
            src={SwissFlag}
            alt='Swiss Flag'
            width={16}
            height={16}
            className='me-1 rounded-full'
          />
          <span className='me-1'>Swiss-made with</span>
          <span>
            <FontAwesomeIcon icon={faHeart} className='text-red-500' />
          </span>
          <span className='ms-1'>by SiegfriedBz</span>
        </span> */}
      </section>
    </footer>
  )
}

export default Footer
