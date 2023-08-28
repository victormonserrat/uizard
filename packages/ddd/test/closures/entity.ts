import { expectIsNamed } from '@victormonserrat/name-type'

import Entity from '~/models/entity'
import ValueObject from '~/models/value-object'

export const expectHasAnId = (
  value: Entity<string, ValueObject<string, number | string>>,
) => {
  expect(value).toHaveProperty('id')
}

export const itIsAnEntity = (
  value: Entity<string, ValueObject<string, number | string>>,
) => {
  it.concurrent('is an entity', () => {
    expectIsNamed(value)
    expectHasAnId(value)
  })
}
