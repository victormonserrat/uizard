import { Component, ErrorInfo, lazy } from 'react'

import { ErrorBoundaryProps, ErrorBoundaryState } from './types'

const InternalError = lazy(
  () => import('~/infrastructure/pages/errors/Internal'),
)

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { error: undefined }
  }

  static getDerivedStateFromError(error: Error) {
    return { error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo)
  }

  render() {
    if (this.state.error) {
      switch (this.state.error.name) {
        case 'InternalException':
        default:
          return <InternalError />
      }
    }

    return this.props.children
  }
}

export default ErrorBoundary
