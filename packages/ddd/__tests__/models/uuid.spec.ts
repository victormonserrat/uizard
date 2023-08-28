import Either, { Left, Right } from '@victormonserrat/either'

import InvalidUuid from '~/exceptions/invalid-uuid'
import Uuid from '~/models/uuid'
import { itCanNotHaveInvalidFormat } from '~/test/closures/uuid'
import { itIsAValueObject } from '~/test/closures/value-object'

describe('Uuid', () => {
  const __name__ = 'Uuid'
  const value = '54e31582-ce36-4a6f-ba72-81d0ae728121'
  const uuid = Uuid.fromString(value) as Right<Uuid>
  const invalidFormatUuids = [
    Uuid.fromString(' '),
    Uuid.fromString('invalid'),
  ] as Left<InvalidUuid>[]

  itIsAValueObject(uuid)

  it.concurrent('can be created from string', () => {
    expect(Either.isRight(uuid)).toBe(true)
    expect(uuid.value.__name__).toBe(__name__)
    expect(uuid.value.value).toBe(value)
  })

  itCanNotHaveInvalidFormat(...invalidFormatUuids)
})
