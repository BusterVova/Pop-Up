import React, { useEffect } from "react";
import "./Modal.scss";
import CloseIcon from "../Icons/CloseIcon";

const Modal = ({ children, onClose }) => {
  const closeModal = (e) => {
    const isModalWrapper = e.target.classList.contains("modal");

    const isEsc = e.key === "Escape";
    if (isModalWrapper || isEsc) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", closeModal);

    return () => {
      document.removeEventListener("keydown", closeModal);
    };
  }, []);

  return (
    <div className="modal" onClick={closeModal}>
      <div className="modal-content">
        <div className="test">
          <div className="close-container">
            <button onClick={onClose} className="modal-content__close">
              <CloseIcon />
            </button>
          </div>
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
