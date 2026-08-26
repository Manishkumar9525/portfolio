// Shared animation timing and variants to ensure consistent, smooth transitions
export const EASE = [0.22, 1, 0.36, 1];
export const DURATION_SHORT = 0.5;
export const DURATION = 0.65;
export const DURATION_LONG = 0.8;

export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, delay: i * 0.05, ease: EASE },
  }),
};

export const modal = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION, ease: EASE },
  },
  exit: {
    opacity: 0,
    y: 20,
    scale: 0.99,
    transition: { duration: DURATION_SHORT, ease: EASE },
  },
};

export default {
  EASE,
  DURATION_SHORT,
  DURATION,
  DURATION_LONG,
  fadeUp,
  modal,
};
