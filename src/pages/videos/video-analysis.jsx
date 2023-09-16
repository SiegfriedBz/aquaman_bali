import PhotoVideoLayout from '@/components/layouts/photoVideoLayout'
import Image from 'next/image'
import videoAnalysis from '../../../public/images/photo_video/video-analysis.jpg'

const VideoAnalysis = () => {
  return (
    <section
      id='video-analysis'
      className='flex scroll-mt-20 flex-col items-center justify-center'
    >
      <h3 className='mb-2 text-center text-2xl font-bold text-slate-900  dark:text-white'>
        Video Analysis
      </h3>

      <div className='mx-2 mb-3 flex flex-col items-start justify-center rounded-xl border border-solid border-slate-950 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
        <Image
          src={videoAnalysis}
          width={325}
          height={325}
          alt='lesson-beginner'
          className='mb-5 rounded-lg drop-shadow-xl'
          quality={100}
        />

        <p className='self-start font-bold dark:text-white'>Who is it for?</p>
        <p className='text-justify'>
          Seeing yourself surf on videos and receive profound feedback what you
          are already good at or where still is room for improvement is the best
          way to enhance your surfing. Especially for advanced beginner,
          intermediate and advanced surfer video analysis can have a huge impact
          on your surfing.
        </p>
        <br />

        <p className='self-start font-bold dark:text-white'>
          How does it work?{' '}
        </p>
        <p className='text-justify'>
          The surf session (max 2 hours) will be filmed with high quality
          equipment. After your surf session (with or without surf
          instructor/guide), we will look at the footage and analyse them with
          you. That includes evaluation of your current surf situation,
          detailled explanation of the right surf technique and how you can
          correct mistakes. Futhermore you will receive training tips to improve
          your surfing and what you should work on.
        </p>
        <br />
        <p className='text-justify'>
          You will be given the files via AirDrop (iPhone) or they can be
          uploaded on WeTransfer for you to download on the same day
        </p>

        <a
          className='mx-auto my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
          href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
          target='_blank'
        >
          Book now
        </a>
      </div>
    </section>
  )
}

export default VideoAnalysis

VideoAnalysis.Layout = PhotoVideoLayout
