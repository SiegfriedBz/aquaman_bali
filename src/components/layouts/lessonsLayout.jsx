import Head from 'next/head'
import Link from 'next/link'
import { CldVideoPlayer } from 'next-cloudinary'
import { motion } from 'framer-motion'
import {
  containerVariants,
  childVariants,
  textVariants,
} from '@/utils/framerVariants'
import CustomLink from '../CustomLink'

const meta = {
  title: 'Aquaman Bali | Surf School | Surf Lessons',
  description:
    'Discover our Private and Semi-Private Surf Lessons with experienced instructors. Learn to ride the waves, from beginner basics to advanced techniques. Book your session now!',
}

const LessonsLayout = ({ children }) => {
  return (
    <div>
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
        id='surf-lessons'
        className='mb-3 flex w-full scroll-mt-20 flex-col items-center justify-center'
      >
        <motion.h1
          variants={textVariants}
          className='text-center text-2xl font-bold text-slate-900
          dark:text-stone-100 md:mb-5
            md:text-5xl'
        >
          Surf Lessons
        </motion.h1>

        <motion.h2
          variants={textVariants}
          className='text-center text-xl text-slate-900 dark:text-stone-100 md:mb-5 md:text-3xl'
        >
          in Canggu & during your{' '}
          <span>
            <Link
              href='/surf-trips'
              className='text-slate-900 underline underline-offset-4 dark:text-stone-100'
            >
              Surf Trips
            </Link>
          </span>
        </motion.h2>

        <motion.div
          variants={childVariants}
          className='mt-5 w-full md:my-5 md:w-2/3'
        >
          <nav
            id='lessons-navigation'
            className='my-4 flex w-full items-center justify-center gap-x-8 text-lg font-bold dark:text-stone-100 md:gap-16'
            aria-label='lessons-navigation'
          >
            <CustomLink
              className='w-[42%] px-2 py-2 md:w-[32%] md:px-16 md:py-4'
              href='/surf-lessons#private'
            >
              Private
            </CustomLink>
            <CustomLink
              className='w-[42%] px-2 py-2 md:w-[32%] md:px-16 md:py-4'
              href='/surf-lessons/semi-private#semi-private'
            >
              Semi-Private
            </CustomLink>
          </nav>
        </motion.div>

        <motion.div variants={childVariants} className='my-3'>
          {children}
        </motion.div>
      </motion.section>

      <div className='mb-5 px-2'>
        <CldVideoPlayer
          id='rendy-teach-video-01'
          width='1920'
          height='1080'
          src='RendyTeachVideo01'
          colors={{ accent: '#38bdf8', base: '#fbbf24', text: '#fbbf24' }}
          autoPlay='always'
          loop={true}
          className='rounded-md border-0 shadow-2xl'
        />
      </div>
    </div>
  )
}

export default LessonsLayout
