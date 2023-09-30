import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import {
  containerVariants,
  childVariants,
  textVariants,
} from '@/utils/framerVariants'
import CustomButton from '../CustomButton'

const meta = {
  title: 'Aquaman Bali | Surf School | Gallery',
  description: 'Best surf shots',
}

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
          className='text-center text-2xl font-bold text-slate-900
          dark:text-stone-100 md:my-0
            md:text-5xl'
        >
          Gallery
        </motion.h1>

        <motion.h2
          variants={textVariants}
          className='text-center text-xl text-slate-900 dark:text-stone-100'
        >
          Explore our best Photos & Videos
        </motion.h2>

        <motion.div
          variants={childVariants}
          className='mt-5 w-full md:my-5 md:w-2/3'
        >
          <nav
            id='gallery-navigation'
            className='my-4 flex w-full items-center justify-around text-lg font-bold dark:text-stone-100'
            aria-label='gallery-navigation'
          >
            <CustomButton
              className='w-[42%] px-2 py-2 md:w-[32%] md:px-16 md:py-4'
              href='/gallery'
            >
              Photos
            </CustomButton>
            <CustomButton
              className='w-[42%] px-2 py-2 md:w-[32%] md:px-16 md:py-4'
              href='/gallery/videos'
            >
              Videos
            </CustomButton>
          </nav>
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
