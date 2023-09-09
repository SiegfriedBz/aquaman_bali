import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'

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

      <div id='gallery' className='justify-bewteen flex flex-col items-center'>
        <div className='mb-2'>
          <span className='text-center text-4xl font-bold dark:text-white'>
            Gallery
          </span>
        </div>

        <nav
          id='gallery-navigation'
          className=' flex w-11/12 items-center justify-around text-lg font-bold dark:text-white'
          aria-label='gallery-navigation'
        >
          <div
            className={`my-3 min-w-[45%] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500  py-1 text-center ${
              isVideoTab ? 'font-bold' : 'font-extrabold ring-blue-500'
            } text-white outline-none ring-2 hover:ring-blue-500`}
          >
            <Link href='/gallery'>Images</Link>
          </div>
          <div
            className={`my-3 min-w-[45%] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500  py-1 text-center ${
              isVideoTab ? 'font-extrabold ring-blue-500' : 'font-bold'
            } text-white outline-none ring-2 hover:ring-blue-500`}
          >
            <Link href='/gallery/videos'>Videos</Link>
          </div>
        </nav>

        <hr className='mx-5 my-3 bg-slate-950' />

        {children}
      </div>
    </>
  )
}

export default GalleryLayout
