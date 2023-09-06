import Navbar from './navbar'
import Footer from './footer'
import { AppContextProvider } from '@/context/appContext'
import { useRouter } from 'next/router'
import Head from 'next/head'

export default function Layout(props) {
  const { children, ...customMeta } = props

  const router = useRouter()

  const meta = {
    title: 'Aquaman Bali Surf School',
    description: '5 Stars Surf School in Bali',
    imageUrl: 'path-to-an-image',
    type: 'article',
    canonicalUrl: `https://aquaman-surf-bali.vercel.app/${router.asPath}`,
    date: null,
    ...customMeta,
  }
  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name='robots' content='follow, index' />
        <meta content={meta.description} name='description' />
        <meta
          property='og:url'
          content={`https://aquaman-surf-bali.vercel.app${router.asPath}`}
        />
        <link rel='canonical' href={meta.canonicalUrl} />
        <meta property='og:type' content={meta.type} />
        <meta property='og:site_name' content='Aquaman Bali Surf School' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
        <meta property='og:image' content={meta.imageUrl} />
        {meta.date && (
          <meta property='article:published_time' content={meta.date} />
        )}
      </Head>
      <AppContextProvider>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </AppContextProvider>
    </>
  )
}
