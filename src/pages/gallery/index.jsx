import { useId } from 'react'
import Image from 'next/image'
import GalleryLayout from '@/components/layouts/galleryLayout'
import { galleryImages } from '@/data/galleryPageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'

const Gallery = ({ galleryImg }) => {
  const imageId = useId()

  return (
    <div className='mt-3 grid grid-cols-1 gap-4 md:scroll-mt-[15rem] md:grid-cols-4'>
      {galleryImg.map((image, index) => {
        return (
          <div key={`${imageId}-${image.src}`} className='h-72'>
            <Image
              width='600'
              height='600'
              src={image.src}
              alt={image.alt}
              priority={index < 4}
              loading={index > 3 ? 'lazy' : 'eager'}
              placeholder='blur'
              blurDataURL={image.blurDataUrl}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
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

export async function getStaticProps() {
  const galleryImgPromises = galleryImages.map(async (image) => {
    const src = getImageUrl(image.image)
    const blurDataUrl = await getBase64ImageUrl(image.image)
    return {
      src,
      blurDataUrl,
      id: image.id,
      alt: image.alt,
    }
  })

  const galleryImg = await Promise.all(galleryImgPromises)

  return {
    props: {
      galleryImg,
    },
  }
}
