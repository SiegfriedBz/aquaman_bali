import LessonsLayout from '@/components/layouts/lessonsLayout'
import { privateLessonsImages } from '@/data/surfLessonsPageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'
import { LessonsDetails } from '@/components/LessonsDetails'
import { LessonsMain } from '@/components/LessonsMain'

const SurfLessons = ({ privateLessonsImg }) => {
  return (
    <section id='private' className='mb-2'>
      <h2
        className='mb-2 text-center text-2xl font-bold 
          text-slate-900  dark:text-white
            md:text-3xl'
      >
        Private Surf Lessons
      </h2>
      <p className='mb-2 text-center md:text-2xl'>1 Coach & 1 Guest</p>

      <div
        className='mb-3 flex flex-col items-center justify-center
          rounded-xl border border-solid border-slate-950
          p-3
        hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'
      >
        <LessonsMain images={privateLessonsImg}>
          <LessonsMain.Prices>
            <p className='mt-8 w-full text-2xl font-bold md:mt-0 md:text-center md:text-3xl'>
              🏄‍♀️ <span className='mt-2 block'> 1 Surf Lesson</span>
            </p>

            <p className='w-full text-lg font-bold md:text-center'>
              <span className='text-xl md:text-2xl'>2 hours: </span>
              350K IDR (USD 22)
            </p>
            <br />
            <p className='mt-2 w-full text-2xl font-bold md:text-center md:text-3xl'>
              🏄‍♀️ 🏄‍♀️ 🏄‍♀️ <span className='mt-2 block'> 3 Surf Lessons</span>
            </p>

            <p className='w-full text-lg font-bold md:text-center'>
              <span className='text-xl md:text-2xl'>3 * 2 hours: </span>
              1M IDR (USD 64)
            </p>
            <p className='my-2 w-full text-lg md:text-center'>
              The 3 sessions can be splitted as you wish, but must be completed
              within 1 month.
            </p>
          </LessonsMain.Prices>
        </LessonsMain>
        <br />
        <LessonsDetails />
      </div>
    </section>
  )
}

export default SurfLessons

SurfLessons.Layout = LessonsLayout

export async function getStaticProps() {
  const privateLessonsImgPromises = privateLessonsImages.map(async (image) => {
    const src = getImageUrl(image.image)
    const blurDataUrl = await getBase64ImageUrl(image.image)
    return {
      src,
      blurDataUrl,
      id: image.id,
      alt: image.alt,
    }
  })

  const privateLessonsImg = await Promise.all(privateLessonsImgPromises)

  return {
    props: {
      privateLessonsImg,
    },
  }
}
