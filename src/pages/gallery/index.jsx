import { useId } from 'react'
import Image from 'next/image'
import GalleryLayout from '@/components/layouts/galleryLayout'
import rendyTeach from '@/data/rendyTeach.json'
import rendySurf from '@/data/rendySurf.json'
const [
  rendyTeach01,
  rendyTeach02,
  rendyTeach03,
  rendyTeach04,
  rendyTeach05,
  rendyTeach06,
  rendyTeach07,
] = rendyTeach

const [
  rendySurf01,
  rendySurf01Small,
  rendySurf02,
  rendySurf02Small,
  rendySurf03,
  rendySurf03Small,
  rendySurf04,
  rendySurf04Small,
  rendySurf05,
  rendySurf06,
  rendySurf07,
  rendySurf08,
  rendySurf09,
  rendySurf10,
  rendySurf10Small,
  rendySurf11,
  rendySurf12,
  rendySurf13,
  rendySurf14,
] = rendySurf

const galleryImg = [
  rendySurf01,
  rendyTeach04,
  rendySurf05,
  rendyTeach07,
  rendySurf11,
  rendyTeach03,
  rendySurf02,
  rendyTeach01,
  rendySurf03,
  rendyTeach02,
  rendySurf04,
  rendyTeach05,
  rendySurf06,
  rendyTeach06,
  rendySurf07,
  rendySurf08,
  rendySurf09,
  rendySurf10,

  rendySurf12,
  rendySurf13,
  rendySurf14,
]

const Gallery = () => {
  const imageId = useId()

  return (
    <div className='mt-3 grid grid-cols-1 gap-4 md:grid-cols-4'>
      {galleryImg.map((image) => {
        return (
          <div key={`${imageId}-${image.image}`} className='h-70'>
            <Image
              width='600'
              height='600'
              src={image.image}
              alt={image.alt}
              loading='lazy'
              // sizes='100vw'
              className='h-full rounded-lg object-cover shadow-2xl'
            />
          </div>
        )
      })}
    </div>
  )
}

export default Gallery

Gallery.Layout = GalleryLayout
