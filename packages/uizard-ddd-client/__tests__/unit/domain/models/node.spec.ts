import { itIsAnAggregateRoot } from '@victormonserrat/ddd'

import Node from '~/domain/models/node'
import NodeId from '~/domain/models/node-id'
import NodePosition from '~/domain/models/node-position'

describe('Node', () => {
  const __name__ = 'Node'
  const idValue = '54e31582-ce36-4a6f-ba72-81d0ae728121'
  const id = NodeId.fromString(idValue).value as NodeId
  const position = NodePosition.fromCoordinates({ x: 0, y: 0 })
  const node = Node.with({ id, position })

  itIsAnAggregateRoot(node)

  it.concurrent('has a position', () => {
    expect(node).toHaveProperty('position')
  })

  it.concurrent('can be created', () => {
    expect(node.__name__).toBe(__name__)
    expect(node.id).toBe(id)
    expect(node.position).toBe(position)
  })

  it.concurrent('can be moved', () => {
    const differentPosition = NodePosition.fromCoordinates({ x: 1, y: 1 })
    const movedNode = Node.moveTo(node, differentPosition)

    expect(movedNode.position).toBe(differentPosition)
  })
})
