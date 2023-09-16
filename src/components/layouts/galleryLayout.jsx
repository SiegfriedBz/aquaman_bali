import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const meta = {
  title: 'Aquaman Bali | Surf School | Gallery',
  description: 'Best surf shots',
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.75,
    },
  },
}

const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.25,
    },
  },
}

const textVariants = {
  hidden: { opacity: 0, y: '16px' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.25,
    },
  },
}

const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.2,
    },
  },
}

const leftLinkVariants = {
  hidden: { opacity: 0, x: '-100vw' },
  visible: {
    opacity: 1,
    x: 0,
    type: 'spring',
    stiffness: 120,
  },
}

const rightLinkVariants = {
  hidden: { opacity: 0, x: '50vw' },
  visible: {
    opacity: 1,
    x: 0,
    type: 'spring',
    stiffness: 100,
  },
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
        <motion.h3
          variants={textVariants}
          className='mb-2 text-center text-4xl font-bold dark:text-white'
        >
          Gallery
        </motion.h3>

        <motion.h4
          variants={textVariants}
          className='text-center text-xl text-slate-900 dark:text-gray-200'
        >
          Explore our best Photos & Videos
        </motion.h4>

        <motion.div
          variants={childVariants}
          initial='hidden'
          animate='visible'
          className='mt-5 w-full'
        >
          <motion.nav
            id='gallery-navigation'
            className='flex w-full items-center justify-around text-lg font-bold dark:text-white'
            aria-label='gallery-navigation'
            variants={navVariants}
            initial='hidden'
            animate='visible'
          >
            <motion.div
              variants={leftLinkVariants}
              className={`my-3 min-w-[45%] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 py-1 text-center ${
                !isVideoTab ? 'font-bold' : 'font-extrabold ring-blue-500'
              } text-white outline-none ring-2 hover:ring-blue-500`}
            >
              <Link href='/gallery'>Images</Link>
            </motion.div>
            <motion.div
              variants={rightLinkVariants}
              className={`my-3 min-w-[45%] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 py-1 text-center ${
                isVideoTab ? 'font-extrabold ring-blue-500' : 'font-bold'
              } text-white outline-none ring-2 hover:ring-blue-500`}
            >
              <Link href='/gallery/videos'>Videos</Link>
            </motion.div>
          </motion.nav>
        </motion.div>

        {!isVideoTab && (
          <motion.div variants={childVariants} className='mx-2 mb-5 mt-3'>
            {children}
          </motion.div>
        )}
      </motion.section>

      {isVideoTab && <div className='mx-2 mb-5 mt-3'>{children}</div>}
    </>
  )
}

export default GalleryLayout
