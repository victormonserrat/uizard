import { NamedType } from '@victormonserrat/name-type'

import AggregateRoot from '~/models/aggregate-root'
import ValueObject from '~/models/value-object'
import { expectHasEvents } from '~/test/closures/aggregate-root'
import { itIsAnEntity } from '~/test/closures/entity'

describe('AggregateRoot', () => {
  const __name__ = 'AggregateRoot'
  const id = ValueObject.with({ __name__: 'Id', value: 'value' })
  const __events__: NamedType[] = []
  const aggregateRoot = AggregateRoot.with({
    __events__,
    __name__,
    id,
  })

  itIsAnEntity(aggregateRoot)

  it.concurrent('has events', () => {
    expectHasEvents(aggregateRoot)
  })

  it.concurrent('can be created', () => {
    expect(aggregateRoot.__name__).toBe(__name__)
    expect(aggregateRoot.id).toBe(id)
    expect(aggregateRoot.__events__).toBe(__events__)
  })

  it.concurrent('commits events', () => {
    const commited = AggregateRoot.commit(aggregateRoot)

    expect(commited.__events__).toStrictEqual([])
  })
})
