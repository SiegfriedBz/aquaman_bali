export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.55,
    },
  },
}

export const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
}

export const textVariants = {
  hidden: { opacity: 0, y: '24px' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
}

export const sideSlideVariants = {
  hidden: {
    x: '-100vw',
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.25,
      duration: 0.5,
      type: 'spring',
      stiffness: 120,
    },
  },
}

export const buttonVariants = {
  inView: {
    scale: 1.05,
    transition: { duration: 3, type: 'spring', stiffness: 180 },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 3, type: 'spring', stiffness: 180 },
  },
}
