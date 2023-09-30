import Head from 'next/head'
import Link from 'next/link'
import { CldVideoPlayer } from 'next-cloudinary'
import { useRouter } from 'next/router'
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
  title: 'Aquaman Bali | Surf School | Photo | Video | Drone',
  description:
    'Capture the thrill of your surf sessions with our professional photo and video services. From beginners to experts, preserve your surf memories. Book now!',
}

const MotionLink = motion(Link)

const PhotoVideoLayout = ({ children }) => {
  const router = useRouter()
  const isVideoAnalysisTab = router.asPath.includes('/videos/video-analysis')
  const isWaterDroneTab = router.asPath.includes('/videos/water-drone')

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
        id='videos'
        className='mb-3 flex w-full scroll-mt-20 flex-col items-center justify-center'
      >
        <motion.h1
          variants={textVariants}
          className='text-center text-2xl font-bold text-slate-900
          dark:text-stone-100 md:my-0
            md:text-5xl'
        >
          Photo | Video | Drone
        </motion.h1>
        <motion.h2
          variants={textVariants}
          className='mt-2 text-center text-2xl text-slate-900 dark:text-stone-100'
        >
          Get an amazing souvenir
        </motion.h2>
        <motion.h2
          variants={textVariants}
          className='text-center text-2xl text-slate-900 dark:text-stone-100'
        >
          from your surf session
        </motion.h2>
        <motion.h3
          variants={textVariants}
          className='text-center text-xl text-slate-900 dark:text-stone-100'
        >
          in Canggu & during your{' '}
          <span>
            <Link href='/surf-trips' className='underline underline-offset-4'>
              Surf Trips
            </Link>
          </span>
        </motion.h3>

        <motion.div variants={childVariants} className='mt-5 w-full md:my-8'>
          <motion.nav
            variants={navVariants}
            id='videos-navigation'
            className='flex w-full
              flex-col items-center justify-center
              text-lg font-bold dark:text-stone-100'
            aria-label='gallery-navigation'
          >
            <MotionLink
              href='/videos#photo-video'
              variants={leftLinkVariants}
              className={`my-3 min-w-[45%] rounded-3xl
              bg-gradient-to-r from-cyan-500 to-blue-500
              py-1 text-center
              font-bold md:w-1/4 md:min-w-[25%]
              md:py-3 md:text-2xl md:font-extrabold ${
                (!isWaterDroneTab || !isVideoAnalysisTab) && 'ring-blue-500'
              } text-stone-100 outline-none ring-2 hover:ring-blue-500`}
            >
              Photo & Video
            </MotionLink>
            <div className='flex w-full items-center justify-around md:w-2/3'>
              <MotionLink
                href='/videos/water-drone#water-drone'
                variants={leftLinkVariants}
                className={`my-3 min-w-[45%] rounded-3xl
                bg-gradient-to-r from-cyan-500 to-blue-500
                py-1
                text-center font-bold md:py-3
                md:text-2xl md:font-extrabold ${
                  isWaterDroneTab && 'ring-blue-500'
                } text-stone-100 outline-none ring-2 hover:ring-blue-500`}
              >
                Water & Drone
              </MotionLink>
              <MotionLink
                href='/videos/video-analysis#video-analysis'
                variants={rightLinkVariants}
                className={`my-3 min-w-[45%] rounded-3xl
                bg-gradient-to-r from-cyan-500 to-blue-500
                py-1
                text-center font-bold md:py-3
                md:text-2xl md:font-extrabold ${
                  isVideoAnalysisTab && 'ring-blue-500'
                } text-stone-100 outline-none ring-2 hover:ring-blue-500`}
              >
                Video Analysis
              </MotionLink>
            </div>
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
          src='RendyVideoDrone'
          colors={{ accent: '#38bdf8', base: '#fbbf24', text: '#fbbf24' }}
          autoPlay='always'
          loop={true}
          className='rounded-md border-0 shadow-2xl'
        />
      </div>
    </>
  )
}

export default PhotoVideoLayout
