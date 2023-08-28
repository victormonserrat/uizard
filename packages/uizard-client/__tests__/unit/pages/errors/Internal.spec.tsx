import InternalError from '~/pages/errors/Internal'
import { render } from '~/test/testing-library'

describe('InternalError', () => {
  it('renders correctly', () => {
    const { container } = render(<InternalError />)

    expect(container).toMatchSnapshot('Default')
  })
})
