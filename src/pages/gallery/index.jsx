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

import Teach01 from '../../../public/images/lessons/teach_01.JPG'
import Teach02 from '../../../public/images/lessons/teach_02.JPG'
import Teach03 from '../../../public/images/lessons/teach_03.JPG'
import Teach04 from '../../../public/images/lessons/teach_04.JPG'
import Teach05 from '../../../public/images/lessons/teach_05.JPG'
import Teach06 from '../../../public/images/lessons/teach_06.JPG'
import Teach07 from '../../../public/images/lessons/teach_07.JPG'
import Teach08 from '../../../public/images/lessons/teach_08.JPG'
import Teach09 from '../../../public/images/lessons/teach_09.JPG'
import Teach10 from '../../../public/images/lessons/teach_10.JPG'

const IMAGES_TOP = [RendySurf06, RendySurfA, RendySurfB]
const IMAGES_BOTTOM = [
  RendySurfC,
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
  Teach01,
  Teach02,
  Teach03,
  Teach04,
  Teach05,
  Teach06,
  Teach07,
  Teach08,
  Teach09,
  Teach10,
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

      <div
        id='gallery'
        className='justify-bewteen flex flex-col items-center p-5 dark:bg-slate-900 dark:text-gray-200'
      >
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
