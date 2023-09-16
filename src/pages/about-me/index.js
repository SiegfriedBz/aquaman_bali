import Image from 'next/image'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Carousel from '../../components/carousel'
import styles from '../../components/carousel.module.css'
import RendyKid01 from '../../../public/images/rendy/contests/rendy_kid_01.jpg'
import RendyKid2 from '../../../public/images/rendy/contests/rendy_kid_02.jpg'
import RendyKid03 from '../../../public/images/rendy/contests/rendy_kid_03.jpg'
import RendySurfA from '../../../public/images/rendy/surf/rendy_surf_A.jpg'
import RendySurfB from '../../../public/images/rendy/surf/rendy_surf_B.jpg'
import RendySurfC from '../../../public/images/rendy/surf/rendy_surf_C.jpg'
import RendySurfD from '../../../public/images/rendy/surf/rendy_surf_D.jpg'
import RendySurf01 from '../../../public/images/rendy/surf/rendy_surf_01.jpg'
import RendySurf02 from '../../../public/images/rendy/surf/rendy_surf_02.jpg'
import RendySurf03 from '../../../public/images/rendy/surf/rendy_surf_03.jpg'
import RendySurf04 from '../../../public/images/rendy/surf/rendy_surf_04.jpg'
import RendySurf05 from '../../../public/images/rendy/surf/rendy_surf_05.jpg'
import RendySurf06 from '../../../public/images/rendy/surf/rendy_surf_06.jpg'
import RendySurf07 from '../../../public/images/rendy/surf/rendy_surf_07.jpg'
import RendySurf09 from '../../../public/images/rendy/surf/rendy_surf_09.jpg'
import RendySurf11 from '../../../public/images/rendy/surf/rendy_surf_11.jpg'
import RendySurf12 from '../../../public/images/rendy/surf/rendy_surf_12.jpg'
import RendySurf13 from '../../../public/images/rendy/surf/rendy_surf_13.jpg'

const RENDY_IMAGES = [
  RendySurf06,
  RendySurfA,
  RendyKid2,
  RendyKid01,
  RendyKid03,
  RendySurfB,
  RendySurfC,
  RendySurfD,
  RendySurf01,
  RendySurf02,
  RendySurf03,
  RendySurf04,
  RendySurf05,
  RendySurf07,
  RendySurf09,
  RendySurf11,
  RendySurf12,
  RendySurf13,
]

const meta = {
  title: 'Aquaman Bali | Surf School | About me',
  description: 'Discover My Story',
}

const About = () => {
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
    hidden: { opacity: 0, y: '16px' },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.25,
      },
    },
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>

      <motion.section
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        id='about-me'
        className='flex flex-col items-center justify-center'
      >
        <motion.h3
          variants={textVariants}
          className='mb-2 text-center text-4xl font-bold dark:text-white'
        >
          About Me
        </motion.h3>

        {/* <hr className='mx-5 bg-slate-950 dark:bg-slate-200' /> */}

        <motion.div variants={childVariants} className='mx-2'>
          <Carousel>
            {RENDY_IMAGES.map((src, i) => {
              return (
                <div key={i} className={`${styles.embla__slide} h-60 `}>
                  <Image
                    src={src}
                    alt='rendy'
                    className='h-full rounded-md object-cover shadow-2xl'
                    priority={i <= 2}
                    quality={100}
                  />
                </div>
              )
            })}
          </Carousel>

          <motion.hr
            variants={childVariants}
            className='mx-5 my-5 bg-slate-950'
          />

          <motion.p variants={childVariants} className='my-3 px-2 text-justify'>
            My name is Rendy and I am from Krui, South Sumatra. I started
            surfing at the age of 8 and came to Bali in 2019 to work as a surf
            instructor at Batu Bolong Beach in Canggu.
          </motion.p>
          <motion.p variants={childVariants} className='my-3 px-2 text-justify'>
            Batu Bolong is an easy place to learn surfing as a beginner but is
            also good for intermediate surfers.
          </motion.p>
          <motion.p variants={childVariants} className='my-3 px-2 text-justify'>
            I really love surfing and want to share my experience, knowledge and
            stoke of surfing with you. It is a lot of fun. Come join me and
            let&apos;s enjoy the waves and make you reach your goals in surfing!
          </motion.p>

          <motion.div
            variants={childVariants}
            className='flex flex-col items-center'
          >
            <a
              className='my-3 w-48 self-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
              target='_blank'
            >
              Contact me
            </a>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default About
