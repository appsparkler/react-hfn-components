import React from 'react'
import {Button} from '@storybook/react/demo'
import {withA11y} from '@storybook/addon-a11y'

export default {
  title: 'Button',
  decorators: [withA11y],
}

export const withText = () => <Button>Hello Button</Button>

export const withEmoji = () => (
  <Button>
    <span role="img" aria-label="so cool">
      😀 😎 👍 💯
    </span>
  </Button>
)
