import { buttonVariants } from '@/utils/framerVariants'
import { motion } from 'framer-motion'

const CustomButton = ({
  href = 'https://api.whatsapp.com/send/?phone=6282289427321&text&type=phone_number&app_absent=0',
  children = 'Book now',
}) => {
  return (
    <motion.a
      variants={buttonVariants}
      whileInView='inView'
      whileHover='hover'
      viewport={{ margin: '-75px' }}
      className='mt-8 w-48
        rounded-3xl bg-gradient-to-r from-cyan-500
        to-blue-500 px-8 py-4
        text-center font-extrabold
        text-white outline-none
        ring-2 hover:ring-blue-500 active:ring-blue-500
        md:mt-8 md:w-72 md:text-lg'
      href={href}
      target='_blank'
    >
      {children}
    </motion.a>
  )
}

export default CustomButton