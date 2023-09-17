import Image from 'next/image'
import GalleryLayout from '@/components/layouts/galleryLayout'
import galleryImg from '@/data/images/galleryImg'

const Gallery = () => {
  return (
    <div className='mt-3 grid grid-cols-1 gap-4 md:grid-cols-4'>
      {galleryImg.map((src, i) => {
        return (
          <div key={i} className='h-70'>
            <Image
              src={src}
              alt='surf-shots'
              className='h-full rounded-lg object-cover shadow-2xl'
              priority={i <= 2}
              quality={100}
            />
          </div>
        )
      })}
    </div>
  )
}

export default Gallery

Gallery.Layout = GalleryLayout
