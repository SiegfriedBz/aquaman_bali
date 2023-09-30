import Image from 'next/image'

export const VideosPageMain = ({ image, children }) => {
  return (
    <div className='md:grid md:grid-flow-col md:grid-rows-1 md:gap-8'>
      <div className='md:order-2 md:col-span-4 md:row-span-2 md:my-5'>
        <div
          className='flex h-72 w-full flex-col 
              items-center justify-center md:h-[34rem]'
        >
          <Image
            width='600'
            height='600'
            src={image.src}
            alt={image.alt}
            placeholder='blur'
            blurDataURL={image.blurDataUrl}
            priority={true}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='mx-auto h-full w-full rounded-xl object-cover shadow-2xl md:w-11/12'
          />
        </div>
      </div>

      <VideosPageMain.Details>
        <div className='my-8 flex flex-col-reverse items-center justify-center md:mt-0'>
          {children}
        </div>
      </VideosPageMain.Details>
    </div>
  )
}

VideosPageMain.Details = Details

export function Details({ children }) {
  return (
    <div
      className='flex flex-col items-center justify-center
          text-xl md:order-1 md:col-span-2 md:row-span-2
          md:py-5 md:text-2xl'
    >
      <>{children}</>
    </div>
  )
}
