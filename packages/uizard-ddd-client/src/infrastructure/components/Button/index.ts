import { styled } from 'styled-components'

const Button = styled.button`
  background-color: ${({ theme }) => theme.colors.white};
  border: 0.0625rem solid ${({ theme }) => theme.colors.gray300};
  border-radius: 0.5rem;
  color: ${({ theme }) => theme.colors.black};
  font-family: ${({ theme }) => theme.font.families.primary};
  font-size: ${({ theme }) => theme.font.sizes.medium};
  font-weight: ${({ theme }) => theme.font.weights.normal};
  padding: 0.75rem;

  &:active,
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray100};
  }

  &:enabled:active,
  &:enabled:hover,
  &:focus-visible {
    border-color: ${({ theme }) => theme.colors.gray400};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors.gray600};
  }
`

export default Button
