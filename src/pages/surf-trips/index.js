import { useRef } from 'react'
import Image from 'next/image'
import Head from 'next/head'
import { useAppContext } from '@/context/appContext'
import { motion } from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import LocationMap from '@/components/LocationMap'
import { surfTripsPageImages } from '@/data/surfTripsPageImages'
import { getImageUrl, getBase64ImageUrl } from '@/utils/cloudinaryUtils'
import getMapMarkers from '@/utils/getMapMarkers'
import { containerVariants, textVariants } from '@/utils/framerVariants'
import CustomButton from '@/components/CustomButton'

const meta = {
  title: 'Aquaman Bali | Surf School | Surf Trips',
  description:
    'Explore Exciting Surf Journeys in Indonesia with Aquaman Bali - Book Now!"',
}

const SurfTrips = ({ surfTripImg, mapMarkers }) => {
  const [
    cangguImg,
    medewiImg,
    lombokImg,
    nusaImg,
    seranganImg,
    uluwatuImg,
    balanganImg,
  ] = surfTripImg
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

      <div className='w-full'>
        <SurfTripsHeader />

        <hr className='my-8 bg-slate-900' />

        <div
          ref={mapContainerRef}
          className='scroll-mt-[8rem] px-1 dark:bg-slate-900'
        >
          <LocationMap mapMarkers={mapMarkers} />
        </div>

        <hr className='my-8 bg-slate-900' />

        <div className='dark:bg-slate-900 dark:text-stone-100'>
          <Destination
            id='canggu'
            name='Canggu, Bali'
            image={cangguImg}
            handleSelectTrip={handleSelectTrip}
          >
            <Destination.TextTop>
              <p className='mb-5 self-start '>
                Canggu is <span className='font-bold'>our base</span>, at{' '}
                <span className='font-bold'>Boto Bolong Beach</span>.
              </p>

              <p className='mb-5 self-start '>
                <span className='font-bold'>Wave Type: </span>Gentle and ideal
                for beginners
              </p>

              <ul className='mb-5 w-full self-start '>
                <span className='font-bold'>Main Surf Breaks:</span>
                <li className='ms-5 list-disc'>Boto Bolong</li>
                <li className='ms-5 list-disc'>Nelayan</li>
                <li className='ms-5 list-disc'>The Lawn</li>
                <li className='ms-5 list-disc'>Old&apos;s man</li>
              </ul>

              <ul className='mb-5 self-start'>
                <span className='font-bold'>Best for: </span>
                <li className='ms-5 list-disc'>Beginner</li>
                <li className='ms-5 list-disc'>Intermediate</li>
                <li className='ms-5 list-disc'>Advanced</li>
              </ul>
            </Destination.TextTop>
            <Destination.TextBottom>
              <p className='mb-5 self-start text-justify'>
                <span className='font-bold'>Beach Conditions: </span>
                Safe with coral and sand beaches, suitable for all levels except
                during high surf conditions.
              </p>

              <p className='self-start text-justify'>
                Canggu is a paradise for beginners with its calm, manageable
                waves. It offers four main surf breaks and caters to surfers of
                all levels. However, during high surf conditions, the coral and
                sand beaches can become hazardous.
              </p>
              <div className='mb-10 flex w-full flex-col items-center md:mb-0 md:mt-4'>
                <CustomButton />
              </div>
            </Destination.TextBottom>
          </Destination>

          <hr className='my-8 bg-slate-900' />

          <Destination
            id='medewi'
            name='Medewi, Bali'
            image={medewiImg}
            handleSelectTrip={handleSelectTrip}
          >
            <Destination.TextTop>
              <p className='mb-5 self-start '>
                <span className='font-bold'>Wave Type: </span>Long left waves,
                around 100 meters
              </p>

              <ul className='mb-5 self-start '>
                <span className='font-bold'>Best for: </span>
                <li className='ms-5 list-disc'>Beginner</li>
                <li className='ms-5 list-disc'>Intermediate</li>
                <li className='ms-5 list-disc'>Advanced</li>
              </ul>
            </Destination.TextTop>
            <Destination.TextBottom>
              <p className='mb-5 self-start text-justify'>
                <span className='font-bold'>Beach Conditions: </span>
                Rocky with sandy patches, suitable for all levels
              </p>
              <p className='self-start text-justify'>
                Medewi is renowned for its iconic long left waves, making it a
                must-visit surf spot in Bali. Despite the rocky beach
                conditions, it accommodates surfers of all levels, including
                beginners, intermediates, and those seeking expert advice. The
                journey from Canggu takes a maximum of 2 hours by car or
                motorbike.
              </p>
              <div className='mb-10 flex w-full flex-col items-center md:mb-0 md:mt-4'>
                <CustomButton />
              </div>
            </Destination.TextBottom>
          </Destination>

          <hr className='my-8 bg-slate-900' />

          <Destination
            id='balangan'
            name='Balangan Beach, Bali'
            image={balanganImg}
            handleSelectTrip={handleSelectTrip}
          >
            <Destination.TextTop>
              <p className='mb-5 self-start '>
                <span className='font-bold'>Wave Type: </span>Big and powerful
                left waves
              </p>

              <ul className='mb-5 self-start '>
                <span className='font-bold'>Best for: </span>
                <li className='ms-5 list-disc'>Intermediate</li>
                <li className='ms-5 list-disc'>Advanced</li>
              </ul>
            </Destination.TextTop>
            <Destination.TextBottom>
              <p className='mb-5 self-start '>
                <span className='font-bold'>Beach Conditions: </span>
                Pristine coral reefs
              </p>
              <p className='self-start text-justify'>
                Balangan Beach boasts some of the best waves in Bali, making it
                a favorite for intermediate surfers. However, it&apos;s not
                recommended for beginners due to sharp coral and large waves.
                The journey from Canggu to Balangan takes approximately 1.5
                hour, depending on traffic.
              </p>
              <div className='mb-10 flex w-full flex-col items-center md:mb-0 md:mt-4'>
                <CustomButton />
              </div>
            </Destination.TextBottom>
          </Destination>

          <hr className='my-8 bg-slate-900' />

          <Destination
            id='uluwatu'
            name='Uluwatu, Bali'
            image={uluwatuImg}
            handleSelectTrip={handleSelectTrip}
          >
            <Destination.TextTop>
              <p className='mb-5 self-start '>
                <span className='font-bold'>Wave Type: </span>Challenging and
                prestigious
              </p>

              <ul className='mb-5 self-start '>
                Several famous surfing spots close from Uluwatu:
                <li className='ms-5 list-disc'>Padang Padang </li>
                <li className='ms-5 list-disc'>Bingin Beach </li>
                <li className='ms-5 list-disc'>Dreamland Beach</li>
                <li className='ms-5 list-disc'>Balangan Beach </li>
              </ul>

              <ul className='mb-5 self-start '>
                <span className='font-bold'>Best for: </span>
                <li className='ms-5 list-disc'>Intermediate</li>
                <li className='ms-5 list-disc'>Advanced</li>
              </ul>
            </Destination.TextTop>
            <Destination.TextBottom>
              <p className='mb-5 self-start text-justify'>
                <span className='font-bold'>Beach Conditions: </span>
                Sharp coral and strong waves, not suitable for beginners
              </p>

              <p className='self-start text-justify'>
                Uluwatu is a haven for experienced surfers, known for its big
                and challenging waves. This spot has even hosted prestigious
                competitions. However, it&apos;s not recommended for beginners
                due to the sharp coral and strong waves. Several famous surf
                spots are nearby, including Padang Padang, Bingin Beach,
                Dreamland Beach, and Balangan Beach. The journey from Canggu can
                take up to 1.5 hours.
              </p>
              <div className='mb-10 flex w-full flex-col items-center md:mb-0 md:mt-4'>
                <CustomButton />
              </div>
            </Destination.TextBottom>
          </Destination>

          <hr className='my-8 bg-slate-900' />

          <Destination
            id='serangan'
            name='Serangan, Bali'
            image={seranganImg}
            handleSelectTrip={handleSelectTrip}
          >
            <Destination.TextTop>
              <p className='mb-5 self-start '>
                <span className='font-bold'>Wave Type: </span>Challenging and
                prestigious
              </p>
              <ul className='mb-5 self-start '>
                <span className='font-bold'>Best for: </span>
                <li className='ms-5 list-disc'>Intermediate</li>
                <li className='ms-5 list-disc'>Advanced</li>
              </ul>
            </Destination.TextTop>
            <Destination.TextBottom>
              <p className='mb-5 self-start '>
                <span className='font-bold'>Beach Conditions: </span>Sharp coral
                and strong waves, not suitable for beginners
              </p>

              <p className='mb-5 self-start text-justify'>
                <span className='font-bold'>Access to waves: </span>Serangan
                requires a short boat ride (15 minutes) to reach the surf spot.
              </p>

              <p className='self-start text-justify'>
                Serangan is a challenging spot with sharp coral and strong
                waves, making it unsuitable for beginners. Intermediate surfers
                seeking an adventure will enjoy Serangan. The journey from
                Canggu takes about 1.5 hours, depending on traffic.
              </p>
              <div className='mb-10 flex w-full flex-col items-center md:mb-0 md:mt-4'>
                <CustomButton />
              </div>
            </Destination.TextBottom>
          </Destination>

          <hr className='my-8 bg-slate-900' />

          <Destination
            id='nusa-lembongan'
            name='Nusa Lembongan'
            image={nusaImg}
            handleSelectTrip={handleSelectTrip}
          >
            <Destination.TextTop>
              <ul className='mb-5 self-start '>
                Nusa Lembongan offers several spots:
                <li className='ms-5 list-disc'>Crane Shipwreck </li>
                <li className='ms-5 list-disc'>Isolation</li>
                <li className='ms-5 list-disc'>Play Ground</li>
                <li className='ms-5 list-disc'>Tamrin</li>
                <li className='ms-5 list-disc'>Ceningan</li>
              </ul>

              <ul className='mb-5 self-start '>
                <span className='font-bold'>Best for: </span>
                <li className='ms-5 list-disc'>Beginner</li>
                <li className='ms-5 list-disc'>Intermediate</li>
                <li className='ms-5 list-disc'>Advanced</li>
              </ul>
            </Destination.TextTop>
            <Destination.TextBottom>
              <p className='self-start text-justify'>
                Nusa Lembongan offers a variety of surf spots close to each
                other. It&apos;s an excellent destination for surfers of all
                levels. The journey from Sanur to Nusa Lembongan takes about an
                hour by fast boat. Nusa Penida, nearby, is also fantastic for
                surfing and relaxation.
              </p>
              <div className='mb-10 flex w-full flex-col items-center md:mb-0 md:mt-4'>
                <CustomButton />
              </div>
            </Destination.TextBottom>
          </Destination>

          <hr className='my-8 bg-slate-900' />

          <Destination
            id='lombok'
            name='Lombok Island'
            image={lombokImg}
            handleSelectTrip={handleSelectTrip}
          >
            <Destination.TextTop>
              <ul className='mb-5 self-start '>
                Lombok offers several spots:
                <li className='ms-5 list-disc'>Kuta Lombok</li>
                <li className='ms-5 list-disc'>Tanjung Aan</li>
                <li className='ms-5 list-disc'>Dom Dom</li>
                <li className='ms-5 list-disc'>Grupuk Inside</li>
                <li className='ms-5 list-disc'>Grupuk Outside</li>
              </ul>

              <ul className='mb-5 self-start '>
                <span className='font-bold'>Best for: </span>
                <li className='ms-5 list-disc'>Beginner</li>
                <li className='ms-5 list-disc'>Intermediate</li>
                <li className='ms-5 list-disc'>Advanced</li>
              </ul>
            </Destination.TextTop>
            <Destination.TextBottom>
              <p className='self-start text-justify'>
                Lombok offers an array of surf spots close to each other. To
                reach them, you must use a boat due to the considerable
                distance. The boat ride takes only 8-10 minutes to each spot.
                You can choose between a scenic ferry boat journey (4-5 hours)
                from Padang Bai or a quick flight (1 hour) from Ngurah Rai
                Airport to Lombok International Airport. Lombok is an excellent
                choice for surfers of all levels.
              </p>
              <div className='mb-10 flex w-full flex-col items-center md:mb-0 md:mt-4'>
                <CustomButton />
              </div>
            </Destination.TextBottom>
          </Destination>
        </div>
      </div>
    </>
  )
}

