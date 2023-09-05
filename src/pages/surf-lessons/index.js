import React from 'react'
import Image from 'next/image'
import { CldVideoPlayer } from 'next-cloudinary'
import LessonBeginner from '../../../public/images/lessons/surf-lesson-beginner.jpg'
import LessonIntermediate from '../../../public/images/lessons/surf-lesson-intermediate.jpg'
import LessonAdvanced from '../../../public/images/lessons/surf-lesson-advanced.jpg'
import Link from 'next/link'

const SurfLessons = () => {
  return (
    <div
      id='surf-lessons'
      className='my-5 flex scroll-mt-20 flex-col items-center justify-center'
    >
      <h2 className='text-center text-4xl font-bold text-slate-900 dark:text-white'>
        Surf lessons
      </h2>
      <h3 className='mt-2 text-center text-2xl text-slate-900 dark:text-white'>
        Enjoy private & group surf lessons
      </h3>
      <h4 className='text-center text-xl text-slate-900 dark:text-white'>
        in Canggu & during your{' '}
        <span>
          <Link href='/surf-trips' className='underline underline-offset-4'>
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
        className='mx-2 my-3 rounded-md border-0 shadow-2xl'
      />

      <hr className='mx-5 my-5 bg-slate-950' />

      <section id='beginner' className='my-2'>
        <h3 className='mb-2 text-center text-2xl font-bold text-slate-900  dark:text-white'>
          Beginner
        </h3>
        <p className='text-center'>Level 1: Never surfed before</p>

        <div className='mx-2 mb-3 flex flex-col items-start justify-center rounded-xl border border-solid border-slate-950 p-3'>
          <Image
            src={LessonBeginner}
            width={325}
            height={325}
            alt='lesson-beginner'
            className='mb-5 rounded-lg drop-shadow-xl'
          />
          <p className='text-justify'>
            On your very first lesson you will be given an introduction on the
            beach about the surfboard, safety in the water, how to paddle,
            balance, stand up and surf the wave.
          </p>
          <br />
          <p className='text-justify'>
            <span className='font-bold'>Private</span> total of{' '}
            <span className='font-bold'>2 hours</span> surfing lesson with a{' '}
            <span className='font-bold'>professional instructor</span> including
            30 minutes of detailed surf basics, theory and safety on the beach
            before jumping into the water to catch and surf your first waves.
          </p>
          <br />
          <p className='self-start'>What is included?</p>
          <ul className='mx-5'>
            <li className='list-disc'>
              <span className='font-bold'>All equipment needed: </span>
              premium custom made beginner soft board with soft fins, leash,
              rash guard and face sunscreen/zink
            </li>
            <li className='list-disc'>Water</li>
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
              className='mb-3 mt-2 w-48 rounded-3xl bg-teal-500 px-8 py-4 text-center font-extrabold text-white outline-none hover:bg-teal-400 active:rounded-3xl active:bg-teal-300'
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
        <div className='mx-2 mb-3 flex flex-col items-start justify-center rounded-xl border border-solid border-slate-950 p-3'>
          <Image
            src={LessonIntermediate}
            width={325}
            height={325}
            alt='lesson-beginner'
            className='mb-5 rounded-lg drop-shadow-xl'
          />
          <p className='text-justify'>
            Level 2: Already taken lessons before Beginner/ Intermediate You
            have already taken one or more surf lessons before and need help to
            improve your surfing?
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
            <span className='font-bold'>professional instructor.</span> You will
            get help with wave selection and catching waves and tips on your
            body position.
          </p>
          <br />
          <p className='self-start'>What is included?</p>
          <ul className='mx-5'>
            <li className='list-disc'>
              <span className='font-bold'>All equipment needed: </span>
              premium custom made beginner soft board with soft fins, leash,
              rash guard and face sunscreen/zink
            </li>
            <li className='list-disc'>Water</li>
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
              className='mb-3 mt-2 w-48 rounded-3xl bg-teal-500 px-8 py-4 text-center font-extrabold text-white outline-none hover:bg-teal-400 active:rounded-3xl active:bg-teal-300'
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
        <div className='mx-2 mb-3 flex flex-col items-start justify-center rounded-xl border border-solid border-slate-950 p-3'>
          <Image
            src={LessonAdvanced}
            width={325}
            height={325}
            alt='lesson-beginner'
            className='mb-5 rounded-lg drop-shadow-xl'
          />
          <p className='text-justify'>
            You are able to catch white water or green waves already and want to
            improve your surfing?
          </p>
          <br />
          <p className='text-justify'>
            <span className='font-bold'>Private</span> total of{' '}
            <span className='font-bold'>2 hours</span> surfing lesson with a{' '}
            <span className='font-bold'>professional instructor.</span> You will
            get help with wave selection and catching green waves and tips on
            your body position and surf maneuvers.
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
            <li className='list-disc'>Water</li>
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
              className='mb-3 mt-2 w-48 rounded-3xl bg-teal-500 px-8 py-4 text-center font-extrabold text-white outline-none hover:bg-teal-400 active:rounded-3xl active:bg-teal-300'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
            >
              Book now
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SurfLessons
