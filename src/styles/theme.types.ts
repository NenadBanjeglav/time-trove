export type FontSizeType = keyof ThemeType['typography']['fontSize']
export type LineHeightType = keyof ThemeType['typography']['lineHeight']
export type FontWeightType = keyof ThemeType['typography']['fontWeight']
export type Pallete = keyof ThemeType['colors']
export type Color<T extends Pallete> = keyof ThemeType['colors'][T]
export type ButtonSize = keyof ThemeType['button']['sizes']

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
    neutral: {
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

  button: {
    sizes: {
      small: {
        fontSize: string
        padding: string
        height: string
        radius: string
        minWidth: string
      }
      medium: {
        fontSize: string
        padding: string
        height: string
        radius: string
        minWidth: string
      }
      large: {
        fontSize: string
        padding: string
        height: string
        radius: string
        minWidth: string
      }
      xlarge: {
        fontSize: string
        padding: string
        height: string
        radius: string
        minWidth: string
      }
    }
  }
}
