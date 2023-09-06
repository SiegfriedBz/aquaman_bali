import { useRef } from 'react'
import LocationMap, { usePopup } from '@/components/LocationMap'
import { useAppContext } from '@/context/appContext'
import { MARKERS } from '@/data/markers'
import CangguImage from '../../../public/images/lessons/girl_surf.jpg'
import MedewiImage from '../../../public/images/spots/medewi_surf.jpg'
import BalanganImage from '../../../public/images/spots/balangan_surf.jpg'
import UluwatuImage from '../../../public/images/spots/uluwatu_surf.jpg'
import SeranganImage from '../../../public/images/spots/serangan_surf.jpg'
import NusaImage from '../../../public/images/spots/nusa_lumboga_surf.jpg'
import LombokImage from '../../../public/images/spots/lombok_surf.jpg'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
import Head from 'next/head'

const SurfTrips = () => {
  const mapContainerRef = useRef(null)
  const { setShowPopup, setPopup } = useAppContext()

  const handleSelectTrip = (spot) => {
    setShowPopup(true)
    setPopup(MARKERS[spot])
    mapContainerRef?.current?.scrollIntoView()
  }

  return (
    <>
      <Head>
        <title>Aquaman Bali | Surf School | Surf Trips</title>
        <meta
          name='keywords'
          content='Aquaman Bali Surf School Surf Trips'
        ></meta>
        <meta
          property='og:title'
          content='Aquaman Bali Surf School Surf Trips'
        />
      </Head>
      <div id='surf-trips'>
        <div className='mx-2 my-5 flex scroll-mt-20 flex-col items-center justify-center'>
          <h2 className='text-center text-4xl font-bold text-slate-900 dark:text-white'>
            Surf trips
          </h2>
          <h3 className='mt-2 text-center text-2xl text-slate-900 dark:text-white'>
            From Lombok to Sumatra
          </h3>
          <h4 className='text-center text-xl text-slate-900 dark:text-white'>
            enjoy an amazing surf trip with Rendy
          </h4>
          <h4 className='mt-2 text-center text-xl text-slate-900 dark:text-white'>
            Starting from 500K IDR
          </h4>
        </div>

        <hr className='mx-5 my-5 bg-slate-950' />

        <div ref={mapContainerRef} className='mx-2 scroll-mt-20'>
          <LocationMap />
        </div>

        <hr className='mx-5 my-5 bg-slate-950' />

        <div className='mx-2'>
          <section id='canggu'>
            <h2 className='text-3xl font-semibold'>Canggu</h2>
            <div
              className='my-2 flex items-center'
              onClick={() => handleSelectTrip('canggu')}
            >
              <FontAwesomeIcon
                icon={faEye}
                className='me-2 text-2xl font-bold text-amber-500'
              />
              <span className='text'>See on map</span>
            </div>
            <div className='h-52'>
              <Image
                src={CangguImage}
                alt='canggu'
                className='h-full rounded-lg object-cover shadow-2xl'
              />
            </div>
          </section>

          <hr className='mx-5 my-5 bg-slate-950' />

          <section id='medewi'>
            <h2 className='text-3xl font-semibold'>Medewi</h2>{' '}
            <div
              className='my-2 flex items-center'
              onClick={() => handleSelectTrip('medewi')}
            >
              <FontAwesomeIcon
                icon={faEye}
                className='me-2 text-2xl font-bold text-amber-500'
              />
              <span className='text'>See on map</span>
            </div>
            <div className='h-52'>
              <Image
                src={MedewiImage}
                alt='canggu'
                className='h-full rounded-lg object-cover shadow-2xl'
              />
            </div>
          </section>

          <hr className='mx-5 my-5 bg-slate-950' />

          <section id='balangan'>
            <h2 className='text-3xl font-semibold'>Balangan</h2>
            <div
              className='my-2 flex items-center'
              onClick={() => handleSelectTrip('balangan')}
            >
              <FontAwesomeIcon
                icon={faEye}
                className='me-2 text-2xl font-bold text-amber-500'
              />
              <span className='text'>See on map</span>
            </div>
            <div className='h-52'>
              <Image
                src={BalanganImage}
                alt='canggu'
                className='h-full rounded-lg object-cover shadow-2xl'
              />
            </div>
          </section>

          <hr className='mx-5 my-5 bg-slate-950' />

          <section id='uluwatu'>
            <h2 className='text-3xl font-semibold'>Uluwatu</h2>{' '}
            <div
              className='my-2 flex items-center'
              onClick={() => handleSelectTrip('uluwatu')}
            >
              <FontAwesomeIcon
                icon={faEye}
                className='me-2 text-2xl font-bold text-amber-500'
              />
              <span className='text'>See on map</span>
            </div>
            <div className='h-52'>
              <Image
                src={UluwatuImage}
                alt='canggu'
                className='h-full rounded-lg object-cover shadow-2xl'
              />
            </div>
          </section>

          <hr className='mx-5 my-5 bg-slate-950' />

          <section id='serangan'>
            <h2 className='text-3xl font-semibold'>Serangan</h2>
            <div
              className='my-2 flex items-center'
              onClick={() => handleSelectTrip('serangan')}
            >
              <FontAwesomeIcon
                icon={faEye}
                className='me-2 text-2xl font-bold text-amber-500'
              />
              <span className='text'>See on map</span>
            </div>
            <div className='h-52'>
              <Image
                src={SeranganImage}
                alt='canggu'
                className='h-full rounded-lg object-cover shadow-2xl'
              />
            </div>
          </section>

          <hr className='mx-5 my-5 bg-slate-950' />

          <section id='nusa'>
            <h2 className='text-3xl font-semibold'>Nusa</h2>
            <div
              className='my-2 flex items-center'
              onClick={() => handleSelectTrip('nusa')}
            >
              <FontAwesomeIcon
                icon={faEye}
                className='me-2 text-2xl font-bold text-amber-500'
              />
              <span className='text'>See on map</span>
            </div>
            <div className='h-52'>
              <Image
                src={NusaImage}
                alt='canggu'
                className='h-full rounded-lg object-cover shadow-2xl'
              />
            </div>
          </section>

          <hr className='mx-5 my-5 bg-slate-950' />

          <section id='lombok'>
            <h2 className='text-3xl font-semibold'>Lombok</h2>{' '}
            <div
              className='my-2 flex items-center'
              onClick={() => handleSelectTrip('lombok')}
            >
              <FontAwesomeIcon
                icon={faEye}
                className='me-2 text-2xl font-bold text-amber-500'
              />
              <span className='text'>See on map</span>
            </div>
            <div className='h-52'>
              <Image
                src={LombokImage}
                alt='canggu'
                className='h-full rounded-lg object-cover shadow-2xl'
              />
            </div>
          </section>
        </div>
      </div>
    </>
  )
}

export default SurfTrips
