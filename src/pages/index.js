import { CldVideoPlayer } from 'next-cloudinary'
import Typewriter from 'typewriter-effect'
import { Inter } from 'next/font/google'
import Testimonials from '../components/testimonials'
import LocationMap from '../components/LocationMap'
import Image from 'next/image'
import Link from 'next/link'
const inter = Inter({ subsets: ['latin'] })
import RendySurfBSmall from '../../public/images/rendy/surf/rendy_surf_B_small.jpg'
import RendySurfCSmall from '../../public/images/rendy/surf/rendy_surf_C_small.jpg'
import Carousel from '@/components/carousel'
import styles from '@/components/carousel.module.css'
import { useAppContext } from '@/context/appContext'

const RENDY_SURF_IMAGES = [RendySurfBSmall, RendySurfCSmall]

export default function Home() {
  const { mobileMenuIsOpen } = useAppContext()

  return (
    <main className='mx-2 my-5'>
      <section id='video'>
        <div className='relative'>
          <div className='absolute left-5 top-5 z-20'>
            {!mobileMenuIsOpen && (
              <div className='text-2xl font-extrabold text-stone-100 drop-shadow-lg'>
                <Typewriter
                  options={{
                    strings: [
                      'Surf lessons',
                      'Water Photo & Video',
                      'Video Analysis',
                      'Drone Shots',
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            )}
          </div>
          <CldVideoPlayer
            id='rendy-landing-page-video'
            width='1920'
            height='1080'
            src='RendyLandingPageVideo'
            colors={{ accent: '#38bdf8', base: '#fbbf24', text: '#fbbf24' }}
            autoPlay='always'
            loop={true}
            className='rounded-lg border-0 shadow-2xl'
          />
        </div>
      </section>

      <hr className='mx-5 my-5 bg-slate-950' />

      <section
        id='about-me-short'
        className='flex flex-col items-center justify-center'
      >
        <h2 className='mb-2 max-w-md text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl'>
          About me
        </h2>
        <Carousel>
          {RENDY_SURF_IMAGES.map((src, i) => {
            return (
              <div key={i} className={styles.embla__slide}>
                <Image
                  src={src}
                  className='mx-auto rounded-full object-cover shadow-lg'
                  width={225}
                  height={225}
                  alt='rendy'
                />
              </div>
            )
          })}
        </Carousel>

        <p className='px-2 py-5 text-justify'>
          My name is Rendy and I am from Krui, South Sumatra. I started surfing
          at the age of 8 and came to Bali in 2019 to work as a surf instructor
          at Batu Bolong Beach in Canggu.
        </p>
        <Link
          className='my-1 w-48 self-center rounded-3xl bg-teal-500 px-4 py-2 text-center font-extrabold text-white outline-none hover:bg-teal-400 active:rounded-3xl active:bg-teal-300'
          href='/about-me'
        >
          More about me
        </Link>
      </section>

      <hr className='mx-5 my-5 bg-slate-950' />

      <section id='testimonials' className='scroll-mt-20'>
        <h2 className='mb-2 max-w-md text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl'>
          Testimonials
        </h2>
        <Testimonials />
      </section>

      <hr className='mx-5 my-5 bg-slate-950' />

      <section id='location' className='scroll-mt-20'>
        <h2 className='mb-2 max-w-md text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-left sm:text-5xl'>
          Visit Us
        </h2>
        <LocationMap />
      </section>
    </main>
  )
}
