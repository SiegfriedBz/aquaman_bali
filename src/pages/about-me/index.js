import Head from 'next/head'
import { motion } from 'framer-motion'
import { CustomCarousel } from '../../components/carousel'
import { aboutMeImages } from '@/data/aboutMePageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'
import {
  containerVariants,
  childVariants,
  textVariants,
} from '@/utils/framerVariants'
import CustomLink from '@/components/CustomLink'

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
        className='md:grid md:grid-flow-col md:grid-rows-1 md:gap-8'
      >
        <div className='md:mt-8'>
          <motion.h1
            variants={textVariants}
            className='text-center text-2xl font-bold text-slate-900
          dark:text-stone-100 md:my-0
            md:text-5xl'
          >
            About Me
          </motion.h1>
        </div>

        <div className='my-5 md:order-3 md:col-span-2 md:row-span-2'>
          <motion.div
            variants={childVariants}
            className='flex w-full flex-col items-center justify-center md:h-full'
          >
            <CustomCarousel
              images={aboutMeImg}
              carouselKey='about-me'
              carouselClasses='h-60 md:h-[30rem]'
              imageClasses='h-full w-full md:w-11/12 rounded-xl object-cover shadow-2xl mx-auto'
              priority={true}
            />
          </motion.div>
        </div>

        <div
          className='flex flex-col items-center justify-center
            text-xl md:order-2 md:col-span-2 md:row-span-1
            md:py-5 md:text-2xl'
        >
          <motion.p variants={childVariants} className='text-justify'>
            My name is Rendy and I am from Krui, South Sumatra. I started
            surfing at the age of 8 and came to Bali in 2019 to work as a Surf
            Instructor at Batu Bolong Beach in Canggu.
          </motion.p>
          <motion.p variants={childVariants} className='my-3 text-justify'>
            Batu Bolong is an easy place to learn surfing as a beginner but is
            also good for intermediate surfers.
          </motion.p>
          <motion.p variants={childVariants} className='text-justify'>
            I really love surfing and want to share my experience, knowledge and
            stoke of surfing with you. It is a lot of fun. Come join me and
            let&apos;s enjoy the waves and make you reach your goals in surfing!
          </motion.p>
          <motion.div
            variants={childVariants}
            className='flex flex-col items-center'
          >
            <CustomLink />
          </motion.div>
        </div>
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
