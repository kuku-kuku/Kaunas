// Shared motion tokens so every reveal/transition feels like one system.

export const ease = {
  outExpo: [0.16, 1, 0.3, 1],
  inOutQuart: [0.76, 0, 0.24, 1],
  standard: [0.25, 0.1, 0.25, 1],
};

export const duration = {
  fast: 0.2,
  base: 0.6,
  slow: 0.9,
};

// Default distance an element travels when it reveals on scroll (px)
export const revealOffset = 28;
