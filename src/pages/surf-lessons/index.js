import Image from 'next/image'
import { motion } from 'framer-motion'
import LessonsLayout from '@/components/layouts/lessonsLayout'
import Carousel from '@/components/carousel'
import styles from '../../components/carousel.module.css'
import rendyTeach from '@/data/rendyTeach.json'
const [_, rendyTeach02, rendyTeach03] = rendyTeach
const privateLessonsImg = [rendyTeach02, rendyTeach03]

const SurfLessons = () => {
  return (
    <section id='private' className='mb-2'>
      <h3 className='mb-2 text-center text-2xl font-bold text-slate-900  dark:text-white'>
        Private Surf Lessons
      </h3>
      <p className='mb-2 text-center'>1 Coach & 1 Guest</p>

      <div className='mx-2 mb-3 flex flex-col items-center justify-center rounded-xl border border-solid border-slate-950 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
        <Carousel>
          {privateLessonsImg.map((image) => {
            return (
              <div
                key={image.id}
                className={`${styles.embla__slide} mb-2 mt-1 h-72`}
              >
                <Image
                  width='600'
                  height='600'
                  src={image.image}
                  alt={image.alt}
                  // loading='lazy'
                  className='h-full rounded-lg object-cover shadow-2xl'
                />
              </div>
            )
          })}
        </Carousel>

        <p className='my-2 w-full text-2xl font-bold'>1 Surf Lesson</p>
        <p className='w-full text-lg font-bold'>2 hours: 400K IDR (USD 26)</p>
        <br />
        <p className='my-2 w-full text-2xl font-bold'>3 Surf Lessons</p>
        <p className='w-full text-lg font-bold'>
          3 * 2 hours: 1.1M IDR (USD 72)
        </p>
        <p className='text-md my-2 w-full'>
          The 3 sessions can be splitted as you wish, but must be completed
          within 1 month.
        </p>

        <div className='mx-auto mb-5 mt-4 flex flex-col items-center'>
          <motion.a
            whileInView={{ scale: 1.1 }}
            viewport={{ margin: '-75px' }}
            className='w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
            href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
            target='_blank'
          >
            Book now
          </motion.a>
        </div>

        <div id='private-beginner'>
          <h2 className='self-start text-lg font-bold'>Beginner</h2>
          <p className='mb-2 text-justify'>
            On your very first lesson you will be given an introduction on the
            beach about the surfboard, safety in the water, how to paddle,
            balance, stand up and surf the wave.
          </p>
          <p className='text-justify'>
            Surfing lessonss with a professional instructor including 30 minutes
            of detailed surf basics, theory and safety on the beach before
            jumping into the water to catch and surf your first waves.
          </p>
        </div>

        <br />

        <div id='private-intermediate'>
          <h2 className='self-start text-lg font-bold'>Intermediate</h2>
          <p className='mb-2 text-justify'>
            You have already taken one or more surf lessons before and need help
            to improve your surfing? If you don&apos;t need the basic and theory
            part, we can jump straight into the water to surf and enjoy more
            time in the water.
          </p>
          <p className='text-justify'>
            Surfing lessonss in the water with a professional instructor. You
            will get help with wave selection and catching waves and tips on
            your body position.
          </p>
        </div>

        <br />

        <div id='private-advanced'>
          <h2 className='self-start text-lg font-bold'>Advanced</h2>
          <p className='mb-2 text-justify'>
            You are able to catch white water or green waves already and want to
            improve your surfing?
          </p>
          <p className='text-justify'>
            Surfing lessonss in the water with a professional instructor. You
            will get help with wave selection, catching green waves and tips on
            your body position and surf maneuvers. It is highly recommended to
            add a video analysis option to your lesson to see how you are doing
            and your mistakes and let your instructor correct them afterwards.
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

        <div className='mx-auto mb-4 mt-5 flex flex-col items-center'>
          <motion.a
            whileInView={{ scale: 1.1 }}
            viewport={{ margin: '-75px' }}
            className='w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
            href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
            target='_blank'
          >
            Book now
          </motion.a>
        </div>
      </div>
    </section>
  )
}

export default SurfLessons

SurfLessons.Layout = LessonsLayout
