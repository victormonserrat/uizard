import AggregateRoot from '~/models/aggregate-root'
import ValueObject from '~/models/value-object'

import { itIsAnEntity } from './entity'

export const expectHasEvents = (
  value: AggregateRoot<string, ValueObject<string, number | string>>,
) => {
  expect(value).toHaveProperty('__events__')
}

export const itIsAnAggregateRoot = (
  value: AggregateRoot<string, ValueObject<string, number | string>>,
) => {
  itIsAnEntity(value)

  it.concurrent('is an aggregate root', () => {
    expectHasEvents(value)
  })
}
