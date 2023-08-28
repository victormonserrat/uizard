import Either, { Left } from '@victormonserrat/either'

import InvalidUuid from '~/exceptions/invalid-uuid'

export const expectCanNotHaveInvalidFormat = (value: Left<InvalidUuid>) => {
  const invalidUuid = InvalidUuid.causeTheFormatIsNotValid(' ')

  expect(Either.isRight(value)).toBe(false)
  expect(value.value.__name__).toBe(invalidUuid.__name__)
  expect(value.value.code).toBe(invalidUuid.code)
}

export const itCanNotHaveInvalidFormat = (...values: Left<InvalidUuid>[]) => {
  it.concurrent.each(values)(
    'can not have invalid format',
    (value: Left<InvalidUuid>) => {
      expectCanNotHaveInvalidFormat(value)
    },
  )
}
