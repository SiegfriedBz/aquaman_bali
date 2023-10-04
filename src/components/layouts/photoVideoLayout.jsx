import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CldVideoPlayer } from 'next-cloudinary'
import { motion } from 'framer-motion'
import {
  containerVariants,
  childVariants,
  textVariants,
} from '@/utils/framerVariants'

const meta = {
  title: 'Aquaman Bali | Surf School | Photo | Video | Drone',
  description:
    'Capture the thrill of your surf sessions with our professional photo and video services. From beginners to experts, preserve your surf memories. Book now!',
}

const PhotoVideoLayout = ({ children }) => {
  const router = useRouter()

  const isWaterDroneTab = router.asPath.includes('water-drone')
  const isVideoAnalysisTab = router.asPath.includes('video-analysis')

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
          className='text-center text-3xl font-bold text-slate-900
          dark:text-stone-100
            md:text-5xl'
        >
          Photo | Video | Drone
        </motion.h1>
        <motion.div
          variants={textVariants}
          className='mt-2 md:flex md:flex-row md:items-center md:gap-x-2'
        >
          <h2 className='text-center text-xl text-slate-900 dark:text-stone-100 md:text-2xl'>
            Get an amazing souvenir
          </h2>
          <h2 className='text-center text-xl text-slate-900 dark:text-stone-100 md:text-2xl'>
            from your Surf Sessions
          </h2>
        </motion.div>
        <motion.div
          variants={childVariants}
          className='my-5 w-full md:my-8 md:w-2/3'
        >
          <nav
            id='videos-navigation'
            className='flex w-full
            flex-col items-center justify-center text-lg
            text-stone-100 md:text-xl
              xl:flex-row xl:gap-x-3 xl:text-2xl'
            aria-label='gallery-navigation'
          >
            <Link
              className={`w-1/2 rounded-lg border
                bg-gradient-to-r from-cyan-500 to-blue-500
                ${
                  !isVideoAnalysisTab && !isWaterDroneTab
                    ? 'border-cyan-500 font-extrabold dark:border-stone-100'
                    : 'border-blue-500 font-bold'
                }
                px-2 py-2
                text-center md:w-1/3 md:px-16 md:py-4`}
              href='/videos#photo-video'
            >
              Photo & Video
            </Link>

            <div className='mt-3 flex w-full items-center justify-around gap-x-3 md:mt-0 md:w-2/3'>
              <Link
                className={`w-1/2 rounded-lg border
                  bg-gradient-to-r from-cyan-500 to-blue-500
                  ${
                    isWaterDroneTab
                      ? 'border-cyan-500 font-extrabold dark:border-stone-100'
                      : 'border-blue-500 font-bold'
                  }
                  px-2 py-2
                  text-center md:px-16 md:py-4`}
                href='/videos/water-drone#water-drone'
              >
                Water & Drone
              </Link>
              <Link
                className={`w-1/2 rounded-lg border
                  bg-gradient-to-r from-cyan-500 to-blue-500
                  ${
                    isVideoAnalysisTab
                      ? 'border-cyan-500 font-extrabold dark:border-stone-100'
                      : 'border-blue-500 font-bold'
                  }
                   px-2
                  py-2 text-center md:px-16 md:py-4`}
                href='/videos/video-analysis#video-analysis'
              >
                Video Analysis
              </Link>
            </div>
          </nav>
        </motion.div>

        <motion.div variants={childVariants}>{children}</motion.div>
      </motion.section>

      <div className='md:mb-5'>
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
