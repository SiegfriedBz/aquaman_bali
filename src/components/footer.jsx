import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faMugHot } from '@fortawesome/free-solid-svg-icons'
import swissFlag from '../../public/logos/swiss-flag.svg'
import tikTokLogo from '../../public/logos/tiktok-logo.png'

const operatingHoursVariants = {
  initial: {
    scale: 0.8,
    opacity: 1,
  },
  animate: {
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  },
}

const Footer = () => {
  const operatingHoursRef = useRef(null)
  const operatingHoursInInView = useInView(operatingHoursRef, {
    once: true,
    amount: 0.1,
  })
  return (
    <footer className='flex flex-col px-2 pb-3 pt-5 shadow-2xl'>
      {/* open hours */}

      <motion.div
        ref={operatingHoursRef}
        variants={operatingHoursVariants}
        initial='initial'
        animate={operatingHoursInInView ? 'animate' : 'initial'}
        className='mb-4 flex flex-row justify-center text-lg text-slate-800 dark:text-white'
      >
        Every day 6:00 am - 6:00 pm
      </motion.div>

      {/* links */}
      <section id='contact'>
        <div className='flex flex-row justify-between'>
          {/* contact */}
          <div className='flex-start flex flex-col items-start'>
            <address>
              <h2 className='font-bold'>Aquaman Bali</h2>
              Batu Bolong, Canggu
              <br />
              <span className='text-slate-800 hover:text-slate-500 dark:text-white dark:hover:text-gray-200'>
                Email:{' '}
                <a href='mailto:rendy280720gmail.com'>aquamanbali@gmail.com</a>
              </span>
              <br />
              <span className='text-slate-800 hover:text-slate-500 dark:text-white dark:hover:text-gray-200'>
                Tel: <a href='tel:+6282289427321'>0822-8942-7321</a>
              </span>
            </address>
          </div>

          {/* icons */}
          <div className='my-auto flex flex-col items-center'>
            <div className='flex items-center justify-between'>
              <a
                href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
                target='_blank'
              >
                <FontAwesomeIcon
                  icon={faWhatsapp}
                  className='px-2 py-1  text-3xl text-teal-700 hover:text-teal-500'
                />
              </a>

              <a href='https://www.instagram.com/aquaman_bali/' target='_blank'>
                <FontAwesomeIcon
                  icon={faInstagram}
                  className='px-2 py-1 text-3xl text-purple-600 hover:text-purple-500'
                />
              </a>
            </div>

            <div className='flex items-center justify-between'>
              <a
                href='https://www.tiktok.com/@aquamanbali'
                target='_blank'
                className='flex items-center'
              >
                <Image
                  src={tikTokLogo}
                  width={35}
                  height={35}
                  alt='tiktok-logo'
                />
              </a>

              <a
                href='https://www.buymeacoffee.com/aquamansurfbali'
                target='_blank'
              >
                <FontAwesomeIcon
                  icon={faMugHot}
                  className='px-2 py-1 text-3xl text-amber-400 hover:text-amber-500'
                />
              </a>
            </div>
          </div>
        </div>

        <h2 className='mb-2 mt-5 text-center text-sm text-slate-800 dark:text-white'>
          <span>
            &copy;{new Date().getFullYear()} Aquaman Bali All Rights Reserved
          </span>
        </h2>

        {/* credits */}
        <a
          href='https://api.whatsapp.com/send/?phone=41767294354&text&type=phone_number&app_absent=0'
          target='_blank'
        >
          <span className='flex items-center justify-center text-sm text-slate-800 hover:text-slate-500 dark:text-white dark:hover:text-gray-200'>
            <Image
              src={swissFlag}
              alt='Swiss Flag'
              width={16}
              height={16}
              className='me-2 rounded-full'
            />
            <span>Swiss-made by SiegfriedB</span>
          </span>
        </a>
      </section>
    </footer>
  )
}

export default Footer
