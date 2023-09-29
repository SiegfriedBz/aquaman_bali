import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CldVideoPlayer } from 'next-cloudinary'
import { motion } from 'framer-motion'
import {
  containerVariants,
  childVariants,
  textVariants,
  navVariants,
  leftLinkVariants,
  rightLinkVariants,
} from '@/utils/framerVariants'

const meta = {
  title: 'Aquaman Bali | Surf School | Surf Lessons',
  description:
    'Discover our Private and Semi-Private Surf Lessons with experienced instructors. Learn to ride the waves, from beginner basics to advanced techniques. Book your session now!',
}

const MotionLink = motion(Link)

const LessonsLayout = ({ children }) => {
  const router = useRouter()
  const isSemiPrivateTab = router.asPath.includes('/surf-lessons/semi-private')

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
          dark:text-white md:mb-5
            md:text-5xl'
        >
          Surf Lessons
        </motion.h1>

        <motion.h2
          variants={textVariants}
          className='text-center text-xl text-slate-900 dark:text-gray-200 md:mb-5 md:text-3xl'
        >
          in Canggu & during your{' '}
          <span>
            <Link
              href='/surf-trips'
              className='text-slate-900 underline underline-offset-4 dark:text-gray-200'
            >
              Surf Trips
            </Link>
          </span>
        </motion.h2>

        <motion.div
          variants={childVariants}
          className='mt-5 w-full md:my-5 md:w-2/3'
        >
          <motion.nav
            id='lessons-navigation'
            className='flex w-full items-center justify-around text-lg font-bold dark:text-white'
            aria-label='lessons-navigation'
            variants={navVariants}
          >
            <MotionLink
              href='/surf-lessons'
              variants={leftLinkVariants}
              className={`my-3 min-w-[45%] rounded-3xl
                bg-gradient-to-r from-cyan-500 to-blue-500
                py-1
                text-center font-bold md:py-3
                md:text-2xl md:font-extrabold ${
                  isSemiPrivateTab && 'ring-blue-500'
                } text-white outline-none ring-2 hover:ring-blue-500`}
            >
              Private
            </MotionLink>

            <MotionLink
              href='/surf-lessons/semi-private'
              variants={rightLinkVariants}
              className={`my-3 min-w-[45%] rounded-3xl bg-gradient-to-r
                from-cyan-500 to-blue-500 py-1
                text-center font-bold md:py-3 md:text-2xl md:font-extrabold ${
                  isSemiPrivateTab && 'ring-blue-500'
                } text-white outline-none ring-2 hover:ring-blue-500`}
            >
              Semi-Private
            </MotionLink>
          </motion.nav>
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
