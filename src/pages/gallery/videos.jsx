import GalleryLayout from '@/components/layouts/galleryLayout'
import { CldVideoPlayer } from 'next-cloudinary'

const Videos = () => {
  return (
    <CldVideoPlayer
      id='rendy-landing-page-video'
      width='1920'
      height='1080'
      src='RendyLandingPageVideo'
      colors={{ accent: '#38bdf8', base: '#fbbf24', text: '#fbbf24' }}
      autoPlay='always'
      loop={true}
      className='rounded-lg border-0 shadow-2xl'
    />
  )
}

export default Videos

Videos.Layout = GalleryLayout
