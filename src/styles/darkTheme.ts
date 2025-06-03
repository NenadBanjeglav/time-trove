import { theme } from './theme'
import type { ThemeType } from './theme.types'

export const darkTheme: ThemeType = {
  ...theme,
  colors: {
    primary: {
      hue0: '#1a1333',
      hue50: '#a385ff',
      hue100: '#bba6ff',
      hue200: '#c6b6ff',
    },
    neutral: {
      hue0: '#000000',
      hue50: '#181e25',
      hue100: '#434346',
      hue200: '#7b828a',
      hue300: '#c9d2de',
      hue400: '#f3f4f8',
      hue500: '#ffffff',
    },
    success: theme.colors.success,
    warning: theme.colors.warning,
    danger: theme.colors.danger,
  },
}
