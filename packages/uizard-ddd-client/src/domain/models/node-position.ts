import { ValueObject } from '@victormonserrat/ddd'

const __name__ = 'NodePosition'

type NodePosition = ValueObject<
  typeof __name__,
  {
    x: number
    y: number
  }
>

const NodePosition = {
  fromCoordinates: (coordinates: { x: number; y: number }): NodePosition => ({
    __name__,
    value: coordinates,
  }),
} as const

export default NodePosition
