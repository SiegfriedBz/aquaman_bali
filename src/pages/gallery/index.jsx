import Image from 'next/image'
import Head from 'next/head'
import { CldVideoPlayer } from 'next-cloudinary'

import RendySurfA from '../../../public/images/rendy/surf/rendy_surf_A.jpg'
import RendySurfB from '../../../public/images/rendy/surf/rendy_surf_B.jpg'
import RendySurfC from '../../../public/images/rendy/surf/rendy_surf_C.jpg'
import RendySurfD from '../../../public/images/rendy/surf/rendy_surf_D.jpg'
import RendySurf01 from '../../../public/images/rendy/surf/rendy_surf_01.jpg'
import RendySurf02 from '../../../public/images/rendy/surf/rendy_surf_02.jpg'
import RendySurf03 from '../../../public/images/rendy/surf/rendy_surf_03.jpg'
import RendySurf04 from '../../../public/images/rendy/surf/rendy_surf_04.jpg'
import RendySurf05 from '../../../public/images/rendy/surf/rendy_surf_05.jpg'
import RendySurf06 from '../../../public/images/rendy/surf/rendy_surf_06.jpg'
import RendySurf07 from '../../../public/images/rendy/surf/rendy_surf_07.jpg'
import RendySurf09 from '../../../public/images/rendy/surf/rendy_surf_09.jpg'
import RendySurf11 from '../../../public/images/rendy/surf/rendy_surf_11.jpg'
import RendySurf12 from '../../../public/images/rendy/surf/rendy_surf_12.jpg'

const IMAGES_TOP = [RendySurf06, RendySurfA, RendySurfB, RendySurfC]
const IMAGES_BOTTOM = [
  RendySurfD,
  RendySurf01,
  RendySurf02,
  RendySurf03,
  RendySurf04,
  RendySurf05,
  RendySurf07,
  RendySurf09,
  RendySurf11,
  RendySurf12,
]

const Gallery = () => {
  const meta = {
    title: 'Aquaman Bali | Surf School | Gallery',
    description: 'Best surf shots',
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>

      <div id='gallery' className='justify-bewteen flex flex-col items-center'>
        <div className='mb-2'>
          <span className='text-center text-4xl font-bold dark:text-white'>
            Gallery
          </span>
        </div>

        <div className='my-2 grid grid-cols-1 gap-4 md:grid-cols-4'>
          {IMAGES_TOP.map((src, i) => {
            return (
              <div key={i} className='h-52'>
                <Image
                  src={src}
                  alt='surf-shots'
                  className='h-full rounded-lg object-cover shadow-2xl'
                />
              </div>
            )
          })}
        </div>

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

        <div className='my-2 grid grid-cols-1 gap-4 md:grid-cols-4'>
          {IMAGES_BOTTOM.map((src, i) => {
            return (
              <div key={i} className='h-52'>
                <Image
                  src={src}
                  alt='surf-shots'
                  className='h-full rounded-lg object-cover shadow-2xl'
                />
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default Gallery
