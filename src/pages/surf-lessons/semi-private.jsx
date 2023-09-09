import Image from 'next/image'
import LessonsLayout from '@/components/layouts/lessonsLayout'
import teach04 from '../../../public/images/lessons/teach_04.jpg'

const SemiPrivate = () => {
  return (
    <section id='semi-private' className='mb-2'>
      <h3 className='mb-2 text-center text-2xl font-bold text-slate-900  dark:text-white'>
        Semi-Private Surf Lessons
      </h3>
      <p className='mb-2 text-center'>1 Coach & 2 Guests</p>

      <div className='mx-2 mb-3 flex flex-col items-center justify-center rounded-xl border border-solid border-slate-950 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
        <div className='mb-5 h-56'>
          <Image
            src={teach04}
            alt='lesson-group'
            className='h-full rounded-lg object-cover shadow-2xl'
          />
        </div>

        <p className='my-2 w-full text-2xl font-bold'>1 Surf Lesson</p>
        <p className='w-full text-lg font-bold'>Total for 2 Guests</p>
        <p className='w-full text-lg font-bold'>2 hours: 750K IDR (USD 48)</p>
        <br />
        <p className='my-2 w-full text-2xl font-bold'>3 Surf Lessons</p>
        <p className='w-full text-lg font-bold'>Total for 2 Guests</p>
        <p className='w-full text-lg font-bold'>
          3 * 2 hours: 2.1M IDR (USD 136)
        </p>
        <p className='text-md my-2 w-full'>
          The 3 sessions can be splitted as you wish, but must be completed
          within 1 month.
        </p>

        <br />

        <div id='semi-private--beginner'>
          <h2 className='self-start text-lg font-bold'>Beginner</h2>
          <p className='mb-2 text-justify'>
            On your very first lesson you will be given an introduction on the
            beach about the surfboard, safety in the water, how to paddle,
            balance, stand up and surf the wave.
          </p>
          <p className='text-justify'>
            Surfing lesson with a professional instructor including 30 minutes
            of detailed surf basics, theory and safety on the beach before
            jumping into the water to catch and surf your first waves.
          </p>
        </div>

        <br />

        <div id='semi-private--intermediate'>
          <h2 className='self-start text-lg font-bold'>Intermediate</h2>
          <p className='mb-2 text-justify'>
            You have already taken one or more surf lessons before and need help
            to improve your surfing? If you don&apos;t need the basic and theory
            part, we can jump straight into the water to surf and enjoy more
            time in the water.
          </p>
          <p className='text-justify'>
            Surfing lesson in the water with a professional instructor. You will
            get help with wave selection and catching waves and tips on your
            body position.
          </p>
        </div>

        <br />

        <div id='semi-private-advanced'>
          <h2 className='self-start text-lg font-bold'>Advanced</h2>
          <p className='mb-2 text-justify'>
            You are able to catch white water or green waves already and want to
            improve your surfing?
          </p>
          <p className='text-justify'>
            Surfing lesson in the water with a professional instructor. You will
            get help with wave selection, catching green waves and tips on your
            body position and surf maneuvers. It is highly recommended to add a
            video analysis option to your lesson to see how you are doing and
            your mistakes and let your instructor correct them afterwards.
          </p>
        </div>

        <br />

        <p className='self-start font-bold'>What is included?</p>
        <ul className='mx-5'>
          <li className='list-disc'>
            <span className='block font-bold'>All equipment needed: </span>
            We provide premium custom made beginner soft boards with soft fins,
            intermediate surf boards options, leash, rash guard and surf facial
            sunscreen/zink
          </li>
          <li className='list-disc'>Recovery water</li>
          <li className='list-disc'>Shower</li>
        </ul>

        <br />

        <p className='w-full self-start font-bold'>Options</p>
        <ul className='w-full'>
          <li className='mx-5 list-disc'>Photos & Videos of your session</li>
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
  )
}

export default SemiPrivate

SemiPrivate.Layout = LessonsLayout
