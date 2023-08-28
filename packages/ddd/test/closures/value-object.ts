import { expectIsNamed } from '@victormonserrat/name-type'

import ValueObject from '~/models/value-object'

export const expectHasAValue = (value: ValueObject<string>) => {
  expect(value).toHaveProperty('value')
}

export const itIsAValueObject = (value: ValueObject<string>) => {
  it.concurrent('is a value object', () => {
    expectIsNamed(value)
    expectHasAValue(value)
  })
}
