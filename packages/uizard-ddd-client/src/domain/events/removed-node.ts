import NameType from '@victormonserrat/name-type'

const __name__ = 'RemovedNode'

type RemovedNode = NameType<
  Readonly<{
    id: string
  }>,
  typeof __name__
>

const RemovedNode = {
  withId: (id: string): RemovedNode => ({
    __name__,
    id,
  }),
} as const

export default RemovedNode
