import React from 'react';
import Icon from '../../components/IconWrapper/Icon';
import RippleButton from '../../components/RippleButton/rippleButton-index';

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    id: {

        options: ['search', 'XL', 'plus', 'refresh', 'red', 'purple',  'white'],
        control: { type: 'radio' }
    },
    size: {
      control: 'number',
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

const Template = (args) => <Icon {...args} />

export const Default = Template.bind({});
Default.args = {
  id: 'search',
  size: '24px',
  padding: '4px',
  title: 'Icon Title',
  transitionId: 'check',
  transitionDuration: 2000,
};

