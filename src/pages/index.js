import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { Inter } from 'next/font/google'
import Testimonials from '../components/testimonials'
import LocationMap from '../components/LocationMap'

const inter = Inter({ subsets: ['latin'] })
import Carousel from '@/components/carousel'
import styles from '@/components/carousel.module.css'
import RendySurf05 from '../../public/images/rendy/surf/rendy_surf_05.jpg'
import RendySurfBSmall from '../../public/images/rendy/surf/rendy_surf_B_small.png'

import RendySurfCSmall from '../../public/images/rendy/surf/rendy_surf_C_small.png'

import RendySurfA from '../../public/images/rendy/surf/rendy_surf_A.jpg'
import RendySurf11 from '../../public/images/rendy/surf/rendy_surf_11.jpg'

import WaterGirl01 from '../../public/images/photo_video/water-photo.jpg'
import WaterGirl02 from '../../public/images/lessons/girl_surf.jpg'

const TOP_IMAGES_A = [RendySurfA, RendySurf11]
const TOP_IMAGES_B = [WaterGirl01, WaterGirl02]
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
      <main className='px-2 dark:bg-slate-900 dark:text-gray-200'>
        {/* <hr className='mx-5 my-5 bg-slate-950' /> */}

        <section
          id='hero'
          className='justify-bewteen flex flex-col items-center p-5'
        >
          <div className='pb-3'>
            <h1 className='mb-2 max-w-md bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-center text-3xl font-extrabold text-transparent sm:text-left sm:text-5xl'>
              Upgrade
            </h1>
            <h2 className='mb-2 max-w-md bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-center text-3xl font-extrabold text-transparent sm:text-left sm:text-5xl'>
              Your Surfing Skills
            </h2>
            <h2 className='mb-2 max-w-md text-center text-2xl font-bold sm:text-left sm:text-5xl'>
              Beginner to Advanced
            </h2>
          </div>

          <Carousel>
            {TOP_IMAGES_A.map((src, i) => {
              return (
                <div key={i} className={`${styles.embla__slide} h-52 px-0`}>
                  <Image
                    src={src}
                    className='h-full rounded-lg object-cover shadow-lg'
                    alt='surf-shots'
                  />
                </div>
              )
            })}
          </Carousel>

          <h3 className='my-3 max-w-md text-center text-2xl font-extrabold sm:text-left sm:text-5xl'>
            Best Surf School in Bali
          </h3>

          <Carousel>
            {TOP_IMAGES_B.map((src, i) => {
              return (
                <div key={i} className={`${styles.embla__slide} h-52 px-0`}>
                  <Image
                    src={src}
                    className='h-full rounded-lg object-cover shadow-lg'
                    alt='surf-shots'
                  />
                </div>
              )
            })}
          </Carousel>
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
            {ABOUT_ME_IMAGES.map((src, i) => {
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
            My name is Rendy and I am from Krui, South Sumatra. I started
            surfing at the age of 8 and came to Bali in 2019 to work as a surf
            instructor at Batu Bolong Beach in Canggu.
          </p>
          <Link
            className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
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

        <section id='location' className='scroll-mt-20 py-5 dark:bg-slate-900'>
          <h2 className='mb-2 max-w-md text-center text-2xl font-bold text-slate-900  dark:text-white sm:text-left sm:text-5xl'>
            Visit Us
          </h2>
          <LocationMap />
        </section>
      </main>
    </>
  )
}
