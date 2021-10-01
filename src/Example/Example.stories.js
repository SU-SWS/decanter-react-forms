import React from 'react';
import { withDesign } from 'storybook-addon-designs';
import { Example } from './Example';

const exampleBody = (
  <p className="last:su-mb-0 su-leading-display su-card-paragraph">
    This is an example. There are many like it but this is mine.
  </p>
);

export default {
  title: 'Examples/Example',
  decorators: [withDesign],
  component: Example,
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/Kmd4utmJFPRMVeCFEEBQhLtx/Decanter-Design-System?node-id=8095%3A0',
    },
    docs: {
      description: {
        component: 'This is just a test.',
      },
    },
  },
};

// Set up an Example Template.
const ExampleTemplate = ({ children, ...rest }) => (
  <Example {...rest}>{children}</Example>
);

// Default State
// /////////////////////////////////////////////////////////////////////////////
export const Default = ExampleTemplate.bind({});
Default.args = {
  children: exampleBody,
};

export const Styled = ExampleTemplate.bind({});
Styled.args = {
  children: exampleBody,
  className: 'su-bg-digital-green su-text-white',
};
