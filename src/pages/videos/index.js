import Image from 'next/image'
import Link from 'next/link'
import PhotoVideoLayout from '@/components/layouts/photoVideoLayout'
import { photoVideo } from '@/data/videoPageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'
import CustomButton from '@/components/CustomButton'
import { VideosPageMain } from '@/components/VideosPageMain'

const Videos = ({ photoVideoImg }) => {
  return (
    <section
      id='photo-video'
      className='mb-2 scroll-mt-[14rem] md:scroll-mt-[21rem]'
    >
      <h2
        className='mb-1 
          text-center text-2xl font-bold
        text-slate-900 dark:text-white md:text-3xl'
      >
        Photo & Video
      </h2>

      <p className='mb-2 text-center'>
        <Link
          href='/gallery'
          className='underline underline-offset-4 md:text-xl'
        >
          Check our Photos & Videos
        </Link>
      </p>

      <div className='mx-2 mb-3 flex flex-col items-center justify-center rounded-xl border border-solid border-slate-950 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
        <VideosPageMain image={photoVideoImg}>
          <VideosPageMain.Details>
            <p className='self-start font-bold dark:text-white'>
              Who is it for?
            </p>
            <p className='text-justify'>
              Anyone who wants to keep a memory from their surf session. First
              time surfer, beginner, intermediate and advanced surfer -
              doesn&apos;t matter. It is nice to have a memory to take home and
              show family and friends. You decide if you want photos or videos
              taken of your surf session and/or on the beach!
            </p>
            <br />

            <p className='self-start font-bold dark:text-white'>
              How does it work?
            </p>
            <p className='text-justify'>
              Photos or videos will be taken during your surf session (max 2
              hours) with high quality equipment.
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

export default Videos

Videos.Layout = PhotoVideoLayout

export async function getStaticProps() {
  const blurDataUrl = await getBase64ImageUrl(photoVideo.image)

  const photoVideoImg = {
    src: getImageUrl(photoVideo.image),
    blurDataUrl: blurDataUrl,
    id: photoVideo.id,
    alt: photoVideo.alt,
  }

  return {
    props: {
      photoVideoImg,
    },
  }
}
