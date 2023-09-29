import { useRef, useId } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { motion, useInView } from 'framer-motion'
import {
  containerVariants,
  childVariants,
  textVariants,
  sideSlideVariants,
  buttonVariants,
} from '@/utils/framerVariants'
import { CustomCarousel } from '@/components/carousel'
import { Testimonials, TestimonialsLinks } from '../components/testimonials'
import LocationMap from '../components/LocationMap'
import {
  heroImages,
  aboutMeImages,
  surfTripImages,
} from '@/data/homePageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'
import getMapMarkers from '@/utils/getMapMarkers'

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
          <div
            className={`md:mt-8flex flex-col items-center justify-center md:order-2 md:col-span-2 md:row-span-1 md:gap-y-4`}
          >
            <motion.h1
              variants={textVariants}
              className='mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text
          py-1 text-center text-3xl font-extrabold text-transparent
          md:mb-0  md:text-5xl lg:text-7xl'
            >
              Upgrade
            </motion.h1>
            <motion.h2
              className='mb-2 bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text py-1
          text-center text-3xl font-extrabold text-transparent
          md:mb-0  md:text-5xl lg:text-6xl'
              variants={textVariants}
            >
              Your Surfing Skills
            </motion.h2>
            <motion.h2
              className='mb-2 py-1 text-center text-2xl font-bold
          md:mb-0  md:text-4xl lg:text-5xl'
              variants={textVariants}
            >
              Beginner to Advanced
            </motion.h2>
          </div>

          <div className='w-full md:order-1 md:col-span-1 md:row-span-2'>
            <motion.div
              variants={childVariants}
              className='flex w-full flex-col items-center justify-center md:h-full'
            >
              <CustomCarousel
                carouselId={topId}
                images={heroImg}
                carouselKey='hero'
                carouselClasses='h-60 md:h-[30rem]'
                priority={true}
                imageClasses='w-full mx-auto h-full md:w-11/12 rounded-xl border-none object-cover shadow-2xl md:shadow-none'
              />
            </motion.div>
          </div>

          <motion.div
            variants={childVariants}
            className='flex flex-col items-center justify-center md:order-3 md:col-span-2 md:gap-y-6'
          >
            <h3
              className='my-2 max-w-md bg-gradient-to-r from-cyan-500 to-blue-500
                bg-clip-text py-1 text-center
                text-2xl font-extrabold text-transparent md:my-0 
                md:text-5xl'
            >
              Best Surf School in Bali
            </h3>
            <a
              className='w-48 
                rounded-3xl
              bg-gradient-to-r from-cyan-500
                to-blue-500 px-8
                py-4 text-center
              font-extrabold text-white
                outline-none ring-2 ring-transparent
              hover:ring-blue-500 active:ring-blue-500 md:my-8 md:w-72 md:text-xl'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
              target='_blank'
            >
              Book now
            </a>
          </motion.div>
        </motion.section>

        <hr className='mx-5 my-12 bg-slate-950' />

        <section
          id='about-me-short'
          className='my-8 md:my-16 md:grid md:grid-flow-col md:grid-rows-1 md:gap-y-8'
        >
          <div ref={aboutRef} className='md:mt-8'>
            <motion.h2
              variants={sideSlideVariants}
              initial={!aboutIsInView && 'hidden'}
              animate={aboutIsInView && 'visible'}
              className='text-center text-2xl font-bold text-slate-900
              dark:text-white md:mb-0
                md:text-5xl'
            >
              About me
            </motion.h2>
          </div>

          <div className='my-5 md:order-3 md:col-span-3 md:row-span-2'>
            <motion.div
              variants={childVariants}
              className='flex w-full flex-col items-center justify-center md:h-full'
            >
              <CustomCarousel
                carouselId={aboutId}
                images={aboutMeImg}
                carouselKey='about'
                carouselClasses=''
                imageClasses='mx-auto h-[225px] w-[225px] rounded-full object-cover shadow-lg md:h-[265px] md:w-[265px] lg:h-[325px] lg:w-[325px]'
                loading='lazy'
              />
            </motion.div>
          </div>

          <div className='flex flex-col items-center justify-center md:order-2 md:col-span-1 md:row-span-1'>
            <p className='mb-5 text-center text-lg md:mb-0 md:text-2xl'>
              My name is Rendy and I am from Krui, South Sumatra. I started
              surfing at the age of 8 and came to Bali in 2019 to work as a Surf
              Instructor at Batu Bolong Beach in Canggu.
            </p>
            <MotionLink
              variants={buttonVariants}
              whileInView='inView'
              whileHover='hover'
              viewport={{ margin: '-75px' }}
              className='w-48 rounded-3xl
                bg-gradient-to-r from-cyan-500 to-blue-500
                px-8 py-4
                text-center font-extrabold
                text-white outline-none
                ring-2 hover:ring-blue-500 active:ring-blue-500
                md:my-8 md:w-72 md:text-lg'
              href='/about-me'
            >
              More about me
            </MotionLink>
          </div>
        </section>

        <hr className='mx-5 my-12 bg-slate-950' />

        <section id='testimonials' className='my-8 scroll-mt-[8rem] md:my-16'>
          <div ref={testimonialsRef} className='md:mt-8'>
            <motion.h2
              variants={sideSlideVariants}
              initial={!testimonialsIsInView && 'hidden'}
              animate={testimonialsIsInView && 'visible'}
              className='text-center text-2xl font-bold text-slate-900
              dark:text-white md:mb-0
                md:text-5xl'
            >
              Testimonials
            </motion.h2>
          </div>

          <div className='my-3'>
            <Testimonials />
          </div>

          <div className='my-0 flex flex-col items-center'>
            <TestimonialsLinks />
          </div>

          <div className='flex flex-col items-center justify-center'>
            <motion.a
              variants={buttonVariants}
              whileInView='inView'
              whileHover='hover'
              viewport={{ margin: '-75px' }}
              className='mt-8 w-48
              rounded-3xl bg-gradient-to-r from-cyan-500
              to-blue-500 px-8 py-4
              text-center font-extrabold
              text-white outline-none
              ring-2 hover:ring-blue-500 active:ring-blue-500
              md:mb-0 md:w-72 md:text-lg'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
              target='_blank'
            >
              Book now
            </motion.a>
          </div>
        </section>

        <hr className='mx-5 my-12 bg-slate-950' />

        <section id='location' className='my-8 scroll-mt-[8rem] md:my-16'>
          <div ref={visitRef} className='md:mt-8'>
            <motion.h2
              variants={sideSlideVariants}
              initial={!visitIsInView && 'hidden'}
              animate={visitIsInView && 'visible'}
              className='mb-3 text-center text-2xl font-bold
              text-slate-900 dark:text-white
              md:text-5xl'
            >
              Visit Us
            </motion.h2>
          </div>
          <div className='my-5'>
            <LocationMap mapMarkers={mapMarkers} />
          </div>
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
