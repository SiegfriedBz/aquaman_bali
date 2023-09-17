import Image from 'next/image'
import { motion } from 'framer-motion'
import PhotoVideoLayout from '@/components/layouts/photoVideoLayout'
import photoVideoDrone from '@/data/photoVideoDrone.json'
const [, , waterPhoto] = photoVideoDrone

const WaterDrone = () => {
  return (
    <section
      id='water-shots-drone'
      className='flex scroll-mt-20 flex-col items-center justify-center'
    >
      <h2 className='mb-2 text-center text-2xl font-bold text-slate-900  dark:text-white'>
        Water & Drone
      </h2>
      <div className='mx-2 mb-3 flex flex-col items-center justify-center rounded-xl border border-solid border-slate-950 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
        <div className='h-70 mb-5'>
          <Image
            width='600'
            height='600'
            src={waterPhoto.image}
            alt={waterPhoto.alt}
            // loading='lazy'
            className='h-full rounded-lg object-cover shadow-2xl'
          />
        </div>

        <p className='self-start font-bold dark:text-white'>Who is it for?</p>
        <p className='text-justify'>
          If you want extraordinary shots of your surfing, water photography or
          drone shots are for you. Please inquire if you plan a surf trip or
          want to surf a particular surf spot and want in the water or drone
          shots from above (photo/video).
        </p>
        <br />

        <p className='self-start font-bold dark:text-white'>
          How does it work?{' '}
        </p>
        <p className='text-justify'>
          The photographer will be in the water taking close shots of you
          surfing with an underwater camera. Drone shots will be done from the
          beach.
        </p>
        <br />
        <p className='text-justify'>
          You will be given the files via AirDrop (iPhone) or they can be
          uploaded on WeTransfer for you to download on the same day.
        </p>

        <motion.a
          whileInView={{ scale: 1.1 }}
          viewport={{ margin: '-75px' }}
          className='mx-auto my-5 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
          href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
          target='_blank'
        >
          Book now
        </motion.a>
      </div>
    </section>
  )
}

export default WaterDrone

WaterDrone.Layout = PhotoVideoLayout
