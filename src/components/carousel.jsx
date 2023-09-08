import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './carousel.module.css'

const Carousel = ({ children }) => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    <div className={styles.embla} ref={emblaRef}>
      <div className={styles.embla__container}>{children}</div>
    </div>
  )
}
export default Carousel
