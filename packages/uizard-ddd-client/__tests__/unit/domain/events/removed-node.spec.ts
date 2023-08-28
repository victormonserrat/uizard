import { itIsNamed } from '@victormonserrat/name-type'

import RemovedNode from '~/domain/events/removed-node'

describe('RemovedNode', () => {
  const __name__ = 'RemovedNode'
  const id = 'id'
  const removedNode = RemovedNode.withId(id)

  itIsNamed(removedNode)

  it.concurrent('has an id', () => {
    expect(removedNode).toHaveProperty('id')
  })

  it.concurrent('can be created', () => {
    expect(removedNode.__name__).toBe(__name__)
    expect(removedNode.id).toBe(id)
  })
})
