import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useColorMode } from '../../hooks/useColorMode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faWhatsapp,
  faInstagram,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons'
import { faStreetView, faMugHot } from '@fortawesome/free-solid-svg-icons'
import { faSun, faMoon } from '@fortawesome/free-regular-svg-icons'
import logo from '../../public/logos/logo.png'

const Navbar = () => {
  const router = useRouter()
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  const [colorMode, setColorMode] = useColorMode()
  const isHomePage = router.asPath === '/'

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
  }

  const toggleIcon =
    colorMode === 'dark' ? (
      <FontAwesomeIcon icon={faSun} />
    ) : (
      <FontAwesomeIcon icon={faMoon} />
    )

  return (
    <header
      id='header'
      className='sticky top-0 z-50 bg-gray-50 dark:bg-slate-900'
    >
      <section className='mx-auto flex max-w-xl items-center justify-between p-4'>
        <div className='flex items-center gap-2'>
          <Link href='/' onClick={() => setMobileMenuIsOpen(false)}>
            <Image
              src={logo}
              alt='logo'
              width={45}
              height={45}
              className='rounded-full border-4 object-contain shadow-2xl ring-2 ring-slate-900'
            />
          </Link>
          <Link href='/' onClick={() => setMobileMenuIsOpen(false)}>
            <h1 className='text-2xl font-extrabold text-slate-950 hover:text-slate-600 dark:text-white dark:hover:text-slate-200 md:text-3xl'>
              Aquaman Bali
            </h1>
          </Link>
        </div>

        {/* mobile */}
        <section id='mobile'>
          <div className='flex items-center'>
            <button
              onClick={toggleColorMode}
              className='me-5 mt-1 text-2xl dark:text-white'
            >
              {toggleIcon}
            </button>
            <button
              id='hamburger-button'
              className={`${
                mobileMenuIsOpen ? 'toggle-mobile-btn' : ''
              } relative h-8 w-8 rounded-2xl text-3xl md:hidden`}
              onClick={() => setMobileMenuIsOpen((prev) => !prev)}
            >
              <div
                className={`absolute top-4 h-1 w-4 ${
                  !mobileMenuIsOpen ? 'animate-pulse' : ''
                } rounded bg-amber-500 transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-slate-950 before:transition-all before:duration-500 before:content-[""] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-slate-950 after:transition-all after:duration-500 after:content-[""] before:dark:bg-white after:dark:bg-white`}
              ></div>
            </button>
          </div>
        </section>

        {/* desktop */}
        <nav
          className='hidden space-x-8 text-xl md:block'
          aria-label='main-navigation'
        >
          <Link href='/' className='hover:opacity-90 dark:bg-white'>
            Home
          </Link>

          <Link href='/offers' className='hover:opacity-90'>
            Offers
          </Link>

          <button
            onClick={() => {
              const route = isHomePage ? '#testimonials' : '/#testimonials'
              router.push(route)
            }}
            className='hover:opacity-90'
          >
            Testimonials
          </button>

          <button
            onClick={() => router.push('#contact')}
            className='hover:opacity-90'
          >
            Contact
          </button>
        </nav>
      </section>

      {mobileMenuIsOpen && (
        <section
          id='mobile-menu'
          className='top-50 absolute flex w-full origin-top animate-open-menu flex-col justify-center bg-slate-50 text-4xl dark:bg-slate-900 md:hidden'
          onClick={() => setMobileMenuIsOpen(false)}
        >
          <div className='flex w-full items-center justify-around pb-1 pt-5'>
            <a href='https://goo.gl/maps/iHPokm4Q943N2f2fA'>
              <FontAwesomeIcon
                icon={faStreetView}
                className='me-2 text-4xl text-amber-400 hover:text-amber-500'
              />
            </a>
            <a href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'>
              <FontAwesomeIcon
                icon={faWhatsapp}
                className='text-4xl font-bold text-teal-700 hover:text-teal-500'
              />
            </a>

            <a href='https://www.instagram.com/aquaman_bali/'>
              <FontAwesomeIcon
                icon={faInstagram}
                className='text-4xl text-purple-600 hover:text-purple-500'
              />
            </a>

            <a href='http://www.google.com'>
              <FontAwesomeIcon
                icon={faTwitter}
                className='text-4xl text-cyan-500 hover:text-cyan-400'
              />
            </a>

            <a href='https://www.buymeacoffee.com/aquamansurfbali'>
              <FontAwesomeIcon
                icon={faMugHot}
                className='text-4xl text-amber-400 hover:text-amber-500'
              />
            </a>
          </div>

          <nav
            className='flex min-h-screen flex-col items-center py-6 dark:text-white'
            aria-label='mobile'
          >
            <div className='flex w-full flex-col items-center gap-4'>
              <Link
                href='/about-me'
                className='w-full pb-2 text-center hover:opacity-90'
              >
                About Me
              </Link>

              <button
                onClick={() => {
                  const route = isHomePage ? '#location' : '/#location'
                  router.push(route)
                }}
                className='hover:opacity-90'
              >
                Visit Us
              </button>

              <Link
                href='/#testimonials'
                className='w-full py-2 text-center hover:opacity-90'
              >
                Testimonials
              </Link>

              <Link
                href='/surf-lessons'
                className='w-full py-2 text-center hover:opacity-90'
              >
                Surf Lessons
              </Link>

              <Link
                href='/surf-trips'
                className='w-full py-2 text-center hover:opacity-90'
              >
                Surf Trips
              </Link>

              <Link
                href='/videos'
                className='w-full py-2 text-center hover:opacity-90'
              >
                Photo & Video | Drone
              </Link>

              <Link
                href='/gallery'
                className='w-full py-2 text-center hover:opacity-90'
              >
                Gallery
              </Link>
            </div>
          </nav>
        </section>
      )}
    </header>
  )
}

export default Navbar
