import RippleButton from '../../components/RippleButton/rippleButton-index';
import './bubble.module.scss'
import './button.scss'

export default {
  title: 'Components/RippleButton',
  component: RippleButton,
  argTypes: {
    outlineColor: {
        options: ['grey', 'orange', 'blue', 'green', 'red', 'purple',  'white'],
        control: { type: 'radio' }
    },

    shape: {
      options: ['square', 'rounded'],
      control: { type: 'radio' }
    },
    dot: {
      control: 'boolean',
    },
    dotColor: {
      options: [ 'orange', 'blue', 'green', 'red', 'purple',  'white'],
      control: { type: 'radio' }
    },

    selected: {
      control: 'boolean',
    },
    text: {
      control: 'text',
    },
    custom: {
      control: 'boolean',
    },
    customColor: {
      control: 'color',
    },
    padding: {
      control: 'text',
    },

    callBack: { action: 'clicked' },
  },
};

const Template = (args) => <RippleButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  outlineColor: '',
  shape: 'round',
  dot: false,
  dotColor: '#f00',
  selected: false,
  text: 'Button Text',
  custom: false,
  customColor: '#00f',
  padding: '10px',
};
