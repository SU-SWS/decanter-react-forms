import React from 'react';
import { IdentityBar } from './IdentityBar';
import { Logo } from '../Logo/Logo';
import { withDesign } from 'storybook-addon-designs';
import { IdentityBarColors } from './IdentityBar.levers';

export default {
  title: 'Stanford Identity/Identity Bar',
  decorators: [withDesign],
  component: IdentityBar,
  subcomponents: { Logo },
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: IdentityBarColors
      }
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=1%3A23'
    },
    jest: [
      'IdentityBar.test.js'
    ]
  }
};

// Set up an Alert Template.
const IdentityBarTemplate = (props) => <IdentityBar {...props} />;

export const Default = IdentityBarTemplate.bind({});
Default.args = {
  color: 'cardinal-red',
};
Default.storyName = 'Cardinal Red'

export const DigitalRed = IdentityBarTemplate.bind({});
DigitalRed.args = {
  color: 'digital-red',
};
DigitalRed.storyName = 'Digital Red'

export const Black = IdentityBarTemplate.bind({});
Black.args = {
  color: 'black',
};

export const White = IdentityBarTemplate.bind({});
White.args = {
  color: 'white',
};