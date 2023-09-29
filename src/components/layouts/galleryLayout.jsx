import Head from 'next/head'
import Link from 'next/link'
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
  title: 'Aquaman Bali | Surf School | Gallery',
  description: 'Best surf shots',
}

const MotionLink = motion(Link)

const GalleryLayout = ({ children }) => {
  const router = useRouter()
  const isVideoTab = router.asPath.includes('/gallery/videos')

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
        id='gallery'
        className='mb-3 flex w-full scroll-mt-20 flex-col items-center justify-center'
      >
        <motion.h1
          variants={textVariants}
          className='mb-2 text-center text-4xl font-bold dark:text-white'
        >
          Gallery
        </motion.h1>

        <motion.h2
          variants={textVariants}
          className='text-center text-xl text-slate-900 dark:text-gray-200'
        >
          Explore our best Photos & Videos
        </motion.h2>

        <motion.div
          variants={childVariants}
          className='mt-5 w-full md:my-5 md:w-2/3'
        >
          <motion.nav
            id='gallery-navigation'
            className='flex w-full items-center justify-around text-lg font-bold dark:text-white'
            aria-label='gallery-navigation'
            variants={navVariants}
          >
            <MotionLink
              href='/gallery'
              variants={leftLinkVariants}
              className={`my-3 min-w-[45%] rounded-3xl
              bg-gradient-to-r from-cyan-500 to-blue-500
              py-1
              text-center font-bold md:py-3
              md:text-2xl md:font-extrabold ${
                !isVideoTab ? 'font-bold' : 'font-extrabold ring-blue-500'
              } text-white outline-none ring-2 hover:ring-blue-500`}
            >
              Photos
            </MotionLink>

            <MotionLink
              href='/gallery/videos'
              variants={rightLinkVariants}
              className={`my-3 min-w-[45%] rounded-3xl
              bg-gradient-to-r from-cyan-500 to-blue-500
              py-1
              text-center font-bold md:py-3
              md:text-2xl md:font-extrabold ${
                isVideoTab ? 'font-extrabold ring-blue-500' : 'font-bold'
              } text-white outline-none ring-2 hover:ring-blue-500`}
            >
              Videos
            </MotionLink>
          </motion.nav>
        </motion.div>

        <hr className='mb-3'></hr>

        <motion.div variants={childVariants} className='mx-2'>
          {!isVideoTab ? children : null}
        </motion.div>
      </motion.section>

      {isVideoTab && <div className='mx-2'>{children}</div>}
    </>
  )
}

export default GalleryLayout
