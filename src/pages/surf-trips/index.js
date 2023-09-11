import { useRef } from 'react'
import { useAppContext } from '@/context/appContext'
import Image from 'next/image'
import Head from 'next/head'
import LocationMap from '@/components/LocationMap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import { MARKERS } from '@/data/markers'
import CangguImage from '../../../public/images/lessons/girl_surf.jpg'
import MedewiImage from '../../../public/images/spots/medewi_surf.jpg'
import BalanganImage from '../../../public/images/spots/balangan_surf.jpg'
import UluwatuImage from '../../../public/images/spots/uluwatu_surf.jpg'
import SeranganImage from '../../../public/images/spots/serangan_surf.jpg'
import NusaImage from '../../../public/images/spots/nusa_lumboga_surf.jpg'
import LombokImage from '../../../public/images/spots/lombok_surf.jpg'

const SurfTrips = () => {
  const mapContainerRef = useRef(null)
  const { setShowPopup, setPopup } = useAppContext()

  const handleSelectTrip = (spot) => {
    setShowPopup(true)
    setPopup(MARKERS[spot])
    mapContainerRef?.current?.scrollIntoView()
  }

  const meta = {
    title: 'Aquaman Bali | Surf School | Surf Trips',
    description: 'Discover Our Surf Trips in Indonesia',
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
        id='surf-trips'
        className='flex scroll-mt-20 flex-col items-center justify-center'
      >
        <h2 className='text-center text-4xl font-bold text-slate-900 dark:text-white'>
          Surf trips
        </h2>
        <h3 className='mt-2 text-center text-2xl text-slate-900 dark:text-gray-200'>
          From Lombok to Sumatra
        </h3>
        <h4 className='text-center text-xl text-slate-900 dark:text-gray-200'>
          enjoy an amazing surf trip with Us
        </h4>
        <h4 className='my-5 text-center text-xl font-bold text-slate-900 dark:text-gray-200'>
          Starting from 500K IDR
        </h4>
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
        <p className='mx-2 text-center text-lg text-slate-900 dark:text-gray-200'>
          Bring your own board or use one of our{' '}
          <span className='block'>top-quality boards.</span>
        </p>
        <p className='mx-2 mb-2 text-center text-lg text-slate-900 dark:text-gray-200'>
          We cater to all skill levels.
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
        <p className='mx-2 mb-2 text-center text-lg text-slate-900 dark:text-gray-200'>
          We&apos;re here to make your journey as convenient as possible.
        </p>
        <a
          className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
          href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
        >
          Book now
        </a>
      </div>

      <hr className='mx-5 my-5 bg-slate-950' />

      <div ref={mapContainerRef} className='scroll-mt-20 p-2 dark:bg-slate-900'>
        <LocationMap />
      </div>

      <hr className='mx-5 my-5 bg-slate-950' />

      <div className='px-2 dark:bg-slate-900 dark:text-gray-200'>
        <section id='canggu' className='scroll-mt-20'>
          <h2 className='text-3xl font-semibold'>Canggu</h2>
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
          <div className='h-52'>
            <Image
              src={CangguImage}
              alt='canggu'
              className='h-full rounded-lg object-cover shadow-2xl'
            />
          </div>
          <div className='my-5 flex flex-col items-center justify-center'>
            <p className='mb-2 px-2 text-justify'>
              Canggu will be the best place for beginners to learn surfing,
              because the waves are really chill and not too big.
            </p>
            <ul className='self-start px-2'>
              At Canggu we have 4 main surf breaks
              <li className='ms-5 list-disc'>Boto Bolong</li>
              <li className='ms-5 list-disc'>Nelayan</li>
              <li className='ms-5 list-disc'>The Lawn</li>
              <li className='ms-5 list-disc'>Old&apos;s man</li>
            </ul>

            <p className='my-2 px-2 text-justify'>
              But Canggu is reaaly good for all levels,with the condition of the
              coral and sand beaches it becomes too dangerous.
            </p>

            <ul className='mb-3 self-start'>
              <li className='ms-5 list-disc'>🏄‍♀️ Beginner</li>
              <li className='ms-5 list-disc'>🏄‍♀️🏄‍♀️ Intermediate</li>
              <li className='ms-5 list-disc'>🏄‍♀️🏄‍♀️🏄‍♀️ Advanced</li>
            </ul>

            <a
              className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
            >
              Book now
            </a>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='medewi' className='scroll-mt-20'>
          <h2 className='text-3xl font-semibold'>Medewi</h2>{' '}
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
              src={MedewiImage}
              alt='medewi'
              className='h-full rounded-lg object-cover shadow-2xl'
            />
          </div>
          <div className='my-5 flex flex-col items-center justify-center'>
            <p className='mb-2 px-2 text-justify'>
              medewi is one of the most famous surf breaks in bali, with long
              left waves of around 100 meters riding.{' '}
            </p>

            <p className='my-2 px-2 text-justify'>
              with rocky beach conditions with sand but still good for all
              levels
            </p>

            <ul className='my-2 self-start'>
              <li className='ms-5 list-disc'>🏄‍♀️ Beginner</li>
              <li className='ms-5 list-disc'>🏄‍♀️🏄‍♀️ Intermediate</li>
              <li className='ms-5 list-disc'>🏄‍♀️🏄‍♀️🏄‍♀️ Advanced</li>
            </ul>

            <p className='mb-3 px-2 text-justify'>
              Driving from canggu will take max 2 hours with car/motorbike
            </p>

            <a
              className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
            >
              Book now
            </a>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='balangan' className='scroll-mt-20'>
          <h2 className='text-3xl font-semibold'>Balangan</h2>
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
          <div className='h-52'>
            <Image
              src={BalanganImage}
              alt='balangan'
              className='h-full rounded-lg object-cover shadow-2xl'
            />
          </div>
          <div className='my-5 flex flex-col items-center justify-center'>
            <p className='mb-2 px-2 text-justify'>
              Balangan Beach is one of the beautiful beaches in Bali with left
              waves and beautiful coral reefs, The long journey from Canggu to
              Balangan takes an hour and a half depending on traffic jams.
            </p>
            <p className='mb-2 px-2 text-justify'>
              Balangan is one of the best waves in Bali because it has very big
              and perfecr left waves.
            </p>

            <p className='my-2 px-2 text-justify'>
              Not recommended for beginners because sharp coral with big waves.
            </p>

            <ul className='mb-3 self-start'>
              <li className='ms-5 list-disc'>🏄‍♀️🏄‍♀️ Intermediate</li>
              <li className='ms-5 list-disc'>🏄‍♀️🏄‍♀️🏄‍♀️ Advanced</li>
            </ul>

            <a
              className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
            >
              Book now
            </a>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='uluwatu' className='scroll-mt-20'>
          <h2 className='text-3xl font-semibold'>Uluwatu</h2>{' '}
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
          <div className='h-52'>
            <Image
              src={UluwatuImage}
              alt='uluwatu'
              className='h-full rounded-lg object-cover shadow-2xl'
            />
          </div>
          <div className='my-5 flex flex-col items-center justify-center'>
            <p className='mb-2 px-2 text-justify'>
              Uluwatu is one of the best surfing spots in Bali because the waves
              are big and challenging, sometimes it is also used as a place for
              prestigious competitions.
            </p>
            <p className='mb-2 px-2 text-justify'>
              With sharp coral beach conditions and strong waves, this place is
              not recommended for people who are just learning to surf
            </p>

            <p className='my-2 px-2 text-justify'>
              But Canggu is reaaly good for all levels,with the condition of the
              coral and sand beaches it becomes too dangerous.
            </p>

            <ul className='mb-3 self-start'>
              <li className='ms-5 list-disc'>🏄‍♀️🏄‍♀️ Intermediate</li>
              <li className='ms-5 list-disc'>🏄‍♀️🏄‍♀️🏄‍♀️ Advanced</li>
            </ul>

            <p className='my-2 px-2 text-justify'>
              With several famous surfing spots which are also not far from
              Uluwatu, namely
            </p>
            <ul className='mb-3 self-start'>
              <li className='ms-5 list-disc'>Padang Padang </li>
              <li className='ms-5 list-disc'>Bingin Beach </li>
              <li className='ms-5 list-disc'>Dreamland Beach</li>
              <li className='ms-5 list-disc'>Balangan Beach </li>
            </ul>

            <p className='my-2 px-2 text-justify'>
              The journey time from Canggu can be up to 1.5 hours depending on
              traffic jams or what did use a car/ motorbike when going there.
            </p>

            <a
              className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
            >
              Book now
            </a>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='serangan' className='scroll-mt-20'>
          <h2 className='text-3xl font-semibold'>Serangan</h2>
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
          <div className='h-52'>
            <Image
              src={SeranganImage}
              alt='serangan'
              className='h-full w-full rounded-lg object-cover shadow-2xl'
            />
          </div>
          <div className='my-5 flex flex-col items-center justify-center'>
            <p className='mb-2 px-2 text-justify'>
              Serangan is one of the surfing spots in Bali where you have to use
              a boat to get to the surfing spot, with an extended boat ride of
              15 minutes we have arrived.
            </p>

            <p className='my-2 px-2 text-justify'>
              With sharp coral beach conditions and strong waves, this place is
              not recommended for beginners.
            </p>

            <ul className='mb-3 self-start'>
              <li className='ms-5 list-disc'>🏄‍♀️🏄‍♀️ Intermediate</li>
              <li className='ms-5 list-disc'>🏄‍♀️🏄‍♀️🏄‍♀️ Advanced</li>
            </ul>

            <p className='my-2 px-2 text-justify'>
              The journey time from Canggu can be up to 1.5 hours depending on
              traffic jams or what did use a car/ motorbike when going there.
            </p>

            <a
              className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
            >
              Book now
            </a>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='nusa-lumboga' className='scroll-mt-20'>
          <h2 className='text-3xl font-semibold'>Nusa Lumboga</h2>
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
          <div className='h-52'>
            <Image
              src={NusaImage}
              alt='nusa-lumboga'
              className='h-full rounded-lg object-cover shadow-2xl'
            />
          </div>
          <div className='my-5 flex flex-col items-center justify-center'>
            <p className='mb-2 px-2 text-justify'>
              Nusa Lembongan is outside the island of Bali, which is adjacent to
              the island of Nisa Penida, to get here we have to take a fast boat
              from Sanur.
            </p>

            <ul className='self-start px-2'>
              Nusa Lambongan has several surfing spots close to each other such
              as
              <li className='ms-5 list-disc'>Crane Shipwreck </li>
              <li className='ms-5 list-disc'>Isolation</li>
              <li className='ms-5 list-disc'>Play Ground</li>
              <li className='ms-5 list-disc'>Tamrin</li>
              <li className='ms-5 list-disc'>Ceningan</li>
            </ul>

            <ul className='mb-3 self-start'>
              Nusa lambongan is great for every surfers
              <li className='ms-5 list-disc'>🏄‍♀️ Beginner</li>
              <li className='ms-5 list-disc'>🏄‍♀️🏄‍♀️ Intermediate</li>
              <li className='ms-5 list-disc'>🏄‍♀️🏄‍♀️🏄‍♀️ Advanced</li>
            </ul>

            <p className='mb-2 px-2 text-justify'>
              To get to Nusa Penida we have to use a fast boat with a journey
              time of around 1 hour starting from Sanur to Nusa Lambongan, Nusa
              Penida is very good for surfing and holidays because there are
              many beautiful beaches and they are not too crowded.
            </p>

            <a
              className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
              href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
            >
              Book now
            </a>
          </div>
        </section>

        <hr className='mx-5 my-5 bg-slate-950' />

        <section id='lombok' className='scroll-mt-20 pb-5'>
          <h2 className='text-3xl font-semibold'>Lombok</h2>{' '}
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
          <div className='h-52'>
            <Image
              src={LombokImage}
              alt='lombok'
              className='h-full rounded-lg object-cover shadow-2xl'
            />
          </div>
          <div className='my-5 flex flex-col items-center justify-center'>
            <p className='my-2 px-2 text-justify'>
              Lombok surf trip is one of the furthest surf trips from Canggu, as
              boat or aiplane is required to get there.
            </p>

            <ul className='self-start px-2'>
              <li className='ms-5 list-disc'>
                Ferry boat
                <span className='block'>
                  4-5 hours boat trip from Padang Bai port to Lember port. From
                  there, 1 hour drive with a motorbike or car will get us to
                  Kuta, Lombok.
                </span>
              </li>
              <li className='ms-5 list-disc'>
                Airplane
                <span className='block'>
                  Very fast flight, only 1 hour from Ngurah Rai Airport to
                  Lombok International Airport.
                </span>
              </li>
            </ul>

            <ul className='my-3 self-start px-2'>
              Lombok has several surfing spots close to each other such as
              <li className='list-disc'>Kuta Lombok</li>
              <li className='list-disc'>Tanjung Aan </li>
              <li className='list-disc'>Dom Dom</li>
              <li className='list-disc'>Grupuk Inside </li>
              <li className='list-disc'>Grupuk Outside </li>
            </ul>

            <ul className='my-3 self-start px-2'>
              <li className='ms-5 list-disc'>🏄‍♀️ Beginner</li>
              <li className='ms-5 list-disc'>🏄‍♀️🏄‍♀️ Intermediate</li>
              <li className='ms-5 list-disc'>🏄‍♀️🏄‍♀️🏄‍♀️ Advanced</li>
            </ul>

            <p className='my-2 px-2 text-justify'>
              Every spot to surf MUST be reached by boat, because the distance
              is very far to swim. Getting to the line up by boat only takes
              8-10 minutes for every spot.
            </p>

            <a
              className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
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

export default SurfTrips
