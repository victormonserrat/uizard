import { itIsNamed } from '@victormonserrat/name-type'

import MovedNode from '~/domain/events/moved-node'

describe('MovedNode', () => {
  const __name__ = 'MovedNode'
  const id = 'id'
  const position = { x: 0, y: 0 }
  const movedNode = MovedNode.with({ id, position })

  itIsNamed(movedNode)

  it.concurrent('has an id', () => {
    expect(movedNode).toHaveProperty('id')
  })

  it.concurrent('has a position', () => {
    expect(movedNode).toHaveProperty('position')
  })

  it.concurrent('can be created', () => {
    expect(movedNode.__name__).toBe(__name__)
    expect(movedNode.id).toBe(id)
    expect(movedNode.position).toBe(position)
  })
})
