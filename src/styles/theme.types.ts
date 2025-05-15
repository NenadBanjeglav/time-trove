export type RemString = `${number}rem`

export type Padding =
  | RemString
  | `${RemString} ${RemString}`
  | `${RemString} ${RemString} ${RemString}`
  | `${RemString} ${RemString} ${RemString} ${RemString}`

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
      xSmall: RemString
      small: RemString
      base: RemString
      large: RemString
      h2: RemString
      h1: RemString
    }
    lineHeight: {
      xSmall: RemString
      small: RemString
      base: RemString
      large: RemString
      h2: RemString
      h1: RemString
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
    none: RemString
    xSmall: RemString
    small: RemString
    medium: RemString
    large: RemString
    xLarge: RemString
  }
  iconSize: {
    small: RemString
    large: RemString
  }

  button: {
    sizes: {
      small: {
        fontSize: RemString
        padding: Padding
        height: RemString
        radius: RemString
        minWidth: RemString
      }
      medium: {
        fontSize: RemString
        padding: Padding
        height: RemString
        radius: RemString
        minWidth: RemString
      }
      large: {
        fontSize: RemString
        padding: Padding
        height: RemString
        radius: RemString
        minWidth: RemString
      }
      xlarge: {
        fontSize: RemString
        padding: Padding
        height: RemString
        radius: RemString
        minWidth: RemString
      }
    }
  }
}
