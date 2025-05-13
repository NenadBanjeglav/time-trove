export type ThemeType = {
  typography: {
    fontSize: {
      xSmall: string
      small: string
      base: string
      large: string
      h2: string
      h1: string
    }
    lineHeight: {
      xSmall: string
      small: string
      base: string
      large: string
      h2: string
      h1: string
    }
    fontWeight: {
      regular: number
      medium: number
      semiBold: number
      bold: number
    }
  }

  colors: {
    primary: {
      hue0: string
      hue50: string
      hue100: string
      hue200: string
    }
    neutrals: {
      hue0: string
      hue50: string
      hue100: string
      hue200: string
      hue300: string
      hue400: string
      hue500: string
    }
    success: {
      hue0: string
      hue50: string
      hue100: string
      hue200: string
    }
    warning: {
      hue0: string
      hue50: string
      hue100: string
      hue200: string
    }
    danger: {
      hue0: string
      hue50: string
      hue100: string
      hue200: string
    }
  }
}

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
    neutrals: {
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
}
