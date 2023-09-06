import '@/styles/globals.css'
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false
import Layout from '@/components/layout'
import generateSocialImage from '../utils/generateSocialImage'

const socialImageConf = generateSocialImage({
  title: 'Aquaman Surf Bali',
  // underlayImage: coverImage.slice(coverImage.lastIndexOf('/') + 1),
  cloudName: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  imagePublicID: 'og_social_aquaman_bali', // the OG template image name uploaded in Cloudinary
})

export default function App({ Component, pageProps }) {
  return (
    <Layout
      // title={title}
      title='{title}'
      // description={description}
      description='{description}'
      imageUrl={socialImageConf}
      // date={new Date(publishedDate).toISOString()}
      type='article'
    >
      <Component {...pageProps} />
    </Layout>
  )
}
