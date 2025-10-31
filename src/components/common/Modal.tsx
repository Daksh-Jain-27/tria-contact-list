// src/components/common/Modal.tsx
import type { ReactNode } from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
}

export const Modal = ({ isOpen, onClose, title, children }: ModalProps) => {
  if (!isOpen) return null;

  return (
    // Backdrop
    <div 
      onClick={onClose}
      className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50"
    >
      {/* Modal Content */}
      <div 
        onClick={(e) => e.stopPropagation()} // Prevents closing modal when clicking inside
        className="relative w-full max-w-md p-6 bg-white rounded-lg shadow-xl"
      >
        <div className="flex items-center justify-between pb-4 border-b">
          <h3 className="text-xl font-semibold">{title}</h3>
          <button onClick={onClose} className="text-2xl text-gray-500 hover:text-gray-800">&times;</button>
        </div>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};