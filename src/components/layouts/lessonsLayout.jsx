import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { CldVideoPlayer } from 'next-cloudinary'

const LessonsLayout = ({ children }) => {
  const router = useRouter()
  const isSemiPrivateTab = router.asPath.includes('/surf-lessons/semi-private')

  const meta = {
    title: 'Aquaman Bali | Surf School | Surf Lessons',
    description: 'Aquaman Bali | Discover Our Surf Lessons Packages',
  }
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>
      <div
        id='surf-lessons'
        className='flex scroll-mt-20 flex-col items-center justify-center'
      >
        <h3 className='mb-2 text-center text-4xl font-bold dark:text-white'>
          Surf Lessons
        </h3>
        <h4 className='text-center text-xl text-slate-900 dark:text-gray-200'>
          in Canggu & during your{' '}
          <span>
            <Link
              href='/surf-trips'
              className='text-slate-900 underline  underline-offset-4 dark:text-gray-200'
            >
              Surf Trips
            </Link>
          </span>
        </h4>

        <nav
          id='lessons-navigation'
          className='mt-5 flex w-11/12 items-center justify-around text-lg font-bold dark:text-white'
          aria-label='lessons-navigation'
        >
          <div
            className={`my-3 min-w-[45%] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500  py-1 text-center ${
              isSemiPrivateTab ? 'font-bold' : 'font-extrabold ring-blue-500'
            } text-white outline-none ring-2 hover:ring-blue-500`}
          >
            <Link href='/surf-lessons'>Private</Link>
          </div>
          <div
            className={`my-3 min-w-[45%] rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500  py-1 text-center ${
              isSemiPrivateTab ? 'font-extrabold ring-blue-500' : 'font-bold'
            } text-white outline-none ring-2 hover:ring-blue-500`}
          >
            <Link href='/surf-lessons/semi-private'>Semi-Private</Link>
          </div>
        </nav>

        <hr className='mx-5 my-1 bg-slate-950' />
      </div>

      {children}

      <hr className='mx-5 my-5 bg-slate-950' />

      <div className='px-2'>
        <CldVideoPlayer
          id='rendy-teach-video-01'
          width='1920'
          height='1080'
          src='RendyTeachVideo01'
          colors={{ accent: '#38bdf8', base: '#fbbf24', text: '#fbbf24' }}
          autoPlay='always'
          loop={true}
          className='rounded-md border-0 shadow-2xl'
        />
      </div>
    </div>
  )
}

export default LessonsLayout
