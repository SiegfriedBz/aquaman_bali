import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import Carousel from './carousel'
import styles from './carousel.module.css'
import GoogleIcon from '../../public/logos/google_g_icon.png'

const QUOTES = [
  {
    id: 1,
    message:
      'Amazing Teacher! It was my first time on a surfboard and due to his easily... ',
    author: 'Laura Kiefer',
  },
  {
    id: 2,
    message:
      'Rendy is the greatest surf instructor I ever had in all my years of surfing 😊 ...',
    author: 'Francois Gauthier',
  },
  {
    id: 3,
    message:
      'I had an absolutely amazing experience learning to surf with Rendy!...',
    author: 'Katrina Ramos',
  },
]

const renderStars = Array.from({ length: 5 }).map((_, i) => {
  return <FontAwesomeIcon key={i} icon={faStar} className='my-auto' />
})

const Testimonials = () => {
  return (
    <div className='flex flex-col'>
      <section id='carousel-reviews'>
        <Carousel>
          {QUOTES.map((quote, i) => {
            return (
              <div key={i} className={styles.embla__slide}>
                <figure className='my-4'>
                  <blockquote className='relative rounded-3xl py-6 pl-12 pr-8 '>
                    <p className='mx-2 mt-2 px-2 text-left text-2xl text-slate-900 before:absolute before:left-0 before:top-0 before:translate-x-2 before:translate-y-2 before:transform before:font-serif before:text-9xl before:text-slate-600 before:opacity-25 before:content-["\201C"] after:absolute after:-bottom-20 after:right-0 after:-translate-x-2 after:-translate-y-2 after:transform after:font-serif after:text-9xl after:text-slate-600 after:opacity-25 after:content-["\201D"] dark:text-slate-400 sm:text-3xl'>
                      {quote.message}{' '}
                      <a
                        href='https://goo.gl/maps/iHPokm4Q943N2f2fA'
                        className='ms-4 mt-2 flex items-center text-xl italic text-slate-500 outline-none sm:text-2xl'
                      >
                        Read full review on{' '}
                        <Image
                          src={GoogleIcon}
                          width={35}
                          height={35}
                          alt='google'
                        />
                      </a>
                    </p>
                  </blockquote>
                  <figcaption className='mt-2 text-right text-xl italic text-slate-500 dark:text-slate-400 sm:text-2xl'>
                    &#8212; {quote.author}
                  </figcaption>
                </figure>
              </div>
            )
          })}
        </Carousel>
      </section>

      <section id='all-reviews-link' className='mx-auto mb-3 mt-2'>
        <a href='https://goo.gl/maps/iHPokm4Q943N2f2fA' className=''>
          <h3 className='text-center text-xl'>Top-rated Surf School</h3>
          <div className='flex items-center'>
            <span className='me-1 text-3xl text-amber-400 hover:text-amber-500'>
              <span className='my-auto text-4xl font-bold'>5</span>{' '}
              {renderStars}
            </span>{' '}
            <Image src={GoogleIcon} width={55} height={55} alt='google' />
          </div>
        </a>
      </section>
    </div>
  )
}

export default Testimonials
