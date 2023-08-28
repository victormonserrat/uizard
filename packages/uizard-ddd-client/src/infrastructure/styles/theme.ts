const theme = {
  breakpoints: {
    extralarge: 1200,
    large: 992,
    medium: 768,
    small: 576,
  },
  colors: {
    black: 'var(--color-black)',
    gray100: 'var(--color-gray100)',
    gray200: 'var(--color-gray200)',
    gray300: 'var(--color-gray300)',
    gray400: 'var(--color-gray400)',
    gray500: 'var(--color-gray500)',
    gray600: 'var(--color-gray600)',
    gray700: 'var(--color-gray700)',
    gray800: 'var(--color-gray800)',
    gray900: 'var(--color-gray900)',
    primary: 'var(--color-pink500)',
    secondary: 'var(--color-owlblue700)',
    white: 'var(--color-white)',
  },
  font: {
    families: {
      primary: 'var(--font-primary)',
    },
    sizes: {
      extralarge: '1.5rem',
      large: '1.25rem',
      medium: '1rem',
      small: '0.75rem',
    },
    weights: {
      black: 900,
      bold: 700,
      extrabold: 800,
      extralight: 200,
      light: 300,
      medium: 500,
      normal: 400,
      semibold: 600,
      thin: 100,
    },
  },
} as const

export type Theme = typeof theme

export default theme
