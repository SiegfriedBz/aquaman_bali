import { useRef, useId } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import Testimonials from '../components/testimonials'
import LocationMap from '../components/locationMap'
import Carousel from '@/components/carousel'
import styles from '@/components/carousel.module.css'
import rendyTeach from '@/data/rendyTeach.json'
import rendySurf from '@/data/rendySurf.json'
const [
  rendyTeach01,
  rendyTeach02,
  rendyTeach03,
  rendyTeach04,
  rendyTeach05,
  rendyTeach06,
  rendyTeach07,
] = rendyTeach

const [
  rendySurf01,
  rendySurf01Small,
  rendySurf02,
  rendySurf02Small,
  rendySurf03,
  rendySurf03Small,
  rendySurf04,
  rendySurf04Small,
  rendySurf05,
  rendySurf06,
  rendySurf07,
  rendySurf08,
  rendySurf09,
  rendySurf10,
  rendySurf10Small,
  rendySurf11,
  rendySurf12,
  rendySurf13,
  rendySurf14,
] = rendySurf

const heroImg = [
  rendySurf01,
  rendyTeach04,
  rendySurf05,
  rendyTeach07,
  rendySurf11,
  rendyTeach03,
  rendySurf02,
]

const aboutMeImg = [
  rendySurf01Small,
  rendySurf02Small,
  rendySurf03Small,
  rendySurf04Small,
  rendySurf10Small,
]

const meta = {
  title: 'Aquaman Bali | Surf School | Home',
  description: 'Aquaman Bali | Surf School & Surf Trips',
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.75,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.25,
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: '24px' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.25,
    },
  },
}

const sideSlideVariants = {
  hidden: {
    x: '-100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.5,
      type: 'spring',
      stiffness: 100,
    },
  },
}

const MotionLink = motion(Link)

export default function Home() {
  const topId = useId()
  const aboutId = useId()
  const aboutRef = useRef(null)
  const testimonialsRef = useRef(null)
  const visitRef = useRef(null)

  const aboutIsInView = useInView(aboutRef, { once: true, amount: 0.1 })
  const testimonialsIsInView = useInView(testimonialsRef, {
    once: true,
    amount: 0.1,
  })
  const visitIsInView = useInView(visitRef, { once: true, amount: 0.1 })

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>
      <main className='px-2'>
        <motion.section
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          id='hero'
          className='flex flex-col items-center md:mb-12'
        >
          <div className='flex flex-col md:max-w-7xl md:flex-row md:items-center md:justify-between'>
            <motion.h1
              variants={textVariants}
              className='bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text pb-2 pt-3 text-center text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl lg:text-7xl'
            >
              Upgrade
            </motion.h1>
            <motion.h2
              className='mb-4 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-center text-3xl font-extrabold text-transparent sm:text-4xl md:text-5xl lg:text-6xl'
              variants={textVariants}
            >
              Your Surfing Skills
            </motion.h2>
            <motion.h2
              className='max-w-md text-center text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl'
              variants={textVariants}
            >
              Beginner to Advanced
            </motion.h2>
          </div>

          <div className='mt-5 flex flex-col items-center justify-between px-2 md:max-w-7xl md:flex-row md:gap-5 xl:max-w-xl'>
            <motion.div variants={childVariants}>
              <Carousel>
                {heroImg.map((image) => {
                  return (
                    <div
                      key={`${topId}-top-${image.image}`}
                      className={`${styles.embla__slide} h-60`}
                    >
                      <Image
                        width='600'
                        height='600'
                        src={image.image}
                        alt={image.alt}
                        // loading='lazy'
                        priority={true}
                        // sizes='100vw'
                        className='h-full rounded-lg object-cover shadow-2xl'
                      />
                    </div>
                  )
                })}
              </Carousel>
            </motion.div>

            <div className='mt-5 flex flex-col items-center justify-between md:p-5'>
              <motion.h3
                className='mb-3 max-w-md bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-center text-2xl font-extrabold text-transparent sm:text-4xl md:text-5xl'
                variants={textVariants}
              >
                Best Surf School in Bali
              </motion.h3>
              <motion.a
                className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:ring-blue-500 md:px-12 md:py-6 md:text-xl'
                href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
                target='_blank'
                variants={textVariants}
              >
                Book now
              </motion.a>
            </div>
          </div>
        </motion.section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section
          id='about-me-short'
          className='my-5 flex flex-col items-center justify-center md:mb-12'
        >
          <span ref={aboutRef}>
            <motion.h2
              variants={sideSlideVariants}
              initial={!aboutIsInView && 'hidden'}
              animate={aboutIsInView && 'visible'}
              className='mb-3 text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-5xl'
            >
              About me
            </motion.h2>
          </span>
          <div className='flex flex-col items-center justify-center md:flex-row'>
            <div className='md:max-w-md xl:max-w-xl'>
              <Carousel>
                {aboutMeImg.map((image) => {
                  return (
                    <div
                      key={`${aboutId}-about-${image.image}`}
                      className={styles.embla__slide}
                    >
                      <Image
                        width='600'
                        height='600'
                        src={image.image}
                        alt={image.alt}
                        priority={true}
                        // loading='lazy'
                        // sizes='100vw'
                        className={`mx-auto h-[225px] w-[225px] rounded-full object-cover shadow-lg md:h-[265px] md:w-[265px] lg:h-[325px] lg:w-[325px]`}
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
              <MotionLink
                whileInView={{ scale: 1.1 }}
                viewport={{ margin: '-75px' }}
                className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:ring-blue-500 md:w-72 md:px-10 md:text-lg'
                href='/about-me'
              >
                More about me
              </MotionLink>
            </div>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='testimonials' className='flex scroll-mt-20 flex-col'>
          <span ref={testimonialsRef}>
            <motion.h2
              variants={sideSlideVariants}
              initial={!testimonialsIsInView && 'hidden'}
              animate={testimonialsIsInView && 'visible'}
              className='text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-5xl'
            >
              Testimonials
            </motion.h2>
            <Testimonials />
          </span>

          <motion.a
            whileInView={{ scale: 1.1 }}
            viewport={{ margin: '-75px' }}
            className='my-3 w-48 self-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:ring-blue-500 md:px-12 md:py-6 md:text-xl'
            href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
            target='_blank'
          >
            Book now
          </motion.a>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='location' className='scroll-mt-20 dark:bg-slate-900'>
          <span ref={visitRef}>
            <motion.h2
              variants={sideSlideVariants}
              initial={!visitIsInView && 'hidden'}
              animate={visitIsInView && 'visible'}
              className='mb-3 text-center text-2xl font-bold text-slate-900 dark:text-white sm:text-5xl'
            >
              Visit Us
            </motion.h2>
          </span>
          <LocationMap />
        </section>
      </main>
    </>
  )
}
