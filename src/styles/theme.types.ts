export type ColorScale = {
  hue0: string
  hue50: string
  hue100: string
  hue200: string
}

export type ColorScaleNeutral = {
  hue0: string
  hue50: string
  hue100: string
  hue200: string
  hue300: string
  hue400: string
  hue500: string
}

export type FontSizes = {
  xSmall: string
  small: string
  base: string
  large: string
  h2: string
  h1: string
}
export type LineHeights = FontSizes

export type FontWeights = {
  regular: number
  medium: number
  semiBold: number
  bold: number
}

export type ButtonSize = 'small' | 'medium' | 'large' | 'xlarge'
export type ButtonVariant = 'primary' | 'success' | 'warning' | 'danger' | 'neutral'

export type ThemeType = {
  typography: {
    fontSize: FontSizes
    lineHeight: LineHeights
    fontWeight: FontWeights
  }

  colors: {
    primary: ColorScale
    success: ColorScale
    warning: ColorScale
    danger: ColorScale
    neutral: ColorScaleNeutral
  }

  button: {
    [key in ButtonSize]: {
      fontSize: string
      padding: string
      height: string
      radius: string
    }
  } & {
    variants: ButtonVariant[]
  }
}
