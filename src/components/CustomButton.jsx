import { buttonVariants } from '@/utils/framerVariants'
import { motion } from 'framer-motion'
import Link from 'next/link'

const MotionLink = motion(Link)

const CustomButton = ({
  className = 'mt-8 px-8 py-4',
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
      rounded-3xl bg-gradient-to-r from-cyan-500
      to-blue-500
      text-center font-extrabold
      text-stone-100 outline-none
      ring-2 hover:ring-blue-500 active:ring-blue-500
       md:text-lg ${className}`}
      href={href}
      target={children == 'Book now' ? '_blank' : '_self'}
    >
      {children}
    </MotionLink>
  )
}

export default CustomButton
