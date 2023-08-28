import Index from '~/infrastructure/pages'
import { render, userEvent } from '~/test/testing-library'

describe('Index', () => {
  it('renders correctly', () => {
    const { container } = render(<Index />)

    expect(container).toMatchSnapshot('Default')
  })

  it('has no nodes by default', async () => {
    const screen = render(<Index />)
    const node = screen.queryByLabelText('nodes.draggable')

    expect(node).not.toBeInTheDocument()
  })

  it('adds nodes', async () => {
    const screen = render(<Index />)
    const add = screen.getByText('nodes.add')

    await userEvent.click(add)

    const node = screen.getByLabelText('nodes.draggable')

    expect(node).toBeVisible()
  })

  it('drags nodes', async () => {
    const screen = render(<Index />)
    const add = screen.getByText('nodes.add')
    const main = screen.getByRole('main')

    await userEvent.click(add)

    const node = screen.getByLabelText('nodes.draggable')

    await userEvent.pointer([
      {
        keys: '[MouseLeft>]',
        target: node,
      },
    ])
    expect(node).toHaveAttribute('aria-label', 'nodes.dragging')
    await userEvent.pointer([
      {
        keys: '[MouseLeft>]',
        target: node,
      },
      {
        coords: { x: 0, y: 0 },
        pointerName: 'mouse',
        target: main,
      },
      {
        keys: '[/MouseLeft]',
        target: node,
      },
    ])
    expect(node).toHaveAttribute('aria-label', 'nodes.draggable')
    expect(node).toHaveAttribute('aria-current', 'true')
    expect(node).toHaveStyle('left: 0px')
    expect(node).toHaveStyle('top : 0px')
  })

  it('grabs nodes', async () => {
    const screen = render(<Index />)
    const add = screen.getByText('nodes.add')

    await userEvent.click(add)

    const node = screen.getByLabelText('nodes.draggable')

    expect(node).toHaveAttribute('aria-current', 'false')
    await userEvent.click(node)
    expect(node).toHaveAttribute('aria-current', 'true')
  })

  it('ungrabs nodes', async () => {
    const screen = render(<Index />)
    const add = screen.getByText('nodes.add')
    const main = screen.getByRole('main')

    await userEvent.click(add)

    const node = screen.getByLabelText('nodes.draggable')

    await userEvent.click(node)
    await userEvent.click(main)
    expect(node).toHaveAttribute('aria-current', 'false')
  })

  it('removes nodes', async () => {
    const screen = render(<Index />)
    const add = screen.getByText('nodes.add')
    const remove = screen.getByText('nodes.remove')

    await userEvent.click(add)

    const node = screen.getByLabelText('nodes.draggable')

    await userEvent.click(node)
    await userEvent.click(remove)
    expect(node).not.toBeInTheDocument()
  })

  it('can not remove a node when it is has not been grabbed', async () => {
    const screen = render(<Index />)
    const remove = screen.getByText('nodes.remove')

    expect(remove).toBeDisabled()
  })
})
