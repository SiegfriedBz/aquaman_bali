import Link from 'next/link'
import PhotoVideoLayout from '@/components/layouts/photoVideoLayout'
import { waterPhoto } from '@/data/videoPageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'
import { VideosPageMain } from '@/components/VideosPageMain'
import CustomButton from '@/components/CustomButton'

const WaterDrone = ({ waterPhotoImg }) => {
  return (
    <section
      id='water-drone'
      className='mb-2 scroll-mt-[14rem] md:scroll-mt-[21rem]'
    >
      <h2
        className='mb-1 
            text-center text-2xl font-bold
          text-slate-900 dark:text-stone-100 md:text-3xl'
      >
        Water & Drone
      </h2>

      <p className='mb-2 text-center'>
        <Link
          href='/gallery'
          className='underline underline-offset-4 md:text-xl'
        >
          Check our Photos & Videos
        </Link>
      </p>

      <div className='mx-2 mb-3 flex flex-col items-center justify-center rounded-xl border border-solid border-slate-900 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
        <VideosPageMain image={waterPhotoImg}>
          <VideosPageMain.Details>
            <p className='self-start font-bold dark:text-stone-100'>
              Who is it for?
            </p>
            <p className='text-justify'>
              If you want extraordinary shots of your surfing, water photography
              or drone shots are for you. Please inquire if you plan a surf trip
              or want to surf a particular surf spot and want in the water or
              drone shots from above (photo/video).
            </p>
            <br />

            <p className='self-start font-bold dark:text-stone-100'>
              How does it work?{' '}
            </p>
            <p className='text-justify'>
              The photographer will be in the water taking close shots of you
              surfing with an underwater camera. Drone shots will be done from
              the beach.
            </p>
            <br />
            <p className='text-justify'>
              You will be given the files via AirDrop (iPhone) or they can be
              uploaded on WeTransfer for you to download on the same day.
            </p>

            <CustomButton />
          </VideosPageMain.Details>
        </VideosPageMain>
      </div>
    </section>
  )
}

export default WaterDrone

WaterDrone.Layout = PhotoVideoLayout

export async function getStaticProps() {
  const blurDataUrl = await getBase64ImageUrl(waterPhoto.image)

  const waterPhotoImg = {
    src: getImageUrl(waterPhoto.image),
    blurDataUrl: blurDataUrl,
    id: waterPhoto.id,
    alt: waterPhoto.alt,
  }

  return {
    props: {
      waterPhotoImg,
    },
  }
}
