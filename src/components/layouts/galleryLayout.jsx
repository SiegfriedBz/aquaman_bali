import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion } from 'framer-motion'

const meta = {
  title: 'Aquaman Bali | Surf School | Gallery',
  description: 'Best surf shots',
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

      <section
        id='gallery'
        className='justify-bewteen mb-3 flex flex-col items-center'
      >
        <div className='mb-2'>
          <span className='text-center text-4xl font-bold dark:text-white'>
            Gallery
          </span>
        </div>

        <motion.nav
          variants={navVariants}
          initial='hidden'
          animate='visible'
          id='gallery-navigation'
          className=' flex w-11/12 items-center justify-around text-lg font-bold dark:text-white'
          aria-label='gallery-navigation'
        >
          <motion.div
            variants={linkVariants}
            className={`my-3 min-w-[45%] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500  py-1 text-center ${
              isVideoTab ? 'font-bold' : 'font-extrabold ring-blue-500'
            } text-white outline-none ring-2 hover:ring-blue-500`}
          >
            <Link href='/gallery'>Images</Link>
          </motion.div>
          <motion.div
            variants={linkVariants}
            className={`my-3 min-w-[45%] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500  py-1 text-center ${
              isVideoTab ? 'font-extrabold ring-blue-500' : 'font-bold'
            } text-white outline-none ring-2 hover:ring-blue-500`}
          >
            <Link href='/gallery/videos'>Videos</Link>
          </motion.div>
        </motion.nav>
      </section>

      {children}
    </>
  )
}

export default GalleryLayout
