import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import logo from '../../public/images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWhatsapp,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faStreetView, faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faCircleXmark } from '@fortawesome/free-regular-svg-icons'
import DialogModal from './dialogModal'
import styles from './navbar.module.css'

const Navbar = () => {
  const [dialogIsOpen, setDialogIsOpen] = useState(false)

  return (
    <nav className='mb-3 flex items-center justify-between rounded-lg bg-gradient-to-r from-gray-100 to-gray-50 px-2 py-3 shadow-xl'>
      <section>
        <div className='flex items-center gap-2'>
          <Link href='/'>
            <Image
              src={logo}
              alt='logo'
              width={45}
              height={45}
              className='rounded-full border-4 border-slate-950 object-contain shadow-2xl hover:border-slate-800'
            />
          </Link>
          <Link href='/'>
            <h1 className='text-lg font-extrabold text-slate-950 hover:text-slate-600 md:text-3xl'>
              Aquaman Bali
            </h1>
          </Link>
        </div>
      </section>

      <section>
        {/* desktop only */}
        <div className='flex items-center'>
          <div className='hidden items-center sm:flex'>
            <Link href='/offers' className='me-2'>
              <h2 className='text-lg font-bold text-slate-950 hover:text-slate-600 md:text-xl'>
                Offers
              </h2>
            </Link>
            <Link href='/about-me' className='me-2'>
              <h2 className='text-lg font-bold text-slate-950 hover:text-slate-600 md:text-xl'>
                About me
              </h2>
            </Link>
          </div>

          {/* desktop and mobile */}
          <Link href='https://goo.gl/maps/iHPokm4Q943N2f2fA'>
            <FontAwesomeIcon
              icon={faStreetView}
              className='me-2 text-3xl text-amber-400 hover:text-amber-500'
            />
          </Link>
          <Link href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'>
            <FontAwesomeIcon
              icon={faWhatsapp}
              className='me-2 text-3xl font-bold text-teal-700 hover:text-teal-500'
            />
          </Link>
          <Link href='https://www.instagram.com/aquaman_bali/'>
            <FontAwesomeIcon
              icon={faInstagram}
              className='text-3xl text-purple-600 hover:text-purple-500'
            />
          </Link>

          {/* mobile */}
          <div
            className='ms-2 flex flex-col items-center hover:animate-spin_90 sm:hidden'
            onClick={() =>
              setDialogIsOpen((prev) => {
                return !prev
              })
            }
          >
            <span className='my-1 block h-1 w-8 rounded bg-slate-950'></span>
            <div className='flex w-8 justify-between'>
              <span className='my-1 block h-1.5 w-3 animate-pulse rounded bg-amber-500'></span>{' '}
              <span className='my-1 block h-1.5 w-3 animate-pulse rounded bg-amber-500'></span>{' '}
            </div>
            <span className='my-1 block h-1 w-8 rounded bg-slate-950'></span>
          </div>

          <DialogModal
            isOpen={dialogIsOpen}
            onClose={() => setDialogIsOpen(false)}
          >
            <div className='flex w-full justify-end'>
              <button
                className='me-1 mt-1 text-2xl'
                onClick={() => setDialogIsOpen(false)}
              >
                <FontAwesomeIcon icon={faCircleXmark} />
              </button>
            </div>
            <div className='flex w-full flex-col items-center gap-4'>
              <Link
                href='/about-me'
                onClick={() => setDialogIsOpen(false)}
                className={`me-2 ${styles.bounce_short}`}
              >
                <h2 className='text-lg font-bold text-slate-950 hover:text-slate-600 md:text-xl'>
                  About me
                </h2>
              </Link>

              <Link
                href='/offers'
                onClick={() => setDialogIsOpen(false)}
                className={`me-2 ${styles.bounce_short}`}
              >
                <h2 className='text-lg font-bold text-slate-950 hover:text-slate-600 md:text-xl'>
                  Surf Lessons
                </h2>
              </Link>
              <Link
                href='/offers'
                onClick={() => setDialogIsOpen(false)}
                className={`me-2 ${styles.bounce_short}`}
              >
                <h2 className='text-lg font-bold text-slate-950 hover:text-slate-600 md:text-xl'>
                  Surf Trips
                </h2>
              </Link>
              <Link
                href='/offers'
                onClick={() => setDialogIsOpen(false)}
                className={`me-2 ${styles.bounce_short}`}
              >
                <h2 className='text-lg font-bold text-slate-950 hover:text-slate-600 md:text-xl'>
                  Photo & Video | Drone Shots
                </h2>
              </Link>
              <Link
                href='/offers'
                onClick={() => setDialogIsOpen(false)}
                className={`me-2 ${styles.bounce_short}`}
              >
                <h2 className='text-lg font-bold text-slate-950 hover:text-slate-600 md:text-xl'>
                  Video Analysis
                </h2>
              </Link>

              <div className='flex w-full items-center justify-around pb-5'>
                <Link
                  href='https://goo.gl/maps/iHPokm4Q943N2f2fA'
                  onClick={() => setDialogIsOpen(false)}
                >
                  <FontAwesomeIcon
                    icon={faStreetView}
                    className='me-2 text-4xl text-amber-400 hover:text-amber-500'
                  />
                </Link>
                <Link
                  href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
                  onClick={() => setDialogIsOpen(false)}
                >
                  <FontAwesomeIcon
                    icon={faWhatsapp}
                    className='text-4xl font-bold text-teal-700 hover:text-teal-500'
                  />
                </Link>

                <Link
                  href='https://www.instagram.com/aquaman_bali/'
                  onClick={() => setDialogIsOpen(false)}
                >
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className='text-4xl text-purple-600 hover:text-purple-500'
                  />
                </Link>
                <Link
                  href='http://www.google.com'
                  onClick={() => setDialogIsOpen(false)}
                >
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className='text-4xl text-cyan-500 hover:text-cyan-400'
                  />
                </Link>
                <Link
                  href='https://www.buymeacoffee.com/aquamansurfbali'
                  onClick={() => setDialogIsOpen(false)}
                >
                  <FontAwesomeIcon
                    icon={faMugHot}
                    className='text-4xl text-amber-400 hover:text-amber-500'
                  />
                </Link>
              </div>
            </div>
          </DialogModal>
        </div>
      </section>
    </nav>
  )
}

export default Navbar
