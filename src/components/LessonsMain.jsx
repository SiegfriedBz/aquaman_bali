import { CustomCarousel } from '@/components/carousel'
import CustomButton from '@/components/CustomButton'

export const LessonsMain = ({ images, children }) => {
  return (
    <div className='md:grid md:grid-flow-col md:grid-rows-1 md:gap-8'>
      <div className='md:order-2 md:col-span-4 md:row-span-2 md:my-5'>
        <div className='flex w-full flex-col items-center justify-center md:h-full'>
          <CustomCarousel
            images={images}
            carouselKey='private-lessons'
            carouselClasses='mb-2 mt-1 h-72 md:h-[30rem]'
            imageClasses='h-full w-full md:w-11/12 rounded-xl object-cover shadow-2xl mx-auto'
            priority={true}
          />
        </div>
      </div>

      <LessonsMain.Prices>
        <div className='flex flex-col-reverse items-center justify-center'>
          {children}
          <CustomButton />
        </div>
      </LessonsMain.Prices>
    </div>
  )
}

LessonsMain.Prices = Prices

export function Prices({ children }) {
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
