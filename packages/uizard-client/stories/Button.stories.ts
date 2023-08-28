import type { Meta, StoryObj } from '@storybook/react'

import Button from '~/components/Button'

const meta: Meta<typeof Button> = {
  args: {
    children: 'Button',
  },
  argTypes: {
    disabled: {
      control: { type: 'boolean' },
    },
    onClick: {},
  },
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  title: 'Atoms/Button',
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
