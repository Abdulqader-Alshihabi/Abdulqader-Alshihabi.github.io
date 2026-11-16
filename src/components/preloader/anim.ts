export const opacity = {
  initial: {
    opacity: 0
  },
  enter: {
    opacity: 0.75,
    transition: { duration: 1, delay: 0.2 }
  }
};

export const slideUp = {
  initial: {
    y: "0%"
  },
  exit: {
    y: "calc(-100dvh - 300px)",
    transition: { duration: 1.1, ease: [0.76, 0, 0.24, 1] as const, delay: 0.25 }
  }
};
