import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import RootLayout from '@/components/layouts/rootLayout'
import generateSocialImage from '../utils/generateSocialImage'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react'

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
          <Analytics />
        </Layout>
      </RootLayout>
    </>
  )
}

const EmptyLayout = ({ children }) => <>{children}</>
