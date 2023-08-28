import 'styled-components'

import { Theme } from '~/infrastructure/styles/theme'

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}
