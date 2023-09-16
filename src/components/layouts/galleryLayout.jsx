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

const elementVariants = {
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
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const leftLinkVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    type: 'spring',
    stiffness: 180,
  },
}

const rightLinkVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    type: 'spring',
    stiffness: 120,
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
        className='justify-bewteen mb-3 flex flex-col items-center'
      >
        <motion.h3
          variants={elementVariants}
          className='mb-2 text-center text-4xl font-bold dark:text-white'
        >
          Gallery
        </motion.h3>

        <motion.nav
          variants={navVariants}
          initial='hidden'
          animate='visible'
          id='gallery-navigation'
          className='flex w-full items-center justify-around text-lg font-bold dark:text-white'
          aria-label='gallery-navigation'
        >
          <motion.div
            variants={leftLinkVariants}
            className={`my-3 min-w-[45%] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500  py-1 text-center ${
              isVideoTab ? 'font-bold' : 'font-extrabold ring-blue-500'
            } text-white outline-none ring-2 hover:ring-blue-500`}
          >
            <Link href='/gallery'>Images</Link>
          </motion.div>
          <motion.div
            variants={rightLinkVariants}
            className={`my-3 min-w-[45%] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500  py-1 text-center ${
              isVideoTab ? 'font-extrabold ring-blue-500' : 'font-bold'
            } text-white outline-none ring-2 hover:ring-blue-500`}
          >
            <Link href='/gallery/videos'>Videos</Link>
          </motion.div>
        </motion.nav>
      </motion.section>

      {children}
    </>
  )
}

export default GalleryLayout
