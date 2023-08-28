import { styled } from 'styled-components'

const Node = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  border: 0.25rem solid transparent;
  border-radius: 0.5rem;
  height: 8rem;
  width: 8rem;

  &[aria-current='true'] {
    border-color: ${({ theme }) => theme.colors.secondary};
  }
`

export default Node
