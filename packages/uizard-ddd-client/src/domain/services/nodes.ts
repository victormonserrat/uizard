import Node from '../models/node'

type Nodes = Readonly<{
  add(node: Node): Promise<Node>
  edit(node: Node): Promise<Node>
  remove(node: Node): Promise<void>
}>

export default Nodes
