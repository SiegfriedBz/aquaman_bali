import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PhotoVideoLayout from '@/components/layouts/photoVideoLayout'
import photoVideoDrone from '@/data/photoVideoDrone.json'
const [photoVideo, ,] = photoVideoDrone

const Videos = () => {
  return (
    <section id='photo-video'>
      <h3 className='mb-1 text-center text-2xl font-bold text-slate-900 dark:text-white'>
        Photo & Video
      </h3>

      <p className='mb-2 text-center'>
        <Link href='/gallery/videos' className='underline underline-offset-4'>
          Check our Videos
        </Link>
      </p>

      <div className='mx-2 mb-3 flex flex-col items-center justify-center rounded-xl border border-solid border-slate-950 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
        <div className='h-70 mb-5'>
          <Image
            width='600'
            height='600'
            src={photoVideo.image}
            alt={photoVideo.alt}
            loading='lazy'
            // sizes='100vw'
            className='h-full rounded-lg object-cover shadow-2xl'
          />
        </div>

        <p className='self-start font-bold dark:text-white'>Who is it for?</p>
        <p className='text-justify'>
          Anyone who wants to keep a memory from their surf session. First time
          surfer, beginner, intermediate and advanced surfer - doesn&apos;t
          matter. It is nice to have a memory to take home and show family and
          friends. You decide if you want photos or videos taken of your surf
          session and/or on the beach!
        </p>
        <br />

        <p className='self-start font-bold dark:text-white'>
          How does it work?{' '}
        </p>
        <p className='text-justify'>
          Photos or videos will be taken during your surf session (max 2 hours)
          with high quality equipment.
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

export default Videos

Videos.Layout = PhotoVideoLayout
