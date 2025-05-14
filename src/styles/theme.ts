import type { ThemeType } from './theme.types'

export const theme: ThemeType = {
  typography: {
    fontSize: {
      xSmall: '12px',
      small: '14px',
      base: '16px',
      large: '20px',
      h2: '24px',
      h1: '32px',
    },
    lineHeight: {
      xSmall: '16px',
      small: '20px',
      base: '24px',
      large: '28px',
      h2: '32px',
      h1: '40px',
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

  button: {
    sizes: {
      small: {
        fontSize: '12px',
        padding: '8px 8px',
        height: '32px',
        radius: '8px',
      },
      medium: {
        fontSize: '14px',
        padding: '8px 14px',
        height: '40px',
        radius: '12px',
      },
      large: {
        fontSize: '16px',
        padding: '8px 16px',
        height: '48px',
        radius: '12px',
      },
      xlarge: {
        fontSize: '20px',
        padding: '8px 24px',
        height: '56px',
        radius: '12px',
      },
    },
    variants: ['primary', 'success', 'warning', 'danger', 'neutral'],
  },
}
