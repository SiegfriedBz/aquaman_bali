import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { CldVideoPlayer } from 'next-cloudinary'
import Carousel from '@/components/carousel'
import styles from '../../components/carousel.module.css'
import LessonBeginner from '../../../public/images/lessons/surf-lesson-beginner.jpg'
import LessonIntermediate from '../../../public/images/lessons/surf-lesson-intermediate.jpg'
import LessonAdvanced from '../../../public/images/lessons/surf-lesson-advanced.jpg'

import Teach01 from '../../../public/images/lessons/teach_01.JPG'
import Teach02 from '../../../public/images/lessons/teach_02.JPG'
import Teach03 from '../../../public/images/lessons/teach_03.JPG'
import Teach04 from '../../../public/images/lessons/teach_04.JPG'
import Teach05 from '../../../public/images/lessons/teach_05.JPG'
import Teach06 from '../../../public/images/lessons/teach_06.JPG'
import Teach07 from '../../../public/images/lessons/teach_07.JPG'
import Teach08 from '../../../public/images/lessons/teach_08.JPG'
import Teach09 from '../../../public/images/lessons/teach_09.JPG'
import Teach10 from '../../../public/images/lessons/teach_10.JPG'

const TEACH_IMAGES = [
  Teach01,
  Teach02,
  Teach03,
  Teach04,
  Teach05,
  Teach06,
  Teach07,
  Teach08,
  Teach09,
  Teach10,
]

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
        className='flex scroll-mt-20 flex-col items-center justify-center py-5 dark:bg-slate-900 dark:text-gray-200'
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

        <Carousel>
          {TEACH_IMAGES.map((src, i) => {
            return (
              <div key={i} className={`${styles.embla__slide} h-52`}>
                <Image
                  src={src}
                  alt='rendy'
                  className='h-full rounded-lg object-cover shadow-2xl'
                />
              </div>
            )
          })}
        </Carousel>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='beginner' className='my-2'>
          <h3 className='mb-2 text-center text-2xl font-bold text-slate-900  dark:text-white'>
            Beginner
          </h3>
          <p className='text-center'>Level 1: Never surfed before</p>

          <div className='mx-2 mb-3 flex flex-col items-start justify-center rounded-xl border border-solid border-slate-950 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
            <div className='mb-5 h-56'>
              <Image
                src={Teach10}
                alt='lesson-beginner'
                className='h-full rounded-lg object-cover shadow-2xl'
              />
            </div>
            <p className='text-justify'>
              On your very first lesson you will be given an introduction on the
              beach about the surfboard, safety in the water, how to paddle,
              balance, stand up and surf the wave.
            </p>
            <br />
            <p className='text-justify'>
              <span className='font-bold'>Private</span> total of{' '}
              <span className='font-bold'>2 hours</span> surfing lesson with a{' '}
              <span className='font-bold'>professional instructor</span>{' '}
              including 30 minutes of detailed surf basics, theory and safety on
              the beach before jumping into the water to catch and surf your
              first waves.
            </p>
            <br />
            <p className='self-start'>What is included?</p>
            <ul className='mx-5'>
              <li className='list-disc'>
                <span className='font-bold'>All equipment needed: </span>
                premium custom made beginner soft board with soft fins, leash,
                rash guard and face sunscreen/zink
              </li>
              <li className='list-disc'>Recovery water</li>
              <li className='list-disc'>Shower</li>
            </ul>

            <br />

            <p>Options</p>
            <ul className='mx-5'>
              <li className='list-disc'>Photos & Videos of your session</li>
              <li className='list-disc'>Video analysis</li>
            </ul>

            <br />
            <div className='mx-auto flex flex-col items-center'>
              <p className='font-bold'>2 hours: 350k IDR</p>
              <p className='font-bold'>Package 3 * 2 hours: 1.1M IDR</p>

              <a
                className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
                href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
              >
                Book now
              </a>
            </div>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='intermediate' className='my-2'>
          <h3 className='mb-2 text-center text-2xl font-bold text-slate-900  dark:text-white'>
            Intermediate
          </h3>
          <p className='text-center'>Level 2: Already taken lessons before</p>

          <div className='mx-2 mb-3 flex flex-col items-start justify-center rounded-xl border border-solid border-slate-950 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
            <div className='mb-5 h-56'>
              <Image
                src={LessonIntermediate}
                alt='lesson-intermediate'
                className='h-full rounded-lg object-cover shadow-2xl'
              />
            </div>

            <p className='text-justify'>
              Level 2: Already taken lessons before Beginner/ Intermediate You
              have already taken one or more surf lessons before and need help
              to improve your surfing?
            </p>
            <br />
            <p className='text-justify'>
              If you don&apos;t need the basic and theory part, we can jump
              straight into the water to surf and enjoy more time in the water.
            </p>
            <br />
            <p className='text-justify'>
              <span className='font-bold'>Private</span> total of{' '}
              <span className='font-bold'>2 hours</span> surfing lesson with a{' '}
              <span className='font-bold'>professional instructor.</span> You
              will get help with wave selection and catching waves and tips on
              your body position.
            </p>
            <br />
            <p className='self-start'>What is included?</p>
            <ul className='mx-5'>
              <li className='list-disc'>
                <span className='font-bold'>All equipment needed: </span>
                premium custom made beginner soft board with soft fins, leash,
                rash guard and face sunscreen/zink
              </li>
              <li className='list-disc'>Recovery water</li>
              <li className='list-disc'>Shower</li>
            </ul>

            <br />

            <p>Options</p>
            <ul className='mx-5'>
              <li className='list-disc'>Photos & Videos of your session</li>
              <li className='list-disc'>Video analysis</li>
            </ul>

            <br />
            <div className='mx-auto flex flex-col items-center'>
              <p className='font-bold'>2 hours: 350k IDR</p>
              <p className='font-bold'>Package 3 * 2 hours: 1.1M IDR</p>

              <a
                className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
                href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
              >
                Book now
              </a>
            </div>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='advanced' className='my-2'>
          <h3 className='mb-2 text-center text-2xl font-bold text-slate-900  dark:text-white'>
            Advanced
          </h3>
          <p className='text-center'>Level 3: Can surf and wants to improve</p>

          <div className='mx-2 mb-3 flex flex-col items-start justify-center rounded-xl border border-solid border-slate-950 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
            <div className='mb-5 h-56'>
              <Image
                src={LessonAdvanced}
                alt='lesson-advanced'
                className='h-full rounded-lg object-cover shadow-2xl'
              />
            </div>
            <p className='text-justify'>
              You are able to catch white water or green waves already and want
              to improve your surfing?
            </p>
            <br />
            <p className='text-justify'>
              <span className='font-bold'>Private</span> total of{' '}
              <span className='font-bold'>2 hours</span> surfing lesson with a{' '}
              <span className='font-bold'>professional instructor.</span> You
              will get help with wave selection and catching green waves and
              tips on your body position and surf maneuvers.
            </p>
            <br />
            <p className='text-justify'>
              It is highly recommended to add a video analysis option to your
              lesson to see how you are doing and your mistakes and let your
              instructor correct them afterwards.
            </p>
            <br />
            <p className='self-start'>What is included?</p>
            <ul className='mx-5'>
              <li className='list-disc'>
                <span className='font-bold'>All equipment needed: </span>
                premium custom made beginner soft board with soft fins, leash,
                rash guard and face sunscreen/zink
              </li>
              <li className='list-disc'>Recovery water</li>
              <li className='list-disc'>Shower</li>
            </ul>

            <br />

            <p>Options</p>
            <ul className='mx-5'>
              <li className='list-disc'>Photos & Videos of your session</li>
              <li className='list-disc'>Video analysis</li>
            </ul>

            <br />
            <div className='mx-auto flex flex-col items-center'>
              <p className='font-bold'>2 hours: 350k IDR</p>
              <p className='font-bold'>Package 3 * 2 hours: 1.1M IDR</p>

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
