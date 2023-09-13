import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Testimonials from '../components/testimonials'
import LocationMap from '../components/LocationMap'
import Carousel from '@/components/carousel'
import styles from '@/components/carousel.module.css'

import RendySurfBSmall from '../../public/images/rendy/surf/rendy_surf_B_small.png'
import RendySurfCSmall from '../../public/images/rendy/surf/rendy_surf_C_small.png'
import RendySurfA from '../../public/images/rendy/surf/rendy_surf_A.jpg'
import RendySurf11 from '../../public/images/rendy/surf/rendy_surf_11.jpg'
import WaterGirl01 from '../../public/images/photo_video/water-photo.jpg'
import WaterGirl02 from '../../public/images/lessons/girl_surf.jpg'
import WaterGirl03 from '../../public/images/lessons/rendy_girl_01.jpg'

const TOP_IMAGES = [
  RendySurfA,
  RendySurf11,
  WaterGirl03,
  WaterGirl01,
  WaterGirl02,
]
const ABOUT_ME_IMAGES = [RendySurfBSmall, RendySurfCSmall]

export default function Home() {
  const meta = {
    title: 'Aquaman Bali | Surf School | Home',
    description: 'Aquaman Bali | Surf School & Surf Trips',
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>
      <main className='px-2'>
        <section id='hero' className='flex flex-col items-center md:mb-12'>
          <div className='flex flex-col md:max-w-7xl md:flex-row md:items-center md:justify-between'>
            <h1 className='bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text pb-2 pt-3 text-center text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl lg:text-7xl'>
              Upgrade
            </h1>
            <motion.h2
              className='mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-center text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl lg:text-6xl'
              initial={{ opacity: 0 }}
              transition={{ delay: 0.1, duration: 3 }}
              animate={{ opacity: 1 }}
            >
              Your Surfing Skills
            </motion.h2>
            <motion.h2
              className='max-w-md text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl'
              initial={{ opacity: 0 }}
              transition={{ delay: 0.5, duration: 3 }}
              animate={{ opacity: 1 }}
            >
              Beginner to Advanced
            </motion.h2>
          </div>

          <div className='mt-5 flex flex-col items-center justify-between px-2 md:max-w-7xl md:flex-row md:gap-5 xl:max-w-xl'>
            <motion.div
              initial={{ opacity: 0 }}
              transition={{ delay: 1.25, duration: 3 }}
              animate={{ opacity: 1 }}
            >
              <Carousel>
                {TOP_IMAGES.map((src, i) => {
                  return (
                    <div key={i} className={`${styles.embla__slide} h-56`}>
                      <Image
                        src={src}
                        className='h-full rounded-lg object-cover shadow-lg'
                        alt='surf-shots'
                        priority
                        quality={100}
                      />
                    </div>
                  )
                })}
              </Carousel>
            </motion.div>

            <div className='mt-5 flex flex-col items-center justify-between md:p-5'>
              <motion.h3
                className='mb-3 max-w-md bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-center text-2xl font-extrabold text-transparent sm:text-4xl md:text-5xl'
                initial={{ opacity: 0 }}
                transition={{ delay: 1.5, duration: 3 }}
                animate={{ opacity: 1 }}
              >
                Best Surf School in Bali
              </motion.h3>
              <motion.a
                className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:ring-blue-500 md:px-12 md:py-6 md:text-xl'
                href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
                initial={{ opacity: 0 }}
                transition={{ delay: 2.75, duration: 3 }}
                animate={{ opacity: 1 }}
              >
                Book now
              </motion.a>
            </div>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section
          id='about-me-short'
          className='my-5 flex flex-col items-center justify-center md:mb-12'
        >
          <h2 className='mb-3 text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-5xl'>
            About me
          </h2>
          <div className='flex flex-col items-center justify-center md:flex-row'>
            <div className='md:max-w-md xl:max-w-xl'>
              <Carousel>
                {ABOUT_ME_IMAGES.map((src, i) => {
                  return (
                    <div key={i} className={styles.embla__slide}>
                      <Image
                        src={src}
                        className={`mx-auto h-[225px] w-[225px] rounded-full object-cover shadow-lg md:h-[265px] md:w-[265px] lg:h-[325px] lg:w-[325px]`}
                        alt='rendy-surf'
                        priority
                        quality={100}
                      />
                    </div>
                  )
                })}
              </Carousel>
            </div>

            <div className='flex flex-col items-center md:max-w-md md:p-5'>
              <p className='my-3 px-2 text-center text-lg'>
                My name is Rendy and I am from Krui, South Sumatra. I started
                surfing at the age of 8 and came to Bali in 2019 to work as a
                surf instructor at Batu Bolong Beach in Canggu.
              </p>
              <Link
                className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:ring-blue-500 md:w-72 md:px-10 md:text-lg'
                href='/about-me'
              >
                More about me
              </Link>
            </div>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='testimonials' className='flex scroll-mt-20 flex-col'>
          <h2 className='text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-5xl'>
            Testimonials
          </h2>
          <Testimonials />

          <a
            className='my-3 w-48 self-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:ring-blue-500 md:px-12 md:py-6 md:text-xl'
            href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
          >
            Book now
          </a>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='location' className='scroll-mt-20 dark:bg-slate-900'>
          <h2 className='mb-3 text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-5xl'>
            Visit Us
          </h2>
          <LocationMap />
        </section>
      </main>
    </>
  )
}
