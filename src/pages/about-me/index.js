import Image from 'next/image'
import Head from 'next/head'
import { motion } from 'framer-motion'
import Carousel from '../../components/carousel'
import styles from '../../components/carousel.module.css'
import { aboutMeImages } from '@/data/aboutMePageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'
import {
  containerVariants,
  childVariants,
  textVariants,
  buttonVariants,
} from '@/utils/framerVariants'

const meta = {
  title: 'Aquaman Bali | Surf School | About me',
  description:
    'Discover the story of Rendy, a passionate surfer from Krui, South Sumatra. Join him to learn and improve your surfing skills!',
}

const About = ({ aboutMeImg }) => {
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
            {aboutMeImg.map((image, index) => {
              return (
                <div
                  key={image.id}
                  className={`${styles.embla__slide} my-3 h-80`}
                >
                  <Image
                    width='600'
                    height='600'
                    src={image.src}
                    alt={image.alt}
                    priority={index < 2}
                    loading={index > 2 ? 'lazy' : 'eager'}
                    placeholder='blur'
                    blurDataURL={image.blurDataUrl}
                    sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                    className='h-full rounded-lg object-cover shadow-2xl'
                  />
                </div>
              )
            })}
          </Carousel>

          <motion.p variants={childVariants} className='my-3 px-1 text-justify'>
            My name is Rendy and I am from Krui, South Sumatra. I started
            surfing at the age of 8 and came to Bali in 2019 to work as a Surf
            Instructor at Batu Bolong Beach in Canggu.
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
              variants={buttonVariants}
              whileInView='inView'
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

export async function getStaticProps() {
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

  const aboutMeImg = await Promise.all(aboutMeImgPromises)

  return {
    props: {
      aboutMeImg,
    },
  }
}
