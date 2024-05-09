import React, { useState, useEffect } from "react";

const CustomModal = ({ isOpen, onClose, children }) => {
  const [modalOpen, setModalOpen] = useState(isOpen);

  useEffect(() => {
    setModalOpen(isOpen);
  }, [isOpen]);

  const handleClose = () => {
    onClose();
  };

  return (
    <>
      {modalOpen && (
        <div
          className="absolute inset-0 flex items-center justify-center z-50"
          onClick={handleClose}
        >
          <div
            className="bg-white rounded-lg overflow-hidden transform transition-transform duration-300 ease-in-out w-full max-w-full md:max-w-lg lg:max-w-xl"
            style={{ height: "100vh", marginTop: "50%" }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-0 right-0 p-2"
            >
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
            <div className="p-8">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default CustomModal;
