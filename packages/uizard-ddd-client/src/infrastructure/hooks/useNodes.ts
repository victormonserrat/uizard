import { useContext, useState } from 'react'

import Node from '~/domain/models/node'

import ServicesContext from '../services/context'

const useNodes = () => {
  const [nodes, setNodes] = useState<Node[]>([])

  return { ...useContext(ServicesContext).useNodes({ setNodes }), nodes }
}

export default useNodes
