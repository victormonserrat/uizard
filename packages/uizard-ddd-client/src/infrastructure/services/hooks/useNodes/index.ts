import { Entity } from '@victormonserrat/ddd'
import { useCallback } from 'react'

import Node from '~/domain/models/node'

import UseNodes from './types'

const useNodes: UseNodes = ({ setNodes }) => {
  const add = useCallback(
    async (node: Node): Promise<Node> => {
      setNodes((current) => [...current, node])

      return node
    },
    [setNodes],
  )

  const edit = useCallback(
    async (node: Node): Promise<Node> => {
      setNodes((current) => {
        const index = current.findIndex((value) => Entity.same(value, node))

        return [...current.slice(0, index), node, ...current.slice(index + 1)]
      })

      return node
    },
    [setNodes],
  )

  const remove = useCallback(
    async (node: Node): Promise<void> => {
      setNodes((current) => {
        const removing = Node.remove(node)

        return current.filter((value) => !Entity.same(value, removing))
      })
    },
    [setNodes],
  )

  return { add, edit, remove }
}

export default useNodes
