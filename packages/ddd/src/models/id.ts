import Either from '@victormonserrat/either'

import InvalidId from '~/exceptions/invalid-id'

import ValueObject from './value-object'

const __name__ = 'Id'

type Id<Type extends number | string = number | string> = ValueObject<
  typeof __name__,
  Type
>

const Id = {
  fromValue: <Type extends number | string>(
    value: Type,
  ): Either<InvalidId, Id<Type>> => {
    const isBlank = !value.toString().trim()

    if (isBlank) return Either.left(InvalidId.causeIsBlank())

    return Either.right(ValueObject.with({ __name__, value }))
  },
} as const

export default Id
