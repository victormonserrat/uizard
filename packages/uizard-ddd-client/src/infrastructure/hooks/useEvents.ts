import { useContext } from 'react'

import ServicesContext from '../services/context'

const useEvents = () => useContext(ServicesContext).events

export default useEvents
