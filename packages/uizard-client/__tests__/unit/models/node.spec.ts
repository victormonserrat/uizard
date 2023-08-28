import Node from '~/models/node'

describe('Node', () => {
  const id = '54e31582-ce36-4a6f-ba72-81d0ae728121'
  const position = { x: 0, y: 0 }
  const node = Node.with({ id, position })

  it.concurrent('has an id', () => {
    expect(node).toHaveProperty('position')
  })

  it.concurrent('has a position', () => {
    expect(node).toHaveProperty('position')
  })

  it.concurrent('can be created', () => {
    expect(node.id).toBe(id)
    expect(node.position).toBe(position)
  })

  it.concurrent('can be moved', () => {
    const differentPosition = { x: 1, y: 1 }
    const movedNode = Node.moveTo(node, differentPosition)

    expect(movedNode.position).toBe(differentPosition)
  })
})
