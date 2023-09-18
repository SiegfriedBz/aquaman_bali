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
          className='mb-2 text-center text-4xl font-bold dark:text-white'
        >
          Photo | Video | Drone
        </motion.h1>
        <motion.h2
          variants={textVariants}
          className='mt-2 text-center text-2xl text-slate-900 dark:text-gray-200'
        >
          Get an amazing souvenir
        </motion.h2>
        <motion.h2
          variants={textVariants}
          className='text-center text-2xl text-slate-900 dark:text-gray-200'
        >
          from your surf session
        </motion.h2>
        <motion.h3
          variants={textVariants}
          className='text-center text-xl text-slate-900 dark:text-gray-200'
        >
          in Canggu & during your{' '}
          <span>
            <Link href='/surf-trips' className='underline underline-offset-4'>
              Surf Trips
            </Link>
          </span>
        </motion.h3>

        <motion.div variants={childVariants} className='mt-5 w-full'>
          <motion.nav
            variants={navVariants}
            id='videos-navigation'
            className='flex w-full items-center justify-around text-sm font-bold dark:text-white'
            aria-label='gallery-navigation'
          >
            <motion.div
              variants={leftLinkVariants}
              className={`my-3 min-w-[25%] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 py-1 text-center ${
                !isWaterDroneTab || !isVideoAnalysisTab
                  ? 'font-extrabold ring-blue-500'
                  : 'font-bold'
              } text-white outline-none ring-2 hover:ring-blue-500`}
            >
              <Link href='/videos' className='px-1'>
                Photos & Videos
              </Link>
            </motion.div>
            <motion.div
              variants={leftLinkVariants}
              className={`my-3 min-w-[25%] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 py-1 text-center ${
                isWaterDroneTab ? 'font-extrabold ring-blue-500' : 'font-bold'
              } text-white outline-none ring-2 hover:ring-blue-500`}
            >
              <Link href='/videos/water-drone' className='px-1'>
                Water & Drone
              </Link>
            </motion.div>
            <motion.div
              variants={rightLinkVariants}
              className={`my-3 min-w-[25%] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 py-1 text-center ${
                isVideoAnalysisTab
                  ? 'font-extrabold ring-blue-500'
                  : 'font-bold'
              } text-white outline-none ring-2 hover:ring-blue-500`}
            >
              <Link href='/videos/video-analysis' className='px-1'>
                Video Analysis
              </Link>
            </motion.div>
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
