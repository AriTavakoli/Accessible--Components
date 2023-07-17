import React from 'react';
import Modal from '../../components/Modal/Modal-index';
import Button from '../../components/Modal/Variants/components/ButtonVariants/Button';
import { HiArrowRight } from 'react-icons/hi';
import '../../styles/globals.css';

interface ModalProps {
  focusLock: boolean;
  title: string;
  body: string;
  onClose: () => void;
  onAccept: () => void;
  onDecline: () => void;
  theme: string;
  buttonVariant: string;
  backgroundMask: boolean;
  icon: boolean;
  modalType: string;
  children: React.ReactNode;
}

export default {
  title: 'Components/Modal',
  component: Modal,
  argTypes: {
    modalType: {
      options: ['agree', 'continue'],
      control: { type: 'radio' }
    },
    buttonVariant: {
      options: ['primary', 'link', 'outline'],
      control: { type: 'radio' }
    },
  },
};

const Template: React.FC<ModalProps> = (args) => {
  return <Modal {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {
  focusLock: false,
  title: 'Sample Title',
  body: 'This is the body of the modal',
  onClose: () => { },
  onAccept: () => { },
  onDecline: () => { },
  theme: 'dark',
  buttonVariant: 'outline',
  backgroundMask: true,
  modalType: 'agree',
  children: <Button variant='primary' rightIcon={HiArrowRight} isDarkBg={false}>Primary Variant</Button>
};

