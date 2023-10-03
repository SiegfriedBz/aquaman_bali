import Link from 'next/link'
import PhotoVideoLayout from '@/components/layouts/photoVideoLayout'
import { videoAnalysis } from '@/data/videoPageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'
import { VideosPageMain } from '@/components/VideosPageMain'
import CustomLink from '@/components/CustomLink'

const VideoAnalysis = ({ videoAnalysisImg }) => {
  return (
    <section id='video-analysis' className='scroll-mt-[15rem]'>
      <h2
        className='mb-1 
            text-center text-2xl font-bold
          text-slate-900 dark:text-stone-100 md:text-3xl'
      >
        Video Analysis
      </h2>

      <p className='mb-2 text-center'>
        <Link
          href='/gallery'
          className='underline underline-offset-4 md:text-xl'
        >
          Check our Photos & Videos
        </Link>
      </p>

      <div className='mb-3 flex flex-col items-center justify-center rounded-xl border border-solid border-slate-900 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
        <VideosPageMain image={videoAnalysisImg}>
          <VideosPageMain.Details>
            <p className='self-start font-bold dark:text-stone-100'>
              Who is it for?
            </p>
            <p className='text-justify'>
              Seeing yourself surf on videos and receive profound feedback what
              you are already good at or where still is room for improvement is
              the best way to enhance your surfing. Especially for advanced
              beginner, intermediate and advanced surfer video analysis can have
              a huge impact on your surfing.
            </p>
            <br />

            <p className='self-start font-bold dark:text-stone-100'>
              How does it work?{' '}
            </p>
            <p className='text-justify'>
              The surf session (max 2 hours) will be filmed with high quality
              equipment. After your surf session (with or without surf
              instructor/guide), we will look at the footage and analyse them
              with you. That includes evaluation of your current surf situation,
              detailled explanation of the right surf technique and how you can
              correct mistakes. Futhermore you will receive training tips to
              improve your surfing and what you should work on.
            </p>
            <br />
            <p className='text-justify'>
              You will be given the files via AirDrop (iPhone) or they can be
              uploaded on WeTransfer for you to download on the same day
            </p>

            <CustomLink />
          </VideosPageMain.Details>
        </VideosPageMain>
      </div>
    </section>
  )
}

export default VideoAnalysis

VideoAnalysis.Layout = PhotoVideoLayout

export async function getStaticProps() {
  const blurDataUrl = await getBase64ImageUrl(videoAnalysis.image)

  const videoAnalysisImg = {
    src: getImageUrl(videoAnalysis.image),
    blurDataUrl: blurDataUrl,
    id: videoAnalysis.id,
    alt: videoAnalysis.alt,
  }

  return {
    props: {
      videoAnalysisImg,
    },
  }
}
