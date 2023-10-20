import Head from 'next/head'
import Script from 'next/script'
import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import RootLayout from '@/components/layouts/rootLayout'
import generateSocialImage from '../utils/generateSocialImage'

const socialImageConf = generateSocialImage({
  title: 'Aquaman Bali',
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  imagePublicID: 'og_social_aquaman_bali',
})

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || EmptyLayout

  return (
    <>
      <Head>
        <meta name='viewport' content='width=device-width,initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <RootLayout imageUrl={socialImageConf}>
        <Layout>
          <Component {...pageProps} />
          <Script
            src={`https://www.googletagmanager.com/gtag/js?id=G-E75E97WX66`}
          />
          <Script id='google-analytics'>
            {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
 
          gtag('config', 'G-E75E97WX66');
        `}
          </Script>
        </Layout>
      </RootLayout>
    </>
  )
}

const EmptyLayout = ({ children }) => <>{children}</>
