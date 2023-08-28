import { itIsNamed } from '@victormonserrat/name-type'

import ValueObject from '~/models/value-object'
import { expectHasAValue } from '~/test/closures/value-object'

describe('ValueObject', () => {
  const __name__ = 'ValueObject'
  const value = 'value'
  const differentName = 'DifferentValueObject'
  const differentValue = 'different'
  const valueObject = ValueObject.with({ __name__, value })

  itIsNamed(valueObject)

  it.concurrent('has a value', () => {
    expectHasAValue(valueObject)
  })

  it.concurrent('can be created', () => {
    expect(valueObject.__name__).toBe(__name__)
    expect(valueObject.value).toBe(value)
  })

  it.concurrent(
    'checks that different value objects with different values are not equal',
    () => {
      const differentValueObjectWithDifferentValue = ValueObject.with({
        __name__: differentName,
        value: differentValue,
      })

      expect(
        ValueObject.equals(valueObject, differentValueObjectWithDifferentValue),
      ).toBe(false)
    },
  )

  it.concurrent(
    'checks that different value objects with same values are not equal',
    () => {
      const differentValueObjectWithSameValue = ValueObject.with({
        __name__: differentName,
        value,
      })

      expect(
        ValueObject.equals(valueObject, differentValueObjectWithSameValue),
      ).toBe(false)
    },
  )

  it.concurrent(
    'checks that same value objects with different values are not equal',
    () => {
      const valueObjectWithDifferentValue = ValueObject.with({
        __name__,
        value: differentValue,
      })

      expect(
        ValueObject.equals(valueObject, valueObjectWithDifferentValue),
      ).toBe(false)
    },
  )

  it.concurrent(
    'checks that same value objects with same values are equal',
    () => {
      expect(ValueObject.equals(valueObject, { ...valueObject })).toBe(true)
    },
  )
})
