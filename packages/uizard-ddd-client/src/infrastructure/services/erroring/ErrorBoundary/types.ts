import { ReactNode } from 'react'

export type ErrorBoundaryProps = Readonly<{
  children: ReactNode
}>

export type ErrorBoundaryState = Readonly<{
  error?: Error
}>
