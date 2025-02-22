"use client";
import Translate from "@/assets/Translate";
import styles from "./BtnLanguague.module.css";
import Modal from "../Modal/Modal";
import { useEffect, useRef, useState } from "react";
import { useLanguageStore } from "@/app/store/store";
import { useTranslation } from "@/Hooks/useTranslation";
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import { buttonTranslateAnimate } from "@/utils/animationGsap/AnimationGsap";

const ButtonLanguague = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const t = useTranslation();
  const buttonTranslateRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const { toggleLanguage, language } = useLanguageStore() as { toggleLanguage: () => void; language: string };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    if (buttonTranslateRef.current) {
      buttonTranslateAnimate({ buttonTranslateRef });
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isModalOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen]);

  return (
    <>
      <div
        className={styles.container}
        onClick={openModal}
        ref={buttonTranslateRef}
      >
        <button aria-label="button-translate" className={styles.button}>
          <Translate width="15px" height="15px" />
        </button>
      </div>
      {isModalOpen && (
        <Modal isModalOpen={isModalOpen} onClose={closeModal} >
          <div className={styles.modal} ref={modalRef} >
            <span>
              {t.language.changeLanguege}{" "}
              <button className={styles.closeButton} onClick={closeModal}>
                &times;
              </button>
            </span>

            <div className={styles.toggle_container}>
              <p style={{ color: "black" }}
                
              >
                English
              </p>
              <SwitchToggle
                id="toggle-en"
                name="en"
                checked={language === "en"}
                onChange={() => language !== "en" && toggleLanguage()}
              />
            </div>

            <div className={styles.toggle_container}>
              <p 
                style={{ color: "black" }}
              >
                Español
              </p>
              <SwitchToggle
                id="toggle-es"
                name="es"
                checked={language === "es"}
                onChange={() => language !== "es" && toggleLanguage() }
              />
            </div>
          </div>
        </Modal>
      )}
    </>
  );
};

export default ButtonLanguague;
