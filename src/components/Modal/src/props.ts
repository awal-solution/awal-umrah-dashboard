import { NModal } from 'naive-ui';

export const basicProps = {
  ...NModal.props,
  // Confirm button text
  subBtuText: {
    type: String,
    default: 'Confirm',
  },
  showIcon: {
    type: Boolean,
    default: false,
  },
  width: {
    type: Number,
    default: 446,
  },
  title: {
    type: String,
    default: '',
  },
  maskClosable: {
    type: Boolean,
    default: false,
  },
  preset: {
    type: String,
    default: 'dialog',
  },
};
