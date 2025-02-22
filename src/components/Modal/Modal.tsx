import { createPortal } from "react-dom";
import styles from "./Modal.module.css";

import { ReactNode } from "react";

interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ isModalOpen, onClose, children }: ModalProps) => {
  if (!isModalOpen) return null;
  return createPortal(
    <div className={`${styles.overlay} z-50 bg-white`} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;