// 🎨 COLOR SCHEME SELECTOR
// Change the ACTIVE_SCHEME to try different colors!

export const COLOR_SCHEMES = {
  // 1️⃣ HOT MAGENTA/FUCHSIA (Ultra Modern, Futuristic)
  fuchsia: {
    primary: '#D946EF',
    secondary: '#EC4899',
    light: '#F0ABFC',
    hover: 'rgba(217, 70, 239, 0.2)',
    border: 'rgba(217, 70, 239, 0.5)',
  },

  // 2️⃣ ACID LIME (Neon Rebel, High Energy)
  lime: {
    primary: '#84CC16',
    secondary: '#BEF264',
    light: '#D9F99D',
    hover: 'rgba(132, 204, 22, 0.2)',
    border: 'rgba(132, 204, 22, 0.5)',
  },

  // 3️⃣ ELECTRIC VIOLET (Digital Royalty, Premium)
  violet: {
    primary: '#7C3AED',
    secondary: '#A78BFA',
    light: '#C4B5FD',
    hover: 'rgba(124, 58, 237, 0.2)',
    border: 'rgba(124, 58, 237, 0.5)',
  },

  // 4️⃣ CYBER ORANGE (High Voltage, Explosive)
  orange: {
    primary: '#FF6B00',
    secondary: '#FFAA00',
    light: '#FED7AA',
    hover: 'rgba(255, 107, 0, 0.2)',
    border: 'rgba(255, 107, 0, 0.5)',
  },

  // 5️⃣ NEON CYAN (Matrix Vibes, Digital)
  cyan: {
    primary: '#00D9FF',
    secondary: '#06B6D4',
    light: '#67E8F9',
    hover: 'rgba(0, 217, 255, 0.2)',
    border: 'rgba(0, 217, 255, 0.5)',
  },

  // 6️⃣ ELECTRIC BLUE (Clean, Professional, Tech)
  blue: {
    primary: '#0EA5E9',
    secondary: '#3B82F6',
    light: '#7DD3FC',
    hover: 'rgba(14, 165, 233, 0.2)',
    border: 'rgba(14, 165, 233, 0.5)',
  },

  // 7️⃣ EMERALD GREEN (Growth, Crypto Native)
  emerald: {
    primary: '#10B981',
    secondary: '#22C55E',
    light: '#6EE7B7',
    hover: 'rgba(16, 185, 129, 0.2)',
    border: 'rgba(16, 185, 129, 0.5)',
  },
};

// 🎯 CHANGE THIS LINE TO SWITCH COLORS:
// Options: 'fuchsia', 'lime', 'violet', 'orange', 'cyan', 'blue', 'emerald'
export const ACTIVE_SCHEME = 'fuchsia';

// Get the active color scheme
export const colors = COLOR_SCHEMES[ACTIVE_SCHEME];