export default SurfTrips

const SurfTripsHeader = () => {
  return (
    <motion.section
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      id='surf-trips'
      className='flex w-full scroll-mt-[8rem] flex-col items-center justify-center'
    >
      <motion.h2
        variants={textVariants}
        className='text-center text-2xl font-bold text-slate-900
        dark:text-stone-100 md:my-0
          md:text-5xl'
      >
        Surf Trips
      </motion.h2>
      <motion.h3
        variants={textVariants}
        className='mt-2 w-full text-center text-2xl text-slate-900 dark:text-stone-100 md:text-2xl'
      >
        From Lombok to Sumatra
      </motion.h3>
      <motion.h4
        variants={textVariants}
        className='w-full text-center text-xl text-slate-900 dark:text-stone-100 md:text-2xl'
      >
        enjoy an amazing surf trip with Us
      </motion.h4>
      <motion.h4
        variants={textVariants}
        className='my-5 w-full text-center text-xl font-bold text-slate-900 underline underline-offset-2 dark:text-stone-100 md:text-3xl'
      >
        Starting from 500K IDR
      </motion.h4>
      <p className='mx-2 mt-2 w-full text-center text-lg font-bold text-slate-900 dark:text-stone-100 md:text-3xl'>
        🏄 Surf Bali 🌴
      </p>
      <p className='mx-2 mb-5 w-full text-center text-lg text-slate-900 dark:text-stone-100 md:text-xl'>
        Where Dreams Meet Waves!
      </p>
      <p className='mx-2 my-2 w-full text-center text-lg text-slate-900 dark:text-stone-100 md:text-xl'>
        Discover Bali&apos;s year-round surf paradise, with legendary waves for
        pros at Uluwatu and gentle breaks for beginners at Batu Bolong Beach.
      </p>
      <p className='mx-2 mt-4 w-full text-center text-lg font-bold text-slate-900 dark:text-stone-100 md:text-3xl'>
        🏄‍♀️ Your Board or Ours
      </p>
      <p className='mx-2 mb-5 w-full text-center text-lg text-slate-900 dark:text-stone-100 md:text-xl'>
        Bring your own board or use one of our{' '}
        <span className='block'>top-quality boards.</span>
      </p>

      <p className='mx-2 mt-4 w-full text-center text-lg font-bold text-slate-900 dark:text-stone-100 md:text-3xl'>
        🏨 Stay Your Way
      </p>
      <p className='mx-2 mb-5 w-full text-center text-lg text-slate-900 dark:text-stone-100 md:text-xl'>
        Book your own hotel or let us assist you in finding the perfect spot.
      </p>
      <p className='mx-2 mt-4 w-full text-center text-lg font-bold text-slate-900 dark:text-stone-100 md:text-3xl'>
        🏄‍♂️ Flexible Departures
      </p>
      <p className='mx-2 w-full text-center text-lg text-slate-900 dark:text-stone-100 md:text-xl'>
        Start your surf adventure right from Canggu or meet us at your chosen
        destination.
      </p>
      <p className='mx-2 my-2 w-full text-center text-lg text-slate-900 dark:text-stone-100 md:text-xl'>
        We&apos;re here to make your journey as convenient as possible.
      </p>
      <CustomButton />
    </motion.section>
  )
}

