import Either, { Left } from '@victormonserrat/either'

import InvalidId from '~/exceptions/invalid-id'

export const expectCanNotBeBlank = (value: Left<InvalidId>) => {
  const invalidId = InvalidId.causeIsBlank()

  expect(Either.isRight(value)).toBe(false)
  expect(value.value.__name__).toBe(invalidId.__name__)
  expect(value.value.code).toBe(invalidId.code)
}

export const itCanNotBeBlank = (...values: Left<InvalidId>[]) => {
  it.concurrent.each(values)('can not be blank', (value: Left<InvalidId>) => {
    expectCanNotBeBlank(value)
  })
}
