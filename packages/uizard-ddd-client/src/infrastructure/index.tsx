import './services/translation/i18n'

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ThemeProvider } from 'styled-components'

import ServicesContext from './services/context'
import ErrorBoundary from './services/erroring/ErrorBoundary'
import events from './services/events'
import useNodes from './services/hooks/useNodes'
import reportWebVitals from './services/reporting/web-vitals'
import Routes from './services/routing/Routes'
import GlobalStyle from './styles/global'
import theme from './styles/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <ErrorBoundary>
      <Routes />
    </ErrorBoundary>
  </ThemeProvider>
)

const root = createRoot(document.getElementById('root')!)

root.render(
  <StrictMode>
    <ServicesContext.Provider value={{ events, useNodes }}>
      <App />
    </ServicesContext.Provider>
  </StrictMode>,
)

reportWebVitals()

export default App
