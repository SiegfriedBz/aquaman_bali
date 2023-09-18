export const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.75,
    },
  },
}

export const childVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 1.25,
    },
  },
}

export const textVariants = {
  hidden: { opacity: 0, y: '24px' },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.25,
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
      stiffness: 100,
    },
  },
}

export const buttonVariants = {
  inView: {
    scale: 1.1,
    transition: { duration: 3, type: 'spring', stiffness: 180 },
  },
}

export const navVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 1.5,
      staggerChildren: 0.2,
    },
  },
}

export const leftLinkVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: {
    opacity: 1,
    x: 0,
    type: 'spring',
    stiffness: 180,
  },
}

export const rightLinkVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: {
    opacity: 1,
    x: 0,
    type: 'spring',
    stiffness: 120,
  },
}
