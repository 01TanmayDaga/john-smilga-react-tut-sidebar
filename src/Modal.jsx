import React from "react";
import { FaTimes } from "react-icons/fa";
import { useAppContext } from "./context";

function Modal() {
  const { isModalOpen, closeModal } = useAppContext();

  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>Modal Content</h3>
        <button onClick={closeModal} className="modal-close-btn">
          <FaTimes />
        </button>
      </div>
    </div>
  );
}

export default Modal;
