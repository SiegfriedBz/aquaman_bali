import Image from 'next/image'
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
import GalleryLayout from '@/components/layouts/galleryLayout'

const IMAGES = [
  RendySurf06,
  RendySurfA,
  RendySurfB,
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
]

const Gallery = () => {
  return (
    <>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-4'>
        {IMAGES.map((src, i) => {
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
    </>
  )
}

export default Gallery

Gallery.Layout = GalleryLayout
