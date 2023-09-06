import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Layout from '@/components/layout'
import generateSocialImage from '../utils/generateSocialImage'

const TITLE = 'Aquaman Surf Bali'
const DESCRIPTION = '5 Stars Surf School & Surf Trips'

const socialImageConf = generateSocialImage({
  title: TITLE,
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  imagePublicID: 'og_social_aquaman_bali',
})

export default function App({ Component, pageProps }) {
  return (
    <Layout
      title={TITLE}
      description={DESCRIPTION}
      imageUrl={socialImageConf}
      type='article'
    >
      <Component {...pageProps} />
    </Layout>
  )
}