const Destination = ({ id, name, image, handleSelectTrip, children }) => {
  return (
    <section id={id} className='scroll-mt-[8rem]'>
      <h2 className='text-3xl font-semibold md:text-5xl'>{name}</h2>
      <div
        className='my-2 flex cursor-pointer items-center md:mt-5'
        onClick={() => handleSelectTrip(id === 'nusa-lembongan' ? 'nusa' : id)}
      >
        <FontAwesomeIcon
          icon={faEye}
          className='me-2 text-2xl font-bold text-amber-400 hover:text-amber-500 md:text-4xl'
        />
        <span className='text-lg hover:text-gray-300 md:text-3xl'>
          See on map
        </span>
      </div>

      <div className='md:grid md:grid-flow-row md:auto-rows-auto md:grid-cols-4 md:grid-rows-2'>
        <div
          className='my-4 h-52 w-full md:order-2 md:col-span-2 md:col-start-3
            md:row-span-1 md:my-auto md:h-[26rem]'
        >
          <Image
            width='600'
            height='600'
            src={image.src}
            alt={image.alt}
            loading='lazy'
            placeholder='blur'
            blurDataURL={image.blurDataUrl}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='h-full w-full rounded-lg object-cover shadow-2xl md:w-11/12'
          />
        </div>
        {children}
      </div>
    </section>
  )
}

Destination.TextTop = TextTop
Destination.TextBottom = TextBottom

function TextTop({ children }) {
  return (
    <div
      className='flex flex-col items-center justify-center text-xl
        md:order-1 md:col-span-2 md:row-span-1 
        md:py-5 md:text-2xl'
    >
      {children}
    </div>
  )
}

function TextBottom({ children }) {
  return (
    <div
      className='flex flex-col items-center justify-center text-xl md:order-3 md:col-span-4 md:row-span-1
        md:row-start-2 md:my-0 md:mt-5 md:auto-rows-auto md:py-0 
        md:text-2xl'
    >
      {children}
    </div>
  )
}

export async function getStaticProps() {
  const surfTripImgPromises = surfTripsPageImages.map(async (image) => {
    const src = getImageUrl(image.image)
    const blurDataUrl = await getBase64ImageUrl(image.image)
    return {
      src,
      blurDataUrl,
      id: image.id,
      alt: image.alt,
    }
  })

  const surfTripImg = await Promise.all(surfTripImgPromises)
  const mapMarkers = getMapMarkers(surfTripImg)

  return {
    props: {
      surfTripImg,
      mapMarkers,
    },
  }
}
