import 'styled-components'
import type { ThemeType } from './theme.types'

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
