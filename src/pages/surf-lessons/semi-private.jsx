import LessonsLayout from '@/components/layouts/lessonsLayout'
import { groupLessonsImages } from '@/data/surfLessonsPageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'
import { LessonsPageMain } from '@/components/LessonsPageMain'
import { LessonsPageDetails } from '@/components/LessonsPageDetails'

const SemiPrivate = ({ groupLessonsImg }) => {
  return (
    <section
      id='semi-private'
      className='mb-2 scroll-mt-[11rem] md:scroll-mt-[16rem]'
    >
      <h2
        className='mb-2 text-center text-2xl font-bold 
          text-slate-900  dark:text-stone-100
            md:text-3xl'
      >
        Semi-Private Surf Lessons
      </h2>
      <p className='mb-2 text-center md:text-2xl'>1 Coach & 2 Guests</p>

      <div
        className='mb-3 flex flex-col items-center justify-center
          rounded-xl border border-solid border-slate-900
          p-3
        hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'
      >
        <LessonsPageMain images={groupLessonsImg}>
          <LessonsPageMain.Prices>
            <p className='mt-8 w-full text-2xl font-bold md:mt-0 md:text-center md:text-3xl'>
              🏄‍♀️ <span className='mt-2 block'> 1 Surf Lesson</span>
            </p>

            <p className='w-full text-lg font-bold md:text-center md:text-2xl'>
              Total for 2 Guests
            </p>
            <p className='w-full text-lg font-bold md:text-center'>
              <span className='text-xl md:text-2xl'>2 hours: </span>
              650K IDR (USD 42)
            </p>
            <br />
            <p className='mt-2 w-full text-2xl font-bold md:text-center md:text-3xl'>
              🏄‍♀️ 🏄‍♀️ 🏄‍♀️ <span className='mt-2 block'> 3 Surf Lessons</span>
            </p>

            <p className='w-full text-lg font-bold md:text-center md:text-2xl'>
              Total for 2 Guests
            </p>
            <p className='w-full text-lg font-bold md:text-center'>
              <span className='text-xl md:text-2xl'>3 * 2 hours: </span>
              1.9M IDR (USD 123)
            </p>
            <p className='my-2 w-full text-lg md:text-center'>
              The 3 sessions can be splitted as you wish, but must be completed
              within 1 month.
            </p>
          </LessonsPageMain.Prices>
        </LessonsPageMain>
        <br />
        <LessonsPageDetails />
      </div>
    </section>
  )
}

export default SemiPrivate

SemiPrivate.Layout = LessonsLayout

export async function getStaticProps() {
  const groupLessonsImgPromises = groupLessonsImages.map(async (image) => {
    const src = getImageUrl(image.image)
    const blurDataUrl = await getBase64ImageUrl(image.image)
    return {
      src,
      blurDataUrl,
      id: image.id,
      alt: image.alt,
    }
  })

  const groupLessonsImg = await Promise.all(groupLessonsImgPromises)

  return {
    props: {
      groupLessonsImg,
    },
  }
}
