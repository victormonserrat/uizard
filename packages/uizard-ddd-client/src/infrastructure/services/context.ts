import { createContext } from 'react'

import Events from '~/application/services/events'

import events from './events'
import useNodes from './hooks/useNodes'
import UseNodes from './hooks/useNodes/types'

const ServicesContext = createContext<{
  events: Events
  useNodes: UseNodes
}>({
  events,
  useNodes,
})

export default ServicesContext
