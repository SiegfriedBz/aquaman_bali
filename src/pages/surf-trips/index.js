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
          enjoy an amazing surf trip with Rendy
        </h4>
        <h4 className='my-2 text-center text-xl font-bold text-slate-900 dark:text-gray-200'>
          Starting from 500K IDR
        </h4>
        <p className='mx-2 mt-4 text-center text-lg font-bold text-slate-900 dark:text-gray-200'>
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
          Bring your own surfboard or use one of our top-quality boards. We
          cater to all skill levels.
        </p>
        <p className='mx-2 mt-4 text-center text-lg font-bold text-slate-900 dark:text-gray-200'>
          🏨 Stay Your Way
        </p>
        <p className='mx-2 mb-2 text-center text-lg text-slate-900 dark:text-gray-200'>
          Choose your accommodation based on your budget and preferences. Book
          your own hotel or let us assist you in finding the perfect spot.
        </p>
        <p className='mx-2 mt-4 text-center text-lg font-bold text-slate-900 dark:text-gray-200'>
          🏄‍♂️ Flexible Departures
        </p>
        <p className='mx-2 mb-2 text-center text-lg text-slate-900 dark:text-gray-200'>
          Start your surf adventure right from Canggu or meet us at your chosen
          destination. We&apos;re here to make your journey as convenient as
          possible.
        </p>
        <a
          className='my-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
          href='https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0'
        >
          Book now
        </a>
      </div>

      {/* <hr className='mx-5 my-5 bg-slate-950' /> */}

      <div ref={mapContainerRef} className='scroll-mt-20 p-2 dark:bg-slate-900'>
        <LocationMap />
      </div>

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
          <div className='mt-2 flex flex-col items-center justify-center'>
            <p className='mb-2 px-2 text-justify'>
              I&#39;m baby distillery cliche messenger bag fingerstache franzen
              flannel celiac tousled tacos edison bulb. Whatever humblebrag food
              truck tbh, lyft edison bulb ennui blackbird spyplane knausgaard
              green juice venmo. Sriracha crucifix enamel pin, street art
              disrupt tousled vegan deep v truffaut pabst selvage helvetica.
              Ramps fanny pack pok pok, palo santo chicharrones poutine
              pinterest vice succulents.
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
          <div className='mt-2 flex flex-col items-center justify-center'>
            <p className='mb-2 px-2 text-justify'>
              I&#39;m baby distillery cliche messenger bag fingerstache franzen
              flannel celiac tousled tacos edison bulb. Whatever humblebrag food
              truck tbh, lyft edison bulb ennui blackbird spyplane knausgaard
              green juice venmo. Sriracha crucifix enamel pin, street art
              disrupt tousled vegan deep v truffaut pabst selvage helvetica.
              Ramps fanny pack pok pok, palo santo chicharrones poutine
              pinterest vice succulents.
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
          <div className='mt-2 flex flex-col items-center justify-center'>
            <p className='mb-2 px-2 text-justify'>
              I&#39;m baby distillery cliche messenger bag fingerstache franzen
              flannel celiac tousled tacos edison bulb. Whatever humblebrag food
              truck tbh, lyft edison bulb ennui blackbird spyplane knausgaard
              green juice venmo. Sriracha crucifix enamel pin, street art
              disrupt tousled vegan deep v truffaut pabst selvage helvetica.
              Ramps fanny pack pok pok, palo santo chicharrones poutine
              pinterest vice succulents.
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
          <div className='mt-2 flex flex-col items-center justify-center'>
            <p className='mb-2 px-2 text-justify'>
              I&#39;m baby distillery cliche messenger bag fingerstache franzen
              flannel celiac tousled tacos edison bulb. Whatever humblebrag food
              truck tbh, lyft edison bulb ennui blackbird spyplane knausgaard
              green juice venmo. Sriracha crucifix enamel pin, street art
              disrupt tousled vegan deep v truffaut pabst selvage helvetica.
              Ramps fanny pack pok pok, palo santo chicharrones poutine
              pinterest vice succulents.
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
          <div className='mt-2 flex flex-col items-center justify-center'>
            <p className='mb-2 px-2 text-justify'>
              I&#39;m baby distillery cliche messenger bag fingerstache franzen
              flannel celiac tousled tacos edison bulb. Whatever humblebrag food
              truck tbh, lyft edison bulb ennui blackbird spyplane knausgaard
              green juice venmo. Sriracha crucifix enamel pin, street art
              disrupt tousled vegan deep v truffaut pabst selvage helvetica.
              Ramps fanny pack pok pok, palo santo chicharrones poutine
              pinterest vice succulents.
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
          <div className='mt-2 flex flex-col items-center justify-center'>
            <p className='mb-2 px-2 text-justify'>
              I&#39;m baby distillery cliche messenger bag fingerstache franzen
              flannel celiac tousled tacos edison bulb. Whatever humblebrag food
              truck tbh, lyft edison bulb ennui blackbird spyplane knausgaard
              green juice venmo. Sriracha crucifix enamel pin, street art
              disrupt tousled vegan deep v truffaut pabst selvage helvetica.
              Ramps fanny pack pok pok, palo santo chicharrones poutine
              pinterest vice succulents.
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
          <div className='mt-2 flex flex-col items-center justify-center'>
            <p className='mb-2 px-2 text-justify'>
              I&#39;m baby distillery cliche messenger bag fingerstache franzen
              flannel celiac tousled tacos edison bulb. Whatever humblebrag food
              truck tbh, lyft edison bulb ennui blackbird spyplane knausgaard
              green juice venmo. Sriracha crucifix enamel pin, street art
              disrupt tousled vegan deep v truffaut pabst selvage helvetica.
              Ramps fanny pack pok pok, palo santo chicharrones poutine
              pinterest vice succulents.
            </p>
            <a
              className='mt-3 w-48 rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-4 text-center font-extrabold text-white outline-none ring-2 hover:ring-blue-500 active:rounded-3xl active:ring-blue-500'
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
