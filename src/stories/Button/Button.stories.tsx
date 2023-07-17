import React from 'react';
import Button from '../../components/Modal/Variants/components/ButtonVariants/Button';
import { HiArrowRight } from 'react-icons/hi';

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: ['primary', 'outline', 'ghost', 'light', 'dark'],
      },
    },
    size: {
      control: {
        type: 'select',
        options: ['sm', 'base'],
      },
    },
    isDarkBg: {
      control: 'boolean',
    },
    isLoading: {
      control: 'boolean',
    },
    disabled: {
      control: 'boolean',
    },
  },
};

const Template = (args) => <Button {...args}>My Button</Button>;

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  size: 'base',
  rightIcon: HiArrowRight,
  isDarkBg: false,
  isLoading: false,
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  size: 'base',
  rightIcon: HiArrowRight,
  isDarkBg: false,
  isLoading: false,
};

export const Ghost = Template.bind({});
Ghost.args = {
  variant: 'ghost',
  size: 'base',
  rightIcon: HiArrowRight,
  isDarkBg: false,
  isLoading: false,
};

export const Light = Template.bind({});
Light.args = {
  variant: 'light',
  size: 'base',
  rightIcon: HiArrowRight,
  isDarkBg: false,
  isLoading: false,
};

export const Dark = Template.bind({});
Dark.args = {
  variant: 'dark',
  size: 'base',
  rightIcon: HiArrowRight,
  isDarkBg: false,
  isLoading: false,
};
