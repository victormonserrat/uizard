import { Dispatch, SetStateAction } from 'react'

import Node from '~/domain/models/node'
import Nodes from '~/domain/services/nodes'

type UseNodes = (props: { setNodes: Dispatch<SetStateAction<Node[]>> }) => Nodes

export default UseNodes
