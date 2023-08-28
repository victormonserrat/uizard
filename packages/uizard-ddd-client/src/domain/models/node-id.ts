import { InvalidUuid, Uuid } from '@victormonserrat/ddd'
import Either from '@victormonserrat/either'
import NameType from '@victormonserrat/name-type'

const __name__ = 'NodeId'

type NodeId = NameType<Uuid, typeof __name__>

const NodeId = {
  fromString: (value: string): Either<InvalidUuid, NodeId> => {
    const uuid = Uuid.fromString(value)
    const isInvalidUuid = Either.isLeft(uuid)

    if (isInvalidUuid) return uuid

    return Either.right({ ...uuid.value, __name__ })
  },
} as const

export default NodeId
