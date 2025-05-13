// styled.d.ts
import 'styled-components'
import type { ThemeType } from './theme' // Update this path as needed

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
