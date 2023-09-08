import Head from 'next/head'
import { AppContextProvider } from '@/context/appContext'
import { useRouter } from 'next/router'
import Navbar from '../navbar'
import Footer from '../footer'

export default function RootLayout(props) {
  const { children, ...customMeta } = props

  const router = useRouter()

  const meta = {
    canonicalUrl: `https://aquaman-surf-bali.vercel.app/${router.asPath}`,
    ...customMeta,
  }

  return (
    <>
      <Head>
        <meta name='robots' content='follow, index' />
        <meta
          name='keywords'
          content='Aquaman Bali, AquamanBali, Surf, Surf Lessons, Surf School, Surf Trips, Surf Photos, Surf Videos, Surf Drone'
        ></meta>
        <meta
          property='og:url'
          content={`https://aquaman-surf-bali.vercel.app${router.asPath}`}
        />
        <link rel='canonical' href={meta.canonicalUrl} />
        <meta property='og:site_name' content='Aquaman Bali' />
        <meta property='og:image' content={meta.imageUrl} />
      </Head>

      <AppContextProvider>
        <div className='dark:bg-slate-900 dark:text-gray-200'>
          <Navbar />
          <hr className='mx-5 bg-slate-950 dark:bg-slate-200' />
          <main className='py-5'>{children}</main>
          <hr className='mx-5 bg-slate-950 dark:bg-slate-200' />
          <Footer />
        </div>
      </AppContextProvider>
    </>
  )
}
