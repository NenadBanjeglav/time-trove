type ColorScale = {
  hue0: string
  hue50: string
  hue100: string
  hue200: string
}

type ColorScaleNeutral = {
  hue0: string
  hue50: string
  hue100: string
  hue200: string
  hue300: string
  hue400: string
  hue500: string
}

export type ButtonSize = 'small' | 'medium' | 'large' | 'xlarge'
export type ButtonVariant = 'primary' | 'success' | 'warning' | 'danger' | 'neutral'

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
    primary: ColorScale
    success: ColorScale
    warning: ColorScale
    danger: ColorScale
    neutral: ColorScaleNeutral
  }

  button: Record<
    ButtonSize,
    {
      fontSize: string
      padding: string
      height: string
      radius: string
    }
  > & {
    variants: ButtonVariant[]
  }
}
