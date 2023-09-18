import { useRef } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { useAppContext } from '@/context/appContext'
import { motion } from 'framer-motion'
import LocationMap from '@/components/LocationMap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { mapMarkers } from '@/data/mapMarkers'
import {
  containerVariants,
  textVariants,
  buttonVariants,
} from '@/utils/framerVariants'
import rendyTeach from '@/data/rendyTeach.json'
import surfTrips from '@/data/surfTrips.json'
const [_, cangguImg] = rendyTeach
const [medewiImg, lombokImg, nusaImg, seranganImg, uluwatuImg, balanganImg] =
  surfTrips

const meta = {
  title: 'Aquaman Bali | Surf School | Surf Trips',
  description:
    'Explore Exciting Surf Journeys in Indonesia with Aquaman Bali - Book Now!"',
}

const SurfTrips = () => {
  const mapContainerRef = useRef(null)
  const { setShowPopup, setPopup } = useAppContext()

  const handleSelectTrip = (spot) => {
    setShowPopup(true)
    setPopup(mapMarkers[spot])
    mapContainerRef?.current?.scrollIntoView()
  }

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta content={meta.description} name='description' />
        <meta property='og:description' content={meta.description} />
        <meta property='og:title' content={meta.title} />
      </Head>
      <motion.section
        variants={containerVariants}
        initial='hidden'
        animate='visible'
        id='surf-trips'
        className='flex scroll-mt-20 flex-col items-center justify-center'
      >
        <motion.h2
          variants={textVariants}
          className='text-center text-4xl font-bold text-slate-900 dark:text-white'
        >
          Surf trips
        </motion.h2>
        <motion.h3
          variants={textVariants}
          className='mt-2 text-center text-2xl text-slate-900 dark:text-gray-200'
        >
          From Lombok to Sumatra
        </motion.h3>
        <motion.h4
          variants={textVariants}
          className='text-center text-xl text-slate-900 dark:text-gray-200'
        >
          enjoy an amazing surf trip with Us
        </motion.h4>
        <motion.h4
          variants={textVariants}
          className='my-5 text-center text-xl font-bold text-slate-900 dark:text-gray-200'
        >
          Starting from 500K IDR
        </motion.h4>
        <p className='mx-2 mt-2 text-center text-lg font-bold text-slate-900 dark:text-gray-200'>
          🏄 Surf Bali 🌴
        </p>
        <p className='mx-2 mb-2 text-center text-lg text-slate-900 dark:text-gray-200'>
          Where Dreams Meet Waves!
        </p>
        <p className='mx-2 my-2 text-center text-lg text-slate-900 dark:text-gray-200'>
          Discover Bali&apos;s year-round surf paradise, with legendary waves
          for pros at Uluwatu and gentle breaks for beginners at Batu Bolong
          Beach.
        </p>
        <p className='mx-2 mt-4 text-center text-lg font-bold text-slate-900 dark:text-gray-200'>
          🏄‍♀️ Your Board or Ours
        </p>
        <p className='mx-2 mb-2 text-center text-lg text-slate-900 dark:text-gray-200'>
          Bring your own board or use one of our{' '}
          <span className='block'>top-quality boards.</span>
        </p>

        <p className='mx-2 mt-4 text-center text-lg font-bold text-slate-900 dark:text-gray-200'>
          🏨 Stay Your Way
        </p>
        <p className='mx-2 mb-2 text-center text-lg text-slate-900 dark:text-gray-200'>
          Book your own hotel or let us assist you in finding the perfect spot.
        </p>
        <p className='mx-2 mt-4 text-center text-lg font-bold text-slate-900 dark:text-gray-200'>
          🏄‍♂️ Flexible Departures
        </p>
        <p className='mx-2 text-center text-lg text-slate-900 dark:text-gray-200'>
          Start your surf adventure right from Canggu or meet us at your chosen
          destination.
        </p>
        <p className='mx-2 my-2 text-center text-lg text-slate-900 dark:text-gray-200'>
          We&apos;re here to make your journey as convenient as possible.
        </p>
        <motion.a
          variants={buttonVariants}
          whileInView='inView'
          viewport={{ margin: '-75px' }}
          className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
          href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
          target='_blank'
        >
          Book now
        </motion.a>
      </motion.section>

      <hr className='mx-5 my-5 bg-slate-950' />

      <div ref={mapContainerRef} className='scroll-mt-20 p-2 dark:bg-slate-900'>
        <LocationMap />
      </div>

      <hr className='mx-5 my-5 bg-slate-950' />

      <div className='px-2 dark:bg-slate-900 dark:text-gray-200'>
        <section id='canggu' className='scroll-mt-20'>
          <h2 className='text-3xl font-semibold'>Canggu, Bali</h2>
          <div
            className='my-2 flex items-center'
            onClick={() => handleSelectTrip('canggu')}
          >
            <FontAwesomeIcon
              icon={faEye}
              className='me-2 text-2xl font-bold text-amber-400 hover:text-amber-500'
            />
            <span className='text-lg hover:text-gray-300'>See on map</span>
          </div>
          <div className='my-3 h-52'>
            <Image
              width='600'
              height='600'
              src={cangguImg.image}
              alt={cangguImg.alt}
              // loading='lazy'
              className='h-full rounded-lg object-cover shadow-2xl'
            />
          </div>
          <div className='my-5 flex flex-col items-center justify-center'>
            <p className='mb-2 self-start px-2'>
              Canggu is <span className='font-bold'>our base</span>, at{' '}
              <span className='font-bold'>Boto Bolong Beach</span>.
            </p>

            <p className='mb-2 self-start px-2'>
              <span className='font-bold'>Wave Type: </span>Gentle and ideal for
              beginners
            </p>

            <ul className='mb-2 self-start px-2'>
              <span className='font-bold'>Main Surf Breaks:</span>
              <li className='ms-5 list-disc'>Boto Bolong</li>
              <li className='ms-5 list-disc'>Nelayan</li>
              <li className='ms-5 list-disc'>The Lawn</li>
              <li className='ms-5 list-disc'>Old&apos;s man</li>
            </ul>

            <p className='mb-2 px-2 text-justify'>
              <span className='font-bold'>Beach Conditions: </span>
              Safe with coral and sand beaches, suitable for all levels except
              during high surf conditions.
            </p>

            <ul className='mb-2 self-start px-2'>
              <span className='font-bold'>Best for: </span>
              <li className='ms-5 list-disc'>Beginner</li>
              <li className='ms-5 list-disc'>Intermediate</li>
              <li className='ms-5 list-disc'>Advanced</li>
            </ul>

            <p className='mb-2 px-2 text-justify'>
              Canggu is a paradise for beginners with its calm, manageable
              waves. It offers four main surf breaks and caters to surfers of
              all levels. However, during high surf conditions, the coral and
              sand beaches can become hazardous.
            </p>
            <motion.a
              variants={buttonVariants}
              whileInView='inView'
              viewport={{ margin: '-75px' }}
              className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
              target='_blank'
            >
              Book now
            </motion.a>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='medewi' className='scroll-mt-20'>
          <h2 className='text-3xl font-semibold'>Medewi, Bali</h2>{' '}
          <div
            className='my-2 flex items-center'
            onClick={() => handleSelectTrip('medewi')}
          >
            <FontAwesomeIcon
              icon={faEye}
              className='me-2 text-2xl font-bold text-amber-400 hover:text-amber-500'
            />
            <span className='text-lg hover:text-gray-300'>See on map</span>
          </div>
          <div className='my-3 h-52'>
            <Image
              width='600'
              height='600'
              src={medewiImg.image}
              alt={medewiImg.alt}
              // loading='lazy'
              className='h-full rounded-lg object-cover shadow-2xl'
            />
          </div>
          <div className='my-5 flex flex-col items-center justify-center'>
            <p className='mb-2 self-start px-2'>
              <span className='font-bold'>Wave Type: </span>Long left waves,
              around 100 meters
            </p>

            <p className='mb-2 px-2 text-justify'>
              <span className='font-bold'>Beach Conditions: </span>
              Rocky with sandy patches, suitable for all levels
            </p>

            <ul className='mb-2 self-start px-2'>
              <span className='font-bold'>Best for: </span>
              <li className='ms-5 list-disc'>Beginner</li>
              <li className='ms-5 list-disc'>Intermediate</li>
              <li className='ms-5 list-disc'>Advanced</li>
            </ul>

            <p className='mb-2 px-2 text-justify'>
              Medewi is renowned for its iconic long left waves, making it a
              must-visit surf spot in Bali. Despite the rocky beach conditions,
              it accommodates surfers of all levels, including beginners,
              intermediates, and those seeking expert advice. The journey from
              Canggu takes a maximum of 2 hours by car or motorbike.
            </p>
            <motion.a
              variants={buttonVariants}
              whileInView='inView'
              viewport={{ margin: '-75px' }}
              className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
              target='_blank'
            >
              Book now
            </motion.a>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='balangan' className='scroll-mt-20'>
          <h2 className='text-3xl font-semibold'>Balangan Beach, Bali</h2>
          <div
            className='my-2 flex items-center'
            onClick={() => handleSelectTrip('balangan')}
          >
            <FontAwesomeIcon
              icon={faEye}
              className='me-2 text-2xl font-bold text-amber-400 hover:text-amber-500'
            />
            <span className='text-lg hover:text-gray-300'>See on map</span>
          </div>
          <div className='my-3 h-52'>
            <Image
              width='600'
              height='600'
              src={balanganImg.image}
              alt={balanganImg.alt}
              // loading='lazy'
              className='h-full rounded-lg object-cover shadow-2xl'
            />
          </div>
          <div className='my-5 flex flex-col items-center justify-center'>
            <p className='mb-2 self-start px-2'>
              <span className='font-bold'>Wave Type: </span>Big and powerful
              left waves
            </p>

            <p className='mb-2 self-start px-2'>
              <span className='font-bold'>Beach Conditions: </span>
              Pristine coral reefs
            </p>

            <ul className='mb-2 self-start px-2'>
              <span className='font-bold'>Best for: </span>
              <li className='ms-5 list-disc'>Intermediate</li>
              <li className='ms-5 list-disc'>Advanced</li>
            </ul>

            <p className='mb-2 px-2 text-justify'>
              Balangan Beach boasts some of the best waves in Bali, making it a
              favorite for intermediate surfers. However, it&apos;s not
              recommended for beginners due to sharp coral and large waves. The
              journey from Canggu to Balangan takes approximately 1.5 hour,
              depending on traffic.
            </p>
            <motion.a
              variants={buttonVariants}
              whileInView='inView'
              viewport={{ margin: '-75px' }}
              className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
              target='_blank'
            >
              Book now
            </motion.a>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='uluwatu' className='scroll-mt-20'>
          <h2 className='text-3xl font-semibold'>Uluwatu, Bali</h2>{' '}
          <div
            className='my-2 flex items-center'
            onClick={() => handleSelectTrip('uluwatu')}
          >
            <FontAwesomeIcon
              icon={faEye}
              className='me-2 text-2xl font-bold text-amber-400 hover:text-amber-500'
            />
            <span className='text-lg hover:text-gray-300'>See on map</span>
          </div>
          <div className='my-3 h-52'>
            <Image
              width='600'
              height='600'
              src={uluwatuImg.image}
              alt={uluwatuImg.alt}
              // loading='lazy'
              className='h-full rounded-lg object-cover shadow-2xl'
            />
          </div>
          <div className='my-5 flex flex-col items-center justify-center'>
            <p className='mb-2 self-start px-2'>
              <span className='font-bold'>Wave Type: </span>Challenging and
              prestigious
            </p>

            <p className='mb-2 px-2 text-justify'>
              <span className='font-bold'>Beach Conditions: </span>
              Sharp coral and strong waves, not suitable for beginners
            </p>

            <ul className='mb-2 self-start px-2'>
              Several famous surfing spots close from Uluwatu:
              <li className='ms-5 list-disc'>Padang Padang </li>
              <li className='ms-5 list-disc'>Bingin Beach </li>
              <li className='ms-5 list-disc'>Dreamland Beach</li>
              <li className='ms-5 list-disc'>Balangan Beach </li>
            </ul>

            <ul className='mb-2 self-start px-2'>
              <span className='font-bold'>Best for: </span>
              <li className='ms-5 list-disc'>Intermediate</li>
              <li className='ms-5 list-disc'>Advanced</li>
            </ul>

            <p className='mb-2 px-2 text-justify'>
              Uluwatu is a haven for experienced surfers, known for its big and
              challenging waves. This spot has even hosted prestigious
              competitions. However, it&apos;s not recommended for beginners due
              to the sharp coral and strong waves. Several famous surf spots are
              nearby, including Padang Padang, Bingin Beach, Dreamland Beach,
              and Balangan Beach. The journey from Canggu can take up to 1.5
              hours.
            </p>
            <motion.a
              variants={buttonVariants}
              whileInView='inView'
              viewport={{ margin: '-75px' }}
              className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
              target='_blank'
            >
              Book now
            </motion.a>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='serangan' className='scroll-mt-20'>
          <h2 className='text-3xl font-semibold'>Serangan, Bali</h2>
          <div
            className='my-2 flex items-center'
            onClick={() => handleSelectTrip('serangan')}
          >
            <FontAwesomeIcon
              icon={faEye}
              className='me-2 text-2xl font-bold text-amber-400 hover:text-amber-500'
            />
            <span className='text-lg hover:text-gray-300'>See on map</span>
          </div>
          <div className='my-3 h-52'>
            <Image
              width='600'
              height='600'
              src={seranganImg.image}
              alt={seranganImg.alt}
              // loading='lazy'
              className='h-full rounded-lg object-cover shadow-2xl'
            />
          </div>
          <div className='my-5 flex flex-col items-center justify-center'>
            <p className='mb-2 self-start px-2'>
              <span className='font-bold'>Wave Type: </span>Challenging and
              prestigious
            </p>

            <p className='mb-2 self-start px-2'>
              <span className='font-bold'>Beach Conditions: </span>Sharp coral
              and strong waves, not suitable for beginners
            </p>

            <ul className='mb-2 self-start px-2'>
              <span className='font-bold'>Best for: </span>
              <li className='ms-5 list-disc'>Intermediate</li>
              <li className='ms-5 list-disc'>Advanced</li>
            </ul>

            <p className='mb-2 self-start px-2'>
              <span className='font-bold'>Access to waves: </span>Serangan
              requires a short boat ride (15 minutes) to reach the surf spot.
            </p>

            <p className='mb-2 px-2 text-justify'>
              Serangan is a challenging spot with sharp coral and strong waves,
              making it unsuitable for beginners. Intermediate surfers seeking
              an adventure will enjoy Serangan. The journey from Canggu takes
              about 1.5 hours, depending on traffic.
            </p>
            <motion.a
              variants={buttonVariants}
              whileInView='inView'
              viewport={{ margin: '-75px' }}
              className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
              target='_blank'
            >
              Book now
            </motion.a>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='nusa-lumboga' className='scroll-mt-20'>
          <h2 className='text-3xl font-semibold'>Nusa Lembongan</h2>
          <div
            className='my-2 flex items-center'
            onClick={() => handleSelectTrip('nusa')}
          >
            <FontAwesomeIcon
              icon={faEye}
              className='me-2 text-2xl font-bold text-amber-400 hover:text-amber-500'
            />
            <span className='text-lg hover:text-gray-300'>See on map</span>
          </div>
          <div className='my-3 h-52'>
            <Image
              width='600'
              height='600'
              src={nusaImg.image}
              alt={nusaImg.alt}
              // loading='lazy'
              className='h-full rounded-lg object-cover shadow-2xl'
            />
          </div>
          <div className='my-5 flex flex-col items-center justify-center'>
            <ul className='mb-2 self-start px-2'>
              Nusa Lambongan has several surfing spots close to each other such
              as:
              <li className='ms-5 list-disc'>Crane Shipwreck </li>
              <li className='ms-5 list-disc'>Isolation</li>
              <li className='ms-5 list-disc'>Play Ground</li>
              <li className='ms-5 list-disc'>Tamrin</li>
              <li className='ms-5 list-disc'>Ceningan</li>
            </ul>

            <ul className='mb-2 self-start px-2'>
              <span className='font-bold'>Best for: </span>
              <li className='ms-5 list-disc'>Beginner</li>
              <li className='ms-5 list-disc'>Intermediate</li>
              <li className='ms-5 list-disc'>Advanced</li>
            </ul>

            <p className='mb-2 px-2 text-justify'>
              Nusa Lembongan offers a variety of surf spots close to each other.
              It&apos;s an excellent destination for surfers of all levels. The
              journey from Sanur to Nusa Lembongan takes about an hour by fast
              boat. Nusa Penida, nearby, is also fantastic for surfing and
              relaxation.
            </p>
            <motion.a
              variants={buttonVariants}
              whileInView='inView'
              viewport={{ margin: '-75px' }}
              className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
              target='_blank'
            >
              Book now
            </motion.a>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='lombok' className='scroll-mt-20'>
          <h2 className='text-3xl font-semibold'>Lombok Island</h2>
          <div
            className='my-2 flex items-center'
            onClick={() => handleSelectTrip('lombok')}
          >
            <FontAwesomeIcon
              icon={faEye}
              className='me-2 text-2xl font-bold text-amber-400 hover:text-amber-500'
            />
            <span className='text-lg hover:text-gray-300'>See on map</span>
          </div>
          <div className='my-3 h-52'>
            <Image
              width='600'
              height='600'
              src={lombokImg.image}
              alt={lombokImg.alt}
              // loading='lazy'
              className='h-full rounded-lg object-cover shadow-2xl'
            />
          </div>
          <div className='my-5 flex flex-col items-center justify-center'>
            <ul className='mb-2 self-start px-2'>
              Lombok has several surfing spots close to each other such as:
              <li className='ms-5 list-disc'>Kuta Lombok</li>
              <li className='ms-5 list-disc'>Tanjung Aan</li>
              <li className='ms-5 list-disc'>Dom Dom</li>
              <li className='ms-5 list-disc'>Grupuk Inside</li>
              <li className='ms-5 list-disc'>Grupuk Outside</li>
            </ul>

            <ul className='mb-2 self-start px-2'>
              <span className='font-bold'>Best for: </span>
              <li className='ms-5 list-disc'>Beginner</li>
              <li className='ms-5 list-disc'>Intermediate</li>
              <li className='ms-5 list-disc'>Advanced</li>
            </ul>

            <p className='mb-2 px-2 text-justify'>
              Lombok offers an array of surf spots close to each other. To reach
              them, you must use a boat due to the considerable distance. The
              boat ride takes only 8-10 minutes to each spot. You can choose
              between a scenic ferry boat journey (4-5 hours) from Padang Bai or
              a quick flight (1 hour) from Ngurah Rai Airport to Lombok
              International Airport. Lombok is an excellent choice for surfers
              of all levels.
            </p>
            <motion.a
              variants={buttonVariants}
              whileInView='inView'
              viewport={{ margin: '-75px' }}
              className='mt-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
              target='_blank'
            >
              Book now
            </motion.a>
          </div>
        </section>
      </div>
    </>
  )
}

export default SurfTrips
