import NameType, { UnnameType } from '@victormonserrat/name-type'

const __name__ = 'AddedNode'

type AddedNode = NameType<
  Readonly<{
    id: string
    position: {
      x: number
      y: number
    }
  }>,
  typeof __name__
>

const AddedNode = {
  with: ({ id, position }: UnnameType<AddedNode>): AddedNode => ({
    __name__,
    id,
    position,
  }),
} as const

export default AddedNode
