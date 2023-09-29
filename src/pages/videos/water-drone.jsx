import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import PhotoVideoLayout from '@/components/layouts/photoVideoLayout'
import { waterPhoto } from '@/data/videoPageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'
import { buttonVariants } from '@/utils/framerVariants'

const WaterDrone = ({ waterPhotoImg }) => {
  return (
    <section
      id='water-drone'
      className='flex scroll-mt-[14rem] flex-col items-center justify-center md:scroll-mt-[19rem]'
    >
      <h2 className='mb-1 text-center text-2xl font-bold text-slate-900 dark:text-white'>
        Water & Drone
      </h2>

      <p className='mb-2 text-center'>
        <Link href='/gallery' className='underline underline-offset-4'>
          Check our Photos & Videos
        </Link>
      </p>
      <div className='mx-2 mb-3 flex flex-col items-center justify-center rounded-xl border border-solid border-slate-950 p-3 hover:border-blue-400 dark:border-gray-200 dark:hover:border-blue-400'>
        <div className='mb-5 h-72'>
          <Image
            width='600'
            height='600'
            src={waterPhotoImg.src}
            alt={waterPhotoImg.alt}
            placeholder='blur'
            blurDataURL={waterPhotoImg.blurDataUrl}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
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
          variants={buttonVariants}
          whileInView='inView'
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

export async function getStaticProps() {
  const blurDataUrl = await getBase64ImageUrl(waterPhoto.image)

  const waterPhotoImg = {
    src: getImageUrl(waterPhoto.image),
    blurDataUrl: blurDataUrl,
    id: waterPhoto.id,
    alt: waterPhoto.alt,
  }

  return {
    props: {
      waterPhotoImg,
    },
  }
}
