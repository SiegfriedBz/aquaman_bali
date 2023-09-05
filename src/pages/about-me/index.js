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
import RendySurfAA from '../../../public/images/rendy/surf/rendy_surf_AA.jpg'
import RendySurf01 from '../../../public/images/rendy/surf/rendy_surf_01.jpg'
import RendySurf02 from '../../../public/images/rendy/surf/rendy_surf_02.jpg'
import RendySurf03 from '../../../public/images/rendy/surf/rendy_surf_03.jpg'
import RendySurf04 from '../../../public/images/rendy/surf/rendy_surf_04.jpg'
import RendySurf05 from '../../../public/images/rendy/surf/rendy_surf_05.jpg'
import RendySurf07 from '../../../public/images/rendy/surf/rendy_surf_07.jpg'
import RendySurf09 from '../../../public/images/rendy/surf/rendy_surf_09.jpg'
import RendySurf11 from '../../../public/images/rendy/surf/rendy_surf_11.jpg'
import RendySurf12 from '../../../public/images/rendy/surf/rendy_surf_12.jpg'
import RendySurf13 from '../../../public/images/rendy/surf/rendy_surf_13.jpg'

const About = () => {
  const images = [
    RendySurfAA,
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
  return (
    <div id='about-us' className='my-5'>
      <div className='justify-bewteen mx-5 my-2 flex flex-col items-center'>
        <div className='mb-2'>
          <span className='text-center text-4xl font-bold'>About me</span>
        </div>

        <hr className='mx-5 my-2 bg-slate-950' />

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
    </div>
  )
}

export default About
