import React from 'react';

/**
 * ModalGuide - Accessible modal dialog for onboarding and settings
 * Uses HeroUI/Tailwind for styling and accessibility
 * @see https://www.heroui.com/docs/components/modal
 */
export interface ModalGuideProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}

const ModalGuide: React.FC<ModalGuideProps> = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6 relative" role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
          aria-label="Close modal"
        >
          <span aria-hidden="true">&times;</span>
        </button>
        {title && <h2 id="modal-title" className="text-xl font-bold mb-4">{title}</h2>}
        <div>{children}</div>
      </div>
    </div>
  );
};

export default ModalGuide;
