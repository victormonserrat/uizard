import {
  InvalidUuid,
  itCanNotHaveInvalidFormat,
  itIsAValueObject,
} from '@victormonserrat/ddd'
import Either, { Left, Right } from '@victormonserrat/either'

import NodeId from '~/domain/models/node-id'

describe('NodeId', () => {
  const __name__ = 'NodeId'
  const value = '54e31582-ce36-4a6f-ba72-81d0ae728121'
  const id = NodeId.fromString(value) as Right<NodeId>
  const invalidFormatIds = [
    NodeId.fromString(' '),
    NodeId.fromString('invalid'),
  ] as Left<InvalidUuid>[]

  itIsAValueObject(id.value)

  it.concurrent('can be created from string', () => {
    expect(Either.isRight(id)).toBe(true)
    expect(id.value.__name__).toBe(__name__)
    expect(id.value.value).toBe(value)
  })

  itCanNotHaveInvalidFormat(...invalidFormatIds)
})
