import Node from '~/infrastructure/components/Node'
import { render } from '~/test/testing-library'

describe('Node', () => {
  it('renders correctly', () => {
    const { container } = render(<Node />)

    expect(container).toMatchSnapshot('Default')
  })

  it('renders grabbed correctly', () => {
    const { container } = render(<Node aria-current />)

    expect(container).toMatchSnapshot('Grabbed')
  })
})
