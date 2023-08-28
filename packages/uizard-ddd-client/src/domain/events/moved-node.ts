import NameType, { UnnameType } from '@victormonserrat/name-type'

const __name__ = 'MovedNode'

type MovedNode = NameType<
  Readonly<{
    id: string
    position: {
      x: number
      y: number
    }
  }>,
  typeof __name__
>

const MovedNode = {
  with: ({ id, position }: UnnameType<MovedNode>): MovedNode => ({
    __name__,
    id,
    position,
  }),
} as const

export default MovedNode
