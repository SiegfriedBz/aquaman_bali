import Image from 'next/image'
import rendySurfA from '../../../public/images/rendy/surf/rendy_surf_A.jpg'
import rendySurfB from '../../../public/images/rendy/surf/rendy_surf_B.jpg'
import rendySurfC from '../../../public/images/rendy/surf/rendy_surf_C.jpg'
import rendySurfD from '../../../public/images/rendy/surf/rendy_surf_D.jpg'
import rendySurf01 from '../../../public/images/rendy/surf/rendy_surf_01.jpg'
import rendySurf02 from '../../../public/images/rendy/surf/rendy_surf_02.jpg'
import rendySurf03 from '../../../public/images/rendy/surf/rendy_surf_03.jpg'
import rendySurf04 from '../../../public/images/rendy/surf/rendy_surf_04.jpg'
import rendySurf05 from '../../../public/images/rendy/surf/rendy_surf_05.jpg'
import rendySurf06 from '../../../public/images/rendy/surf/rendy_surf_06.jpg'
import rendySurf07 from '../../../public/images/rendy/surf/rendy_surf_07.jpg'
import rendySurf09 from '../../../public/images/rendy/surf/rendy_surf_09.jpg'
import rendySurf11 from '../../../public/images/rendy/surf/rendy_surf_11.jpg'
import rendySurf12 from '../../../public/images/rendy/surf/rendy_surf_12.jpg'
// import teach01 from '../../../public/images/lessons/teach_01.jpg'
// import teach02 from '../../../public/images/lessons/teach_02.jpg'
// import teach03 from '../../../public/images/lessons/teach_03.jpg'
// import teach04 from '../../../public/images/lessons/teach_04.jpg'
// import teach05 from '../../../public/images/lessons/teach_05.jpg'
// import teach06 from '../../../public/images/lessons/teach_06.jpg'
// import teach07 from '../../../public/images/lessons/teach_07.jpg'
// import teach08 from '../../../public/images/lessons/teach_08.jpg'
// import teach09 from '../../../public/images/lessons/teach_09.jpg'
// import teach10 from '../../../public/images/lessons/teach_10.jpg'

import GalleryLayout from '@/components/layouts/galleryLayout'

const IMAGES = [
  rendySurf06,
  rendySurfA,
  rendySurfB,
  // teach01,
  rendySurfC,
  // teach02,
  rendySurfD,
  // teach03,
  rendySurf01,
  // teach04,
  rendySurf02,
  // teach05,
  rendySurf03,
  // teach06,
  rendySurf04,
  // teach07,
  rendySurf05,
  // teach08,
  rendySurf07,
  // teach09,
  rendySurf09,
  // teach10,
  rendySurf12,
  rendySurf11,
]

const Gallery = () => {
  return (
    <>
      <div className='mx-2 grid grid-cols-1 gap-4 md:grid-cols-4'>
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
