import { itIsNamed } from '@victormonserrat/name-type'

import AddedNode from '~/domain/events/added-node'

describe('AddedNode', () => {
  const __name__ = 'AddedNode'
  const id = 'id'
  const position = { x: 0, y: 0 }
  const addedNode = AddedNode.with({ id, position })

  itIsNamed(addedNode)

  it.concurrent('has an id', () => {
    expect(addedNode).toHaveProperty('id')
  })

  it.concurrent('has a position', () => {
    expect(addedNode).toHaveProperty('position')
  })

  it.concurrent('can be created', () => {
    expect(addedNode.__name__).toBe(__name__)
    expect(addedNode.id).toBe(id)
    expect(addedNode.position).toBe(position)
  })
})
