import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { CldVideoPlayer } from 'next-cloudinary'
import LessonAdvanced from '../../../public/images/lessons/surf-lesson-advanced.jpg'
import Teach10 from '../../../public/images/lessons/teach_10.jpg'

const SurfLessons = () => {
  const meta = {
    title: 'Aquaman Bali | Surf School | Surf Lessons',
    description: 'Aquaman Bali | Discover Our Surf Lessons Packages',
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
        id='surf-lessons'
        className='flex scroll-mt-20 flex-col items-center justify-center'
      >
        <h2 className='text-center text-4xl font-bold text-slate-900 dark:text-white'>
          Surf lessons
        </h2>
        <h3 className='mt-2 text-center text-2xl text-slate-900 dark:text-gray-200'>
          Enjoy private & group surf lessons
        </h3>
        <h4 className='text-center text-xl text-slate-900 dark:text-gray-200'>
          in Canggu & during your{' '}
          <span>
            <Link
              href='/surf-trips'
              className='text-slate-900 underline  underline-offset-4 dark:text-gray-200'
            >
              Surf Trips
            </Link>
          </span>
        </h4>

        <hr className='mx-5 my-5 bg-slate-950' />

        <CldVideoPlayer
          id='rendy-teach-video-01'
          width='1920'
          height='1080'
          src='RendyTeachVideo01'
          colors={{ accent: '#38bdf8', base: '#fbbf24', text: '#fbbf24' }}
          autoPlay='always'
          loop={true}
          className='rounded-md border-0 shadow-2xl'
        />

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='private' className='mb-2'>
          <h3 className='mb-2 text-center text-2xl font-bold text-slate-900  dark:text-white'>
            Private Surf Lessons
          </h3>
          <p className='text-center'>1 Coach & 1 Guest</p>

          <div className='mx-2 mb-3 flex flex-col items-center justify-center rounded-xl border border-solid border-slate-950 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
            <div className='mb-5 h-56'>
              <Image
                src={LessonAdvanced}
                alt='lesson-private'
                className='h-full rounded-lg object-cover shadow-2xl'
              />
            </div>

            <p className='my-2 w-full text-2xl font-bold'>1 Surf Lesson</p>
            <p className='w-full text-lg font-bold'>
              2 hours: 400K IDR (USD 28)
            </p>
            <br />
            <p className='my-2 w-full text-2xl font-bold'>5 Surf Lessons</p>
            <p className='w-full text-lg font-bold'>
              5 * 2 hours: 1.25M IDR (USD 120)
            </p>
            <p className='text-md my-2 w-full'>
              The 5 sessions can be splitted as you wish.
            </p>
            <br />
            <p className='self-start font-bold'>What is included?</p>
            <ul className='mx-5'>
              <li className='list-disc'>
                <span className='block font-bold'>All equipment needed: </span>
                Top-quality board, leash, surfing lycra and face sunscreen/zink
              </li>
              <li className='list-disc'>Recovery water</li>
              <li className='list-disc'>Shower</li>
            </ul>

            <br />

            <p className='w-full self-start font-bold'>Options</p>
            <ul className='w-full'>
              <li className='mx-5 list-disc'>
                Photos & Videos of your session
              </li>
              <li className='mx-5 list-disc'>Video analysis</li>
            </ul>

            <br />
            <div className='mx-auto flex flex-col items-center'>
              <a
                className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
                href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
              >
                Book now
              </a>
            </div>
          </div>
        </section>

        <hr className='mx-5 bg-slate-950 dark:bg-slate-200' />

        <section id='group' className='my-2'>
          <h3 className='mb-2 text-center text-2xl font-bold text-slate-900  dark:text-white'>
            Semi Private Surf Lessons
          </h3>
          <p className='text-center'>1 Coach & 2 Guests</p>

          <div className='mx-2 mb-3 flex flex-col items-center justify-center rounded-xl border border-solid border-slate-950 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
            <div className='mb-5 h-56'>
              <Image
                src={Teach10}
                alt='lesson-group'
                className='h-full rounded-lg object-cover shadow-2xl'
              />
            </div>

            <p className='my-2 w-full text-2xl font-bold'>1 Surf Lesson</p>
            <p className='w-full text-lg font-bold'>
              2 hours: 750K IDR (USD 52) Total for 2 Guests
            </p>
            <br />
            <p className='my-2 w-full text-2xl font-bold'>5 Surf Lessons</p>
            <p className='w-full text-lg font-bold'>
              5 * 2 hours: 1.75M IDR (USD 120) Total for 2 Guests
            </p>
            <p className='text-md my-2 w-full'>
              The 5 sessions can be splitted as you wish.
            </p>
            <br />
            <p className='self-start font-bold'>What is included?</p>
            <ul className='mx-5'>
              <li className='list-disc'>
                <span className='block font-bold'>All equipment needed: </span>
                Top-quality board, leash, surfing lycra and face sunscreen/zink
              </li>
              <li className='list-disc'>Recovery water</li>
              <li className='list-disc'>Shower</li>
            </ul>

            <br />

            <p className='w-full self-start font-bold'>Options</p>
            <ul className='w-full'>
              <li className='mx-5 list-disc'>
                Photos & Videos of your session
              </li>
              <li className='mx-5 list-disc'>Video analysis</li>
            </ul>

            <br />
            <div className='mx-auto flex flex-col items-center'>
              <a
                className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
                href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
              >
                Book now
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default SurfLessons
