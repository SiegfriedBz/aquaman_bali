import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import styles from './carousel.module.css'

const Carousel = ({ children }) => {
  // 1. useEmblaCarousel returns a emblaRef and we must attach the ref to a container.
  // EmblaCarousel will use that ref as basis for swipe and other functionality.
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()])

  return (
    // Attach ref to a div
    // 2. The wrapper div must have overflow:hidden
    <div className={styles.embla} ref={emblaRef}>
      {/* 3. The inner div must have a display:flex property */}
      {/* 4. We pass the children as-is so that the outside component can style it accordingly */}
      <div className={styles.embla__container}>{children}</div>
    </div>
  )
}
export default Carousel
