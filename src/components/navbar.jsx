import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useColorMode } from '../hooks/useColorMode'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faStreetView, faMugHot } from '@fortawesome/free-solid-svg-icons'
import logo from '../../public/logos/logo.png'
import tikTokLogo from '../../public/logos/tiktok-logo.png'
import { MoonIcon, SunIcon } from './Icons'

const Navbar = () => {
  const router = useRouter()
  const [isClient, setIsClient] = useState(false)
  const [mobileMenuIsOpen, setMobileMenuIsOpen] = useState(false)
  const [colorMode, setColorMode] = useColorMode()
  const isHomePage = router.asPath === '/'

  useEffect(() => {
    setIsClient(true)
  }, [])

  const toggleColorMode = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark')
  }

  const toggleIcon = (
    <>
      {isClient ? (
        colorMode === 'light' ? (
          <MoonIcon className='fill-dark dark:fill-light w-[33px]' />
        ) : (
          <SunIcon className='fill-dark dark:fill-light w-[33px]' />
        )
      ) : (
        ''
      )}
    </>
  )

  return (
    <header
      id='header'
      className='sticky top-0 z-50 
        min-w-full
        border-b border-b-slate-900 bg-white
        px-4 py-6
      dark:border-b-gray-200 dark:bg-slate-900 dark:text-gray-200
        sm:px-16 sm:py-8 md:px-24 lg:px-12 xl:px-32'
    >
      <section className='mx-auto flex items-center justify-between'>
        <div className='flex items-center gap-2 md:gap-4'>
          <Link href='/' onClick={() => setMobileMenuIsOpen(false)}>
            <Image
              src={logo}
              alt='logo'
              width={45}
              height={45}
              className='rounded-full object-contain
                shadow-2xl ring-2
               ring-slate-900 transition duration-300
               hover:scale-125 md:h-14 md:w-14'
            />
          </Link>
          <Link href='/' onClick={() => setMobileMenuIsOpen(false)}>
            <span
              className='text-2xl font-extrabold text-slate-950 transition duration-300
               hover:scale-110 hover:text-slate-600
              dark:text-white dark:hover:text-slate-200
               md:text-3xl'
            >
              Aquaman Bali
            </span>
          </Link>
        </div>

        {/* mobile */}
        <section id='mobile' className='md:hidden'>
          <div className='flex items-center'>
            <button
              onClick={toggleColorMode}
              className='me-5 text-2xl dark:text-white'
            >
              {toggleIcon}
            </button>
            <button
              id='hamburger-button'
              className={`${
                mobileMenuIsOpen ? 'toggle-mobile-btn' : ''
              } relative h-8 w-8 rounded-2xl text-3xl`}
              onClick={() => setMobileMenuIsOpen((prev) => !prev)}
            >
              <div
                className={`absolute top-3.5 h-1 w-4 ${
                  !mobileMenuIsOpen ? 'animate-pulse' : ''
                } rounded bg-amber-500 transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-slate-950 before:transition-all before:duration-500 before:content-[""] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-slate-950 after:transition-all after:duration-500 after:content-[""] before:dark:bg-white after:dark:bg-white`}
              ></div>
            </button>
          </div>
        </section>

        {/* desktop */}
        <nav
          className='hidden items-center space-x-8 text-xl dark:text-white md:flex'
          aria-label='main-navigation'
        >
          <button
            onClick={toggleColorMode}
            className='text-2xl hover:opacity-90 dark:text-white'
          >
            {toggleIcon}
          </button>
          <Link
            href='/about-me'
            className='transition duration-300 hover:scale-110 hover:opacity-90'
          >
            About Me
          </Link>

          <div className='hidden xl:flex xl:space-x-8'>
            <button
              onClick={() => {
                const route = isHomePage ? '#location' : '/#location'
                router.push(route)
              }}
              className='transition duration-300 hover:scale-110 hover:opacity-90'
            >
              Visit Us
            </button>
            <Link
              href='/#testimonials'
              className='transition duration-300 hover:scale-110 hover:opacity-90'
            >
              Testimonials
            </Link>
          </div>

          <Link
            href='/surf-lessons'
            className='transition duration-300 hover:scale-110 hover:opacity-90'
          >
            Surf Lessons
          </Link>

          <div className='hidden 2xl:flex 2xl:space-x-8'>
            <Link
              href='/surf-trips'
              className='transition duration-300 hover:scale-110 hover:opacity-90'
            >
              Surf Trips
            </Link>

            <Link
              href='/videos'
              className='transition duration-300 hover:scale-110 hover:opacity-90'
            >
              Photo | Video | Drone
            </Link>

            <Link
              href='/gallery'
              className='transition duration-300 hover:scale-110 hover:opacity-90'
            >
              Gallery
            </Link>
          </div>

          <a href='https://goo.gl/maps/iHPokm4Q943N2f2fA'>
            <FontAwesomeIcon
              icon={faStreetView}
              className='text-3xl text-amber-400 transition duration-300 hover:scale-125 hover:text-amber-500 md:text-5xl'
            />
          </a>
          <a href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'>
            <FontAwesomeIcon
              icon={faWhatsapp}
              className='text-3xl font-bold text-teal-700 transition duration-300 hover:scale-125 hover:text-teal-500 md:text-5xl'
            />
          </a>
        </nav>
      </section>

      {mobileMenuIsOpen && (
        <section
          id='mobile-menu'
          className='flex
            h-screen w-full origin-top
            animate-open-menu flex-col
            justify-center overflow-hidden
            bg-slate-50 pb-24 text-3xl
            dark:bg-slate-900
            md:hidden'
          onClick={() => setMobileMenuIsOpen(false)}
        >
          <nav
            className='flex flex-col items-center pb-8 dark:text-white'
            aria-label='mobile'
          >
            <div className='mt-8 flex w-full flex-col items-center gap-y-4'>
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
                Photo | Video | Drone
              </Link>

              <Link
                href='/gallery'
                className='w-full pt-2 text-center hover:opacity-90'
              >
                Gallery
              </Link>
            </div>
          </nav>

          {/* mobile social icons */}
          <div className='flex w-full items-center justify-between px-2 pt-3'>
            <a href='https://goo.gl/maps/iHPokm4Q943N2f2fA' target='_blank'>
              <FontAwesomeIcon
                icon={faStreetView}
                className='text-3xl text-amber-400 hover:text-amber-500'
              />
            </a>
            <a
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
              target='_blank'
            >
              <FontAwesomeIcon
                icon={faWhatsapp}
                className='text-3xl font-bold text-teal-700 hover:text-teal-500'
              />
            </a>

            <a href='https://www.instagram.com/aquaman_bali/' target='_blank'>
              <FontAwesomeIcon
                icon={faInstagram}
                className='text-3xl text-purple-600 hover:text-purple-500'
              />
            </a>

            <a href='https://www.tiktok.com/@aquamanbali' target='_blank'>
              <Image
                src={tikTokLogo}
                width={45}
                height={45}
                alt='tiktok-logo'
              />
            </a>

            <a
              href='https://www.buymeacoffee.com/aquamansurfbali'
              target='_blank'
            >
              <FontAwesomeIcon
                icon={faMugHot}
                className='text-3xl text-amber-400 hover:text-amber-500'
              />
            </a>
          </div>
        </section>
      )}
    </header>
  )
}

export default Navbar
