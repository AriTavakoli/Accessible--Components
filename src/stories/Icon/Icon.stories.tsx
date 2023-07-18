import React from 'react';
import Icon from '../../components/IconWrapper/Icon';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    id: {
      type: 'select',
      options: ['XL', 'search', 'ghost', 'light', 'dark'],
    },
    size: {
      control: 'number',
    },
    color: {
      control: 'color',
    },
    padding: {
      control: 'text',
    },
    title: {
      control: 'text',
    },
    transitionId: {
      control: 'text',
    },
    transitionDuration: {
      control: 'number',
    },
    onClick: { action: 'clicked' },
  },
};

const Template = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  id: ' ',
  size: 24,
  color: 'black',
  padding: '4px',
  title: 'Icon Title',
  transitionId: 'another-icon-id',
  transitionDuration: 2000,
};
