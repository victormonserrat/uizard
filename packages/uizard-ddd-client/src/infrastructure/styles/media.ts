import keysOf from '@victormonserrat/keys-of'

import theme from './theme'

const minWidthQuery = (width: number) => `@media (min-width: ${width}px)`

const media = keysOf(theme.breakpoints).reduce(
  (previousValue, currentValue) => ({
    ...previousValue,
    [currentValue]: minWidthQuery(theme.breakpoints[currentValue]),
  }),
  {} as { [key in keyof typeof theme.breakpoints]: string },
)

export default media
