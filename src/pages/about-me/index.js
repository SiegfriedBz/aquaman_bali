import Image from 'next/image'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Carousel from '../../components/carousel'
import styles from '../../components/carousel.module.css'
import rendySurf from '@/data/rendySurf.json'
import rendyKid from '@/data/rendyKid.json'

const [rendyKid01, rendyKid02, rendyKid03] = rendyKid

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

const aboutMeImg = [
  rendySurf14,
  rendySurf01,
  rendySurf03,
  rendyKid01,
  rendyKid02,
  rendyKid03,
  rendySurf02,
  rendySurf04,
  rendySurf05,
  rendySurf06,
  rendySurf07,
  rendySurf08,
  rendySurf09,
  rendySurf10,
  rendySurf11,
  rendySurf12,
  rendySurf13,
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
        <motion.h1
          variants={textVariants}
          className='mb-2 text-center text-4xl font-bold dark:text-white'
        >
          About Me
        </motion.h1>

        <motion.div variants={childVariants} className='mx-2'>
          <Carousel>
            {aboutMeImg.map((image) => {
              return (
                <div
                  key={image.id}
                  className={`${styles.embla__slide} my-3 h-80`}
                >
                  <Image
                    width='600'
                    height='600'
                    src={image.image}
                    alt={image.alt}
                    // loading='lazy'
                    className='h-full rounded-lg object-cover shadow-2xl'
                  />
                </div>
              )
            })}
          </Carousel>

          <motion.p variants={childVariants} className='my-3 px-1 text-justify'>
            My name is Rendy and I am from Krui, South Sumatra. I started
            surfing at the age of 8 and came to Bali in 2019 to work as a surf
            instructor at Batu Bolong Beach in Canggu.
          </motion.p>
          <motion.p variants={childVariants} className='my-3 px-1 text-justify'>
            Batu Bolong is an easy place to learn surfing as a beginner but is
            also good for intermediate surfers.
          </motion.p>
          <motion.p variants={childVariants} className='my-3 px-1 text-justify'>
            I really love surfing and want to share my experience, knowledge and
            stoke of surfing with you. It is a lot of fun. Come join me and
            let&apos;s enjoy the waves and make you reach your goals in surfing!
          </motion.p>
          <motion.div
            variants={childVariants}
            className='flex flex-col items-center'
          >
            <motion.a
              whileInView={{ scale: 1.1 }}
              viewport={{ margin: '-75px' }}
              className='my-3 w-48 self-center rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
              target='_blank'
            >
              Contact me
            </motion.a>
          </motion.div>
        </motion.div>
      </motion.section>
    </>
  )
}

export default About
