import Either from '@victormonserrat/either'
import NameType from '@victormonserrat/name-type'
import LibUuid from '@victormonserrat/uuid'

import InvalidUuid from '~/exceptions/invalid-uuid'

import Id from './id'

const __name__ = 'Uuid'

type Uuid = NameType<Id<string>, typeof __name__>

const Uuid = {
  fromString: (value: string): Either<InvalidUuid, Uuid> => {
    const id = Id.fromValue(value)
    const isInvalidId = Either.isLeft(id)
    const isInvalidUuid = isInvalidId || !LibUuid.validate(value)

    if (isInvalidUuid)
      return Either.left(InvalidUuid.causeTheFormatIsNotValid(value))

    return Either.right({ ...id.value, __name__ })
  },
} as const

export default Uuid
