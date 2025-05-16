import type { ThemeType } from './theme.types'

export const theme: ThemeType = {
  typography: {
    fontSize: {
      xSmall: '0.75rem', // 12px
      small: '0.875rem', // 14px
      base: '1rem', // 16px
      large: '1.25rem', // 20px
      h2: '1.5rem', // 24px
      h1: '2rem', // 32px
    },
    lineHeight: {
      xSmall: '1rem', // 16px
      small: '1.25rem', // 20px
      base: '1.5rem', // 24px
      large: '1.75rem', // 28px
      h2: '2rem', // 32px
      h1: '2.5rem', // 40px
    },
    fontWeight: {
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },

  colors: {
    primary: {
      hue0: '#F5F0FF',
      hue50: '#B197FC',
      hue100: '#925FF0',
      hue200: '#6F38D2',
    },
    neutral: {
      hue0: '#FFFFFF',
      hue50: '#F8F8F8',
      hue100: '#DDE2E8',
      hue200: '#A0A9B1',
      hue300: '#5F6368',
      hue400: '#2E3237',
      hue500: '#000000',
    },
    success: {
      hue0: '#FFFFFF',
      hue50: '#4BE381',
      hue100: '#2ED573',
      hue200: '#1DB863',
    },
    warning: {
      hue0: '#FFFFFF',
      hue50: '#FFC266',
      hue100: '#FFA940',
      hue200: '#FF8C1A',
    },
    danger: {
      hue0: '#FFFFFF',
      hue50: '#FF6B6B',
      hue100: '#FF4D4F',
      hue200: '#D9363E',
    },
  },
  spacing: {
    none: '0rem',
    xSmall: '0.25rem', // 4px
    small: '0.5rem', // 8px
    smallPlus: '0.75rem', // 12px
    medium: '1rem', // 16px
    large: '1.5rem', // 24px
    xLarge: '2rem', // 32px
  },
  borderRadius: {
    none: '0px',
    small: '0.25rem', // 4px
    medium: '0.5rem', // 8px
    large: '0.75rem', // 12px
    xLarge: '1rem', // 16px
    full: '9999px', // full pill
  },
  iconSize: {
    small: '1.5rem', // 24px
    large: '2.4rem', // 38.4px
  },

  button: {
    sizes: {
      small: {
        fontSize: '0.75rem', // 12px
        padding: '0.5rem 0.5rem', // 8px 8px
        height: '2rem', // 32px
        radius: '0.5rem', // 8px
        minWidth: '4.5rem', // 72px
      },
      medium: {
        fontSize: '0.875rem', // 14px
        padding: '0.5rem 0.875rem', // 8px 14px
        height: '2.5rem', // 40px
        radius: '0.75rem', // 12px
        minWidth: '5.6875rem', // 91px
      },
      large: {
        fontSize: '1rem', // 16px
        padding: '0.5rem 1rem', // 8px 16px
        height: '3rem', // 48px
        radius: '0.75rem', // 12px
        minWidth: '6.8125rem', // 109px
      },
      xlarge: {
        fontSize: '1.25rem', // 20px
        padding: '0.5rem 1.5rem', // 8px 24px
        height: '3.5rem', // 56px
        radius: '0.75rem', // 12px
        minWidth: '7.8125rem', // 125px
      },
    },
  },
}
