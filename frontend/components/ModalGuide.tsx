import React from 'react';
import { Modal, Card } from '@heroui/react';

/**
 * ModalGuide - Guided modal for onboarding, setup, or contextual help
 * @see https://www.heroui.com/docs/components/modal
 */

export interface ModalGuideProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
}

const ModalGuide: React.FC<ModalGuideProps> = ({ open, onClose, title, children }) => (
  <Modal isOpen={open} onOpenChange={(isOpen) => { if (!isOpen) onClose(); }}>
    <Card className="max-w-lg mx-auto p-6">
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div>{children}</div>
      <div className="mt-6 text-right">
        <button className="px-4 py-2 rounded bg-blue-600 text-white" onClick={onClose}>Close</button>
      </div>
    </Card>
  </Modal>
);

export default ModalGuide;
