import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHandPointLeft,
  faHandPointRight,
  faVanShuttle,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

const MapPopup = ({ popup, isSurfTripsRoute }) => {
  return (
    <div className='h-50 flex w-auto flex-col items-center justify-center text-slate-800 dark:text-white'>
      <Image className='w-full rounded-t-lg' src={popup.image} alt='surf' />
      <Footer location={popup.location} isSurfTripsRoute={isSurfTripsRoute}>
        <span className='text-lg text-slate-950 dark:text-white'>
          {popup.location}
        </span>
      </Footer>
    </div>
  )
}

export default MapPopup

const Footer = ({ location, isSurfTripsRoute, children }) => {
  return (
    <div className='w-full rounded-b-lg dark:bg-slate-900'>
      {location === 'Canggu' ? (
        <a
          href='https://goo.gl/maps/iHPokm4Q943N2f2fA'
          target={'_blank'}
          className='flex flex-col items-center justify-center outline-none'
        >
          {children}
          <div className='mb-3 flex items-center justify-center gap-2'>
            <FontAwesomeIcon
              icon={faHandPointRight}
              className='text-2xl text-sky-500 hover:text-sky-400'
            />
            <span className='block text-center text-xl text-slate-800 hover:text-slate-500 dark:text-white dark:hover:text-gray-200'>
              Visit us
            </span>
            <FontAwesomeIcon
              icon={faHandPointLeft}
              className='text-2xl text-sky-500 hover:text-sky-400'
            />
          </div>
        </a>
      ) : (
        <>
          <div className='text-center'>{children}</div>

          {isSurfTripsRoute ? (
            <span className='mb-3 flex items-center justify-center gap-2'>
              <FontAwesomeIcon
                icon={faVanShuttle}
                className='text-2xl text-amber-400 hover:text-amber-500'
              />
              <span className='block text-center text-xl text-slate-800 hover:text-slate-500 dark:text-white dark:hover:text-gray-200'>
                Surf Trip
              </span>
            </span>
          ) : (
            <Link
              href={`/surf-trips/#${decodeURIComponent(
                location
              ).toLowerCase()}`}
              className='mb-3 flex items-center justify-center gap-2 outline-none'
            >
              <FontAwesomeIcon
                icon={faVanShuttle}
                className='text-2xl text-amber-400 hover:text-amber-500'
              />

              <span className='block text-center text-xl text-slate-800 hover:text-slate-500 dark:text-white dark:hover:text-gray-200'>
                Surf Trip
              </span>
            </Link>
          )}
        </>
      )}
    </div>
  )
}
