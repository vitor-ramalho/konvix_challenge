import { Modal } from 'antd';
import React from 'react';

interface CustomModalProps {
  visible: boolean;
  onOk: () => void;
  onCancel: () => void;
  title: string;
  children: React.ReactNode;
}

const CustomModal: React.FC<CustomModalProps> = ({ visible, onOk, onCancel, title, children }) => {
  return (
    <Modal visible={visible} onOk={onOk} onCancel={onCancel} title={title}>
      {children}
    </Modal>
  );
};

export default CustomModal;
