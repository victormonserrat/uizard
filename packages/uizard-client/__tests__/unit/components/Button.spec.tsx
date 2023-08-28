import Button from '~/components/Button'
import { render } from '~/test/testing-library'

describe('Button', () => {
  it('renders correctly', () => {
    const { container } = render(<Button />)

    expect(container).toMatchSnapshot('Default')
  })

  it('renders disabled correctly', () => {
    const { container } = render(<Button disabled />)

    expect(container).toMatchSnapshot('Disabled')
  })
})
