import Link from 'next/link'
import { motion } from 'framer-motion'
import { buttonVariants } from '@/utils/framerVariants'

const MotionLink = motion(Link)

const CustomLink = ({
  className = '',
  href = 'https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0',
  children = 'Book now',
  variants = buttonVariants,
}) => {
  return (
    <MotionLink
      variants={variants}
      whileInView='inView'
      whileHover='hover'
      viewport={{ margin: '-75px' }}
      className={`
        mt-4 rounded-xl bg-gradient-to-r
      from-cyan-500
      to-blue-500
        px-16 py-4
        text-center text-xl
        font-extrabold text-stone-100 outline-none
        ring-2 
      hover:ring-blue-500 active:ring-blue-500
        md:text-2xl ${className}`}
      href={href}
      target={children == 'Book now' ? '_blank' : '_self'}
    >
      {children}
    </MotionLink>
  )
}

export default CustomLink
