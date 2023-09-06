import Image from 'next/image'
import Carousel from '../../components/carousel'
import styles from '../../components/carousel.module.css'
import RendyKid01 from '../../../public/images/rendy/contests/rendy_kid_01.jpg'
import RendyKid2 from '../../../public/images/rendy/contests/rendy_kid_02.jpg'
import RendyKid03 from '../../../public/images/rendy/contests/rendy_kid_03.jpg'
import RendySurfA from '../../../public/images/rendy/surf/rendy_surf_A.jpg'
import RendySurfB from '../../../public/images/rendy/surf/rendy_surf_B.jpg'
import RendySurfC from '../../../public/images/rendy/surf/rendy_surf_C.jpg'
import RendySurfD from '../../../public/images/rendy/surf/rendy_surf_D.jpg'
import RendySurf01 from '../../../public/images/rendy/surf/rendy_surf_01.jpg'
import RendySurf02 from '../../../public/images/rendy/surf/rendy_surf_02.jpg'
import RendySurf03 from '../../../public/images/rendy/surf/rendy_surf_03.jpg'
import RendySurf04 from '../../../public/images/rendy/surf/rendy_surf_04.jpg'
import RendySurf05 from '../../../public/images/rendy/surf/rendy_surf_05.jpg'
import RendySurf06 from '../../../public/images/rendy/surf/rendy_surf_06.jpg'
import RendySurf07 from '../../../public/images/rendy/surf/rendy_surf_07.jpg'
import RendySurf09 from '../../../public/images/rendy/surf/rendy_surf_09.jpg'
import RendySurf11 from '../../../public/images/rendy/surf/rendy_surf_11.jpg'
import RendySurf12 from '../../../public/images/rendy/surf/rendy_surf_12.jpg'
import RendySurf13 from '../../../public/images/rendy/surf/rendy_surf_13.jpg'
import Head from 'next/head'
import { useRouter } from 'next/router'
const images = [
  RendySurf06,
  RendySurfA,
  RendyKid2,
  RendyKid01,
  RendyKid03,
  RendySurfB,
  RendySurfC,
  RendySurfD,
  RendySurf01,
  RendySurf02,
  RendySurf03,
  RendySurf04,
  RendySurf05,
  RendySurf07,
  RendySurf09,
  RendySurf11,
  RendySurf12,
  RendySurf13,
]

const About = () => {
  const router = useRouter()

  const meta = {
    title: 'Aquaman Bali | Surf School | About me',
    description: 'Discover My Story',
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
        id='about-me'
        className='justify-bewteen flex flex-col items-center p-5 dark:bg-slate-900 dark:text-gray-200'
      >
        <div className='mb-2'>
          <span className='text-center text-4xl font-bold dark:text-white'>
            About me
          </span>
        </div>

        <hr className='mx-5 bg-slate-950 dark:bg-slate-200' />

        <Carousel>
          {images.map((src, i) => {
            return (
              <div key={i} className={`${styles.embla__slide} h-52`}>
                <Image
                  src={src}
                  alt='rendy'
                  className='h-full rounded-lg object-cover shadow-2xl'
                />
              </div>
            )
          })}
        </Carousel>

        <hr className='mx-5 my-2 bg-slate-950' />

        <p className='my-3 text-justify'>
          My name is Rendy and I am from Krui, South Sumatra. I started surfing
          at the age of 8 and came to Bali in 2019 to work as a surf instructor
          at Batu Bolong Beach in Canggu.
        </p>
        <p className='my-1 text-justify'>
          Batu Bolong is an easy place to learn surfing as a beginner but is
          also good for intermediate surfers.
        </p>
        <p className='my-1 text-justify'>
          I really love surfing and want to share my experience, knowledge and
          stoke of surfing with you. It is a lot of fun. Come join me and
          let&apos;s enjoy the waves and make you reach your goals in surfing!
        </p>
      </div>
    </>
  )
}

export default About
