import React from 'react'

const Modal = ({ isOpen, onClose, children, titleId = 'dialog-title' }) => {
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50" role="presentation" onClick={onClose}>
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby={titleId}
                className="bg-white p-6 rounded-xl shadow-lg w-96 relative"
                onClick={e => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    aria-label="Close dialog"
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                    ✖
                </button>
                {children}
            </div>
        </div>
    );
};


export default Modal