import GalleryLayout from '@/components/layouts/galleryLayout'
import { CldVideoPlayer } from 'next-cloudinary'

const Videos = () => {
  return (
    <>
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

      <hr className='mx-5 my-8 bg-slate-950' />

      <CldVideoPlayer
        id='rendy-teach-video-01'
        width='1920'
        height='1080'
        src='RendyTeachVideo01'
        colors={{ accent: '#38bdf8', base: '#fbbf24', text: '#fbbf24' }}
        autoPlay='false'
        loop={true}
        className='rounded-md border-0 shadow-2xl'
      />

      <hr className='mx-5 my-8 bg-slate-950' />

      <CldVideoPlayer
        id='rendy-video-drone'
        width='1920'
        height='1080'
        src='RendyVideoDrone'
        colors={{ accent: '#38bdf8', base: '#fbbf24', text: '#fbbf24' }}
        autoPlay='false'
        loop={true}
        className='rounded-md border-0 shadow-2xl'
      />
    </>
  )
}

export default Videos

Videos.Layout = GalleryLayout
