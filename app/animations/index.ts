export const fadeInUp = {
  initial: {
    opacity: 0,
    y: 30
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.3, staggerChildren: 1 }
  }
};

export const fadeOutDown = {
  initial: {
    opacity: 1,
    y: 0
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.3, staggerChildren: 1 }
  }
};

export const scaleOnHoverAndTap = {
  whileHover: {
    scale: 1.03
  },
  whileTap: {
    scale: 1.3
  }
};
export const fadeInOut = {
  initial: {
    opacity: 0
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.3 }
  },
  exit: {
    opacity: 0
  }
};
export const leftFadeInOut = {
  initial: {
    opacity: 0,
    x: -30
  },
  animate: {
    opacity: 1,
    x: 0
  },
  exit: {
    opacity: 0,
    x: -100
  }
};
