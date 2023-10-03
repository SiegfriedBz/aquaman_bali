import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'
import {
  containerVariants,
  childVariants,
  textVariants,
} from '@/utils/framerVariants'

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
        className='flex w-full scroll-mt-20 flex-col items-center justify-center md:mb-5'
      >
        <motion.h1
          variants={textVariants}
          className='text-center text-3xl font-bold text-slate-900
          dark:text-stone-100
            md:text-5xl'
        >
          Gallery
        </motion.h1>

        <motion.h2
          variants={textVariants}
          className='mt-2 text-center text-xl text-slate-900 dark:text-stone-100 md:text-2xl'
        >
          Explore our best Photos & Videos
        </motion.h2>

        <motion.div
          variants={childVariants}
          className='my-5 w-full md:my-8 md:w-2/3'
        >
          <nav
            id='gallery-navigation'
            className='flex
            w-full items-center justify-center gap-x-3
            text-lg text-stone-100
              md:text-xl lg:text-2xl'
            aria-label='gallery-navigation'
          >
            <Link
              className={`w-1/2 rounded-lg border
                bg-gradient-to-r from-cyan-500 to-blue-500
                ${
                  !isVideoTab
                    ? 'border-cyan-500 font-extrabold dark:border-stone-100'
                    : 'border-blue-500 font-bold'
                }
                px-2 py-2
                text-center md:w-[32%] md:px-16 md:py-4`}
              href='/gallery'
            >
              Photos
            </Link>
            <Link
              className={`w-1/2 rounded-lg border
                bg-gradient-to-r from-cyan-500 to-blue-500
                ${
                  isVideoTab
                    ? 'border-cyan-500 font-extrabold dark:border-stone-100'
                    : 'border-blue-500 font-bold'
                }
                px-2 py-2
                text-center md:w-[32%] md:px-16 md:py-4`}
              href='/gallery/videos'
            >
              Videos
            </Link>
          </nav>
        </motion.div>

        <motion.div variants={childVariants} className='md:mb-5'>
          {!isVideoTab ? children : null}
        </motion.div>
      </motion.section>

      {isVideoTab && <div className='md:mb-5'>{children}</div>}
    </>
  )
}

export default GalleryLayout
