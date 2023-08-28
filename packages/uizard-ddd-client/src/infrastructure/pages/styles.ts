import { styled } from 'styled-components'

import DefaultNode from '~/infrastructure/components/Node'
import media from '~/infrastructure/styles/media'

import { NodeProps } from './types'

export const Controls = styled.div`
  display: grid;
  gap: 0.5rem;

  ${media.small} {
    gap: 1rem;
    grid-auto-flow: column;
    justify-content: center;
  }
`

export const Main = styled.main`
  bottom: 0;
  left: 0;
  padding: 1rem;
  position: absolute;
  right: 0;
  top: 0;

  ${media.small} {
    padding: 2rem;
  }
`

export const Node = styled(DefaultNode)<NodeProps>`
  cursor: ${({ $dragging }) => ($dragging ? 'grabbing' : 'grab')};
  position: absolute;

  &[aria-current='true'] {
    z-index: 1;
  }
`
