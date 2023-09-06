import Navbar from './navbar'
import Footer from './footer'
import { AppContextProvider } from '@/context/appContext'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Layout(props) {
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
          content='Aquaman Bali Surf School Surf Trips'
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
        <Navbar />
        <main>{children}</main>
        <Footer />
      </AppContextProvider>
    </>
  )
}
