import Either, { Left, Right } from '@victormonserrat/either'

import InvalidId from '~/exceptions/invalid-id'
import Id from '~/models/id'
import { itCanNotBeBlank } from '~/test/closures/id'
import { itIsAValueObject } from '~/test/closures/value-object'

describe('Id', () => {
  const __name__ = 'Id'
  const value = 'value'
  const id = Id.fromValue(value) as Right<Id<string>>
  const blankId = Id.fromValue(' ') as Left<InvalidId>

  itIsAValueObject(id.value)

  it.concurrent('can be created from number', () => {
    const numericValue = 0
    const numericId = Id.fromValue(numericValue) as Right<Id<number>>

    expect(Either.isRight(numericId)).toBe(true)
    expect(numericId.value.__name__).toBe(__name__)
    expect(numericId.value.value).toBe(numericValue)
  })

  it.concurrent('can be created from string', () => {
    expect(Either.isRight(id)).toBe(true)
    expect(id.value.__name__).toBe(__name__)
    expect(id.value.value).toBe(value)
  })

  itCanNotBeBlank(blankId)
})
