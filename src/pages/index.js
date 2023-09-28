import { useRef, useId } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import Carousel from '@/components/carousel'
import styles from '@/components/carousel.module.css'
import Testimonials from '../components/testimonials'
import LocationMap from '../components/LocationMap'
import {
  heroImages,
  aboutMeImages,
  surfTripImages,
} from '@/data/homePageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'
import getMapMarkers from '@/utils/getMapMarkers'
import {
  containerVariants,
  childVariants,
  textVariants,
  sideSlideVariants,
  buttonVariants,
} from '@/utils/framerVariants'

const meta = {
  title: 'Aquaman Bali | Surf School | Home',
  description:
    'Discover Aquaman Bali, your Premier Surf School and Surf Trip destination. Grow your surfing skills from beginner to advanced. Book now!',
}

const MotionLink = motion(Link)

export default function Home({ heroImg, aboutMeImg, mapMarkers }) {
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
      <main>
        <motion.section
          id='hero'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
          className='md:mb-20 md:grid md:grid-flow-col md:grid-rows-2 md:gap-y-8'
        >
          <div class='md:order-2 md:col-span-2 md:row-span-1 md:mt-8'>
            <HeroTextTop />
          </div>
          <div class='md:order-1 md:col-span-1 md:row-span-2'>
            <motion.div
              variants={childVariants}
              className='flex flex-col items-center justify-center md:h-full'
            >
              <Carousel>
                {heroImg.map((image) => {
                  return (
                    <div
                      key={`${topId}-top-${image.src}`}
                      className={`${styles.embla__slide} h-60 md:h-[30rem]`}
                    >
                      <Image
                        width='600'
                        height='600'
                        src={image.src}
                        alt={image.alt}
                        priority={true}
                        placeholder='blur'
                        blurDataURL={image.blurDataUrl}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className='mx-auto h-full w-11/12 rounded-xl border-none object-cover shadow-2xl md:shadow-none'
                      />
                    </div>
                  )
                })}
              </Carousel>
            </motion.div>
          </div>
          <div class='md:order-3 md:col-span-2'>
            <HeroTextBottom />
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
              className='mb-3 text-center text-2xl font-bold
              text-slate-900 dark:text-white
                sm:text-5xl'
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
                      key={`${aboutId}-about-${image.src}`}
                      className={styles.embla__slide}
                    >
                      <Image
                        width='600'
                        height='600'
                        src={image.src}
                        alt={image.alt}
                        placeholder='blur'
                        blurDataURL={image.blurDataUrl}
                        sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                        className={`mx-auto h-[225px] w-[225px] rounded-full object-cover shadow-lg md:h-[265px] md:w-[265px] lg:h-[325px] lg:w-[325px]`}
                      />
                    </div>
                  )
                })}
              </Carousel>
            </div>

            <div className='flex flex-col items-center md:max-w-md md:p-5'>
              <p className='my-3 text-center text-lg'>
                My name is Rendy and I am from Krui, South Sumatra. I started
                surfing at the age of 8 and came to Bali in 2019 to work as a
                surf instructor at Batu Bolong Beach in Canggu.
              </p>
              <MotionLink
                variants={buttonVariants}
                whileInView='inView'
                viewport={{ margin: '-75px' }}
                className='my-3 w-48 rounded-3xl
                  bg-gradient-to-r from-cyan-500 to-blue-500
                  px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:ring-blue-500 md:w-72 md:px-10 md:text-lg'
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
              className='text-center text-2xl font-bold
              text-slate-900 dark:text-white
                sm:text-5xl'
            >
              Testimonials
            </motion.h2>
            <Testimonials />
          </span>

          <motion.a
            variants={buttonVariants}
            whileInView='inView'
            viewport={{ margin: '-75px' }}
            className='my-3 w-48 self-center rounded-3xl
              bg-gradient-to-r from-cyan-500 to-blue-500
              px-8 py-4
              text-center font-extrabold text-white
              outline-none
              ring-2 hover:ring-blue-500 active:ring-blue-500
              md:px-12 md:py-6
              md:text-xl'
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
              className='mb-3 text-center text-2xl font-bold
              text-slate-900 dark:text-white
              sm:text-5xl'
            >
              Visit Us
            </motion.h2>
          </span>
          <LocationMap mapMarkers={mapMarkers} />
        </section>
      </main>
    </>
  )
}

export async function getStaticProps() {
  const heroImgPromises = heroImages.map(async (image) => {
    const src = getImageUrl(image.image)
    const blurDataUrl = await getBase64ImageUrl(image.image)
    return {
      src,
      blurDataUrl,
      id: image.id,
      alt: image.alt,
    }
  })

  const aboutMeImgPromises = aboutMeImages.map(async (image) => {
    const src = getImageUrl(image.image)
    const blurDataUrl = await getBase64ImageUrl(image.image)
    return {
      src,
      blurDataUrl,
      id: image.id,
      alt: image.alt,
    }
  })

  const surfTripImgPromises = surfTripImages.map(async (image) => {
    const src = getImageUrl(image.image)
    const blurDataUrl = await getBase64ImageUrl(image.image)
    return {
      src,
      blurDataUrl,
      id: image.id,
      alt: image.alt,
    }
  })

  const heroImg = await Promise.all(heroImgPromises)
  const aboutMeImg = await Promise.all(aboutMeImgPromises)
  const surfTripImg = await Promise.all(surfTripImgPromises)

  const mapMarkers = getMapMarkers(surfTripImg)

  return {
    props: {
      heroImg,
      aboutMeImg,
      mapMarkers,
    },
  }
}

const HeroTextTop = () => {
  return (
    <div className={`flex flex-col items-center justify-center md:gap-y-4`}>
      <motion.h1
        variants={textVariants}
        className='mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text
          py-1 text-center text-3xl font-extrabold text-transparent
          sm:text-4xl md:mb-0 md:text-5xl lg:text-7xl'
      >
        Upgrade
      </motion.h1>
      <motion.h2
        className='mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text py-1
          text-center text-3xl font-extrabold text-transparent
          sm:text-4xl md:mb-0 md:text-5xl lg:text-6xl'
        variants={textVariants}
      >
        Your Surfing Skills
      </motion.h2>
      <motion.h2
        className='mb-2 py-1 text-center text-2xl font-bold
          sm:text-3xl md:mb-0 md:text-4xl lg:text-5xl'
        variants={textVariants}
      >
        Beginner to Advanced
      </motion.h2>
    </div>
  )
}

const HeroTextBottom = () => {
  return (
    <div className={`flex flex-col items-center justify-center md:gap-y-6`}>
      <motion.h3
        className='my-2 max-w-md bg-gradient-to-r from-cyan-500 to-blue-500
          bg-clip-text py-1 text-center
          text-2xl font-extrabold text-transparent sm:text-4xl 
          md:my-0 md:text-5xl'
        variants={textVariants}
      >
        Best Surf School in Bali
      </motion.h3>
      <motion.a
        className='w-48 rounded-3xl bg-gradient-to-r from-cyan-500
        to-blue-500 px-8
          py-4 text-center font-extrabold text-white
          outline-none ring-2
          hover:ring-blue-500 active:ring-blue-500
          md:w-2/3 md:py-6
          md:text-xl'
        href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
        target='_blank'
        variants={textVariants}
      >
        Book now
      </motion.a>
    </div>
  )
}
