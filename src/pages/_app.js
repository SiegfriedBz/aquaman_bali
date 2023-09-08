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
    <RootLayout imageUrl={socialImageConf}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RootLayout>
  )
}

const EmptyLayout = ({ children }) => <>{children}</>
