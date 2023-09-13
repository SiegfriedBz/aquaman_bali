import Head from 'next/head'
import Link from 'next/link'
import { CldVideoPlayer } from 'next-cloudinary'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const meta = {
  title: 'Aquaman Bali | Surf School | Photo & Video | Drone',
  description: 'Discover Our Photo & Video Packages',
}

const navVariants = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const linkVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
  },
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

      <section
        id='videos'
        className='flex scroll-mt-20 flex-col items-center justify-center'
      >
        <h2 className='text-center text-3xl font-bold text-slate-900 dark:text-white'>
          Photo & Video | Drone
        </h2>
        <h3 className='mt-2 text-center text-2xl text-slate-900 dark:text-gray-200'>
          Get an amazing souvenir
        </h3>
        <h3 className='text-center text-2xl text-slate-900 dark:text-gray-200'>
          from your surf session
        </h3>
        <h4 className='text-center text-xl text-slate-900 dark:text-gray-200'>
          in Canggu & during your{' '}
          <span>
            <Link href='/surf-trips' className='underline underline-offset-4'>
              Surf Trips
            </Link>
          </span>
        </h4>
        <motion.nav
          variants={navVariants}
          initial='hidden'
          animate='visible'
          id='videos-navigation'
          className='my-5 flex w-full items-center justify-around text-sm font-bold dark:text-white'
          aria-label='gallery-navigation'
        >
          <motion.div
            variants={linkVariants}
            className={`my-3 min-w-[25%] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 py-2 text-center ${
              !isWaterDroneTab || !isVideoAnalysisTab
                ? 'font-bold'
                : 'font-extrabold ring-blue-500'
            } text-white outline-none ring-2 hover:ring-blue-500`}
          >
            <Link href='/videos' className='px-1'>
              Photos & Videos
            </Link>
          </motion.div>
          <motion.div
            variants={linkVariants}
            className={`my-3 min-w-[25%] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 py-2 text-center ${
              isWaterDroneTab ? 'font-extrabold ring-blue-500' : 'font-bold'
            } text-white outline-none ring-2 hover:ring-blue-500`}
          >
            <Link href='/videos/water-drone' className='px-1'>
              Water & Drone
            </Link>
          </motion.div>
          <motion.div
            variants={linkVariants}
            className={`my-3 min-w-[25%] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 py-2 text-center ${
              isVideoAnalysisTab ? 'font-bold' : 'font-extrabold ring-blue-500'
            } text-white outline-none ring-2 hover:ring-blue-500`}
          >
            <Link href='/videos/video-analysis' className='px-1'>
              Video Analysis
            </Link>
          </motion.div>
        </motion.nav>
      </section>

      {children}

      <div className='px-2 pb-2 pt-3'>
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
