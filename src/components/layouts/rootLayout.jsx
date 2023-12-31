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
          content='Aquaman Bali, Surf Aquaman Bali, Aquaman Surf Bali, AquamanBali, Canggu Surf, Canggu Surf School, Canggu Surf Lessons, Bali Surf, Bali Surf Lessons, Bali Surf School, Bali Surf Trips, Bali Surf Photos, Canggu Surf Photos, Bali Surf Videos, Bali Surf Drone'
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
        <div className='min-w-full dark:bg-slate-900 dark:text-stone-100'>
          <Navbar />
          <main className='px-4 py-8 sm:px-16 md:px-24 xl:px-32'>
            {children}
          </main>
          <Footer />
        </div>
      </AppContextProvider>
    </>
  )
}
