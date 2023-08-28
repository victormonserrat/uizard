type Node = Readonly<{
  id: string
  position: {
    x: number
    y: number
  }
}>

const Node = {
  moveTo: (node: Node, position: Node['position']): Node => ({
    ...node,
    position,
  }),
  with: (node: Node): Node => node,
} as const

export default Node
