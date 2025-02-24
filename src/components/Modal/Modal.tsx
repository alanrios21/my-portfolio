import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import { ReactNode } from "react";

interface ModalProps {
  isModalOpen: boolean;
  children: ReactNode;
}

const Modal = ({ isModalOpen, children }: ModalProps) => {
  if (!isModalOpen) return null;
  return createPortal(
    <div className={`${styles.overlay} z-50 bg-white`}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>,
    document.body
  );
};

export default Modal;