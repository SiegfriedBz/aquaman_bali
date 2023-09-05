import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faHandPointLeft,
  faHandPointRight,
  faVanShuttle,
} from '@fortawesome/free-solid-svg-icons'

const MapPopup = ({ popup }) => {
  return (
    <div className='h-50 flex w-auto flex-col items-center justify-center'>
      <Image className='w-full rounded-lg' src={popup.image} alt='surf' />
      <Footer location={popup.location}>
        <span className='text-lg text-slate-950'>{popup.location}</span>
      </Footer>
    </div>
  )
}

export default MapPopup

const Footer = ({ location, children }) => {
  return (
    <>
      {location === 'Canggu' ? (
        <a
          href='https://goo.gl/maps/iHPokm4Q943N2f2fA'
          className='flex flex-col items-center justify-center outline-none'
        >
          {children}
          <div className='mb-3 flex items-center justify-center gap-2'>
            <FontAwesomeIcon
              icon={faHandPointRight}
              className='text-2xl text-sky-500 hover:text-sky-400'
            />
            <span className='block text-center text-xl'>Visit us</span>
            <FontAwesomeIcon
              icon={faHandPointLeft}
              className='text-2xl text-sky-500 hover:text-sky-400'
            />
          </div>
        </a>
      ) : (
        <>
          {children}
          <div className='mb-3 flex items-center justify-center gap-2'>
            <FontAwesomeIcon
              icon={faVanShuttle}
              className='text-2xl text-amber-400 hover:text-amber-500'
            />
            <span className='block text-center text-xl'>Surf Trip</span>
          </div>
        </>
      )}
    </>
  )
}
