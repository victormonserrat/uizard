import { itIsAValueObject } from '@victormonserrat/ddd'

import NodePosition from '~/domain/models/node-position'

describe('NodePosition', () => {
  const __name__ = 'NodePosition'
  const value = { x: 0, y: 0 }
  const position = NodePosition.fromCoordinates(value)

  itIsAValueObject(position)

  it.concurrent('can be created from string', () => {
    expect(position.__name__).toBe(__name__)
    expect(position.value).toBe(value)
  })
})
