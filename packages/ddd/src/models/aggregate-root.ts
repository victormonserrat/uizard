import { NamedType } from '@victormonserrat/name-type'

import Entity from './entity'
import ValueObject from './value-object'

type AggregateRoot<
  Name extends string,
  Id extends ValueObject<string, number | string> = ValueObject<
    string,
    number | string
  >,
  Event extends NamedType = NamedType,
> = Entity<Name, Id> &
  Readonly<{
    __events__: Event[]
  }>

const AggregateRoot = {
  commit: <
    A extends AggregateRoot<Name, Id, Event>,
    Name extends string,
    Id extends ValueObject<string, number | string>,
    Event extends NamedType = NamedType,
  >(
    aggregateRoot: A,
  ): A => ({ ...aggregateRoot, __events__: [] }),
  with: <
    Name extends string,
    Id extends ValueObject<string, number | string>,
    Event extends NamedType = NamedType,
  >({
    __name__,
    id,
    ...props
  }: AggregateRoot<Name, Id, Event>): AggregateRoot<Name, Id, Event> => ({
    ...Entity.with({ __name__, id }),
    ...props,
  }),
} as const

export default AggregateRoot
