import { AggregateRoot, Entity } from '@victormonserrat/ddd'

import AddedNode from '../events/added-node'
import MovedNode from '../events/moved-node'
import RemovedNode from '../events/removed-node'
import NodeId from './node-id'
import NodePosition from './node-position'

const __name__ = 'Node'

type Node = AggregateRoot<
  typeof __name__,
  NodeId,
  AddedNode | MovedNode | RemovedNode
> & {
  position: NodePosition
}

const Node = {
  moveTo: (node: Node, position: NodePosition): Node => ({
    ...node,
    __events__: [
      ...node.__events__,
      MovedNode.with({ id: node.id.value, position: position.value }),
    ],
    position,
  }),
  remove: (node: Node): Node => ({
    ...node,
    __events__: [...node.__events__, RemovedNode.withId(node.id.value)],
  }),
  with: ({ id, position }: { id: NodeId; position: NodePosition }): Node => ({
    ...Entity.with({ __name__, id }),
    __events__: [AddedNode.with({ id: id.value, position: position.value })],
    position,
  }),
} as const

export default Node
