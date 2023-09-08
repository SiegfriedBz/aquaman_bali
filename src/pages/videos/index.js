import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { CldVideoPlayer } from 'next-cloudinary'
import PhotoVideo from '../../../public/images/photo_video/photo-video.jpg'
import WaterPhoto from '../../../public/images/photo_video/water-photo.jpg'
import VideoAnalysis from '../../../public/images/photo_video/video-analysis.jpg'

const Videos = () => {
  const meta = {
    title: 'Aquaman Bali | Surf School | Photo & Video | Drone',
    description: 'Discover Our Photo & Video Packages',
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>

      <div
        id='videos'
        className='flex scroll-mt-20 flex-col items-center justify-center py-5 dark:bg-slate-900 dark:text-gray-200'
      >
        <h2 className='text-center text-3xl font-bold text-slate-900 dark:text-white'>
          Photo & Video | Drone
        </h2>
        <h3 className='mt-2 text-center text-2xl text-slate-900 dark:text-gray-200'>
          Get an amazing souvenir
        </h3>
        <h3 className='text-center text-2xl text-slate-900 dark:text-gray-200'>
          from your surf session
        </h3>
        <h4 className='text-center text-xl text-slate-900 dark:text-gray-200'>
          in Canggu & during your{' '}
          <span>
            <Link href='/surf-trips' className='underline underline-offset-4'>
              Surf Trips
            </Link>
          </span>
        </h4>

        <hr className='mx-5 my-5 bg-slate-950' />

        <CldVideoPlayer
          id='rendy-video-drone'
          width='1920'
          height='1080'
          src='RendyVideoDrone'
          colors={{ accent: '#38bdf8', base: '#fbbf24', text: '#fbbf24' }}
          autoPlay='always'
          loop={true}
          className='rounded-md border-0 shadow-2xl'
        />

        <hr className='mx-5 my-3 bg-slate-950' />

        <section id='photo-video' className='my-2'>
          <h2 className='text-center text-3xl font-bold text-slate-900 dark:text-white'>
            Photo & Video
          </h2>
          <div className='mx-2 mb-3 flex flex-col items-start justify-center rounded-xl border border-solid border-slate-950 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
            <Image
              src={PhotoVideo}
              width={325}
              height={325}
              alt='photos-videos-drone'
              className='mb-5 rounded-lg drop-shadow-xl'
            />

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
              How does it work?{' '}
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

            <a
              className='mx-auto my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
            >
              Book now
            </a>
          </div>
        </section>

        <hr className='mx-5 my-3 bg-slate-950' />

        <section
          id='water-shots-drone'
          className='flex scroll-mt-20 flex-col items-center justify-center'
        >
          <h2 className='text-center text-3xl font-bold text-slate-900 dark:text-white'>
            Water Photo & Video
          </h2>
          <h2 className='text-center text-3xl font-bold text-slate-900 dark:text-white'>
            Drone
          </h2>
          <div className='mx-2 mb-3 flex flex-col items-start justify-center rounded-xl border border-solid border-slate-950 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
            <Image
              src={WaterPhoto}
              width={325}
              height={325}
              alt='photos-videos-drone'
              className='mb-5 rounded-lg drop-shadow-xl'
            />

            <p className='self-start font-bold dark:text-white'>
              Who is it for?
            </p>
            <p className='text-justify'>
              If you want extraordinary shots of your surfing, water photography
              or drone shots are for you. Please inquire if you plan a surf trip
              or want to surf a particular surf spot and want in the water or
              drone shots from above (photo/video).
            </p>
            <br />

            <p className='self-start font-bold dark:text-white'>
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

            <a
              className='mx-auto my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
            >
              Book now
            </a>
          </div>
        </section>

        <hr className='mx-5 my-3 bg-slate-950' />

        <section
          id='video-analysis'
          className='flex scroll-mt-20 flex-col items-center justify-center'
        >
          <h2 className='text-center text-3xl font-bold text-slate-900 dark:text-white'>
            Video Analysis
          </h2>

          <div className='mx-2 mb-3 flex flex-col items-start justify-center rounded-xl border border-solid border-slate-950 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
            <Image
              src={VideoAnalysis}
              width={325}
              height={325}
              alt='lesson-beginner'
              className='mb-5 rounded-lg drop-shadow-xl'
            />

            <p className='self-start font-bold dark:text-white'>
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

            <p className='self-start font-bold dark:text-white'>
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

            <a
              className='mx-auto my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
            >
              Book now
            </a>
          </div>
        </section>
      </div>
    </>
  )
}

export default Videos
