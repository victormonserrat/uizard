import type { Meta, StoryObj } from '@storybook/react'

import Node from '~/components/Node'

const meta: Meta<typeof Node> = {
  argTypes: {
    'aria-current': {
      control: { type: 'boolean' },
    },
  },
  component: Node,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Atoms/Node',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
