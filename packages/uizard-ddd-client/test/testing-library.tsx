import { render, RenderOptions } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { ReactElement, ReactNode } from 'react'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '~/infrastructure/styles/global'
import theme from '~/infrastructure/styles/theme'

const AllTheProviders = ({ children }: { children: ReactNode }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
)

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
export { userEvent }
