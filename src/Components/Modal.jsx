import React from 'react'

const Modal = ({ isOpen, onClose, children }) => {

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-amber-50/30 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
                >
                    ✖
                </button>

                {children}
            </div>
        </div>
    )
}

export default Modal