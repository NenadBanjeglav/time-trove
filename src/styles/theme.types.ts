export type RemSizeType = `${number}rem`

export type Padding =
  | RemSizeType
  | `${RemSizeType} ${RemSizeType}`
  | `${RemSizeType} ${RemSizeType} ${RemSizeType}`
  | `${RemSizeType} ${RemSizeType} ${RemSizeType} ${RemSizeType}`

export type Margin = Padding

export type FontSizeType = keyof ThemeType['typography']['fontSize']
export type LineHeightType = keyof ThemeType['typography']['lineHeight']
export type FontWeightType = keyof ThemeType['typography']['fontWeight']
export type Pallete = keyof ThemeType['colors']
export type Color<T extends Pallete> = keyof ThemeType['colors'][T]
export type ButtonSize = keyof ThemeType['button']['sizes']
export type IconSize = keyof ThemeType['iconSize']

export type ThemeType = {
  typography: {
    fontSize: {
      xSmall: RemSizeType
      small: RemSizeType
      base: RemSizeType
      large: RemSizeType
      h2: RemSizeType
      h1: RemSizeType
    }
    lineHeight: {
      xSmall: RemSizeType
      small: RemSizeType
      base: RemSizeType
      large: RemSizeType
      h2: RemSizeType
      h1: RemSizeType
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

  spacing: {
    none: RemSizeType
    xSmall: RemSizeType
    small: RemSizeType
    medium: RemSizeType
    large: RemSizeType
    xLarge: RemSizeType
  }
  iconSize: {
    xSmall: RemSizeType
    small: RemSizeType
    large: RemSizeType
  }

  button: {
    sizes: {
      small: {
        fontSize: RemSizeType
        padding: Padding
        height: RemSizeType
        radius: RemSizeType
        minWidth: RemSizeType
      }
      medium: {
        fontSize: RemSizeType
        padding: Padding
        height: RemSizeType
        radius: RemSizeType
        minWidth: RemSizeType
      }
      large: {
        fontSize: RemSizeType
        padding: Padding
        height: RemSizeType
        radius: RemSizeType
        minWidth: RemSizeType
      }
      xlarge: {
        fontSize: RemSizeType
        padding: Padding
        height: RemSizeType
        radius: RemSizeType
        minWidth: RemSizeType
      }
    }
  }
}
