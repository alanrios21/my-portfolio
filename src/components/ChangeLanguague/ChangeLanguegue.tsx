"use client";
import { useLanguageStore } from "@/app/store/store";
import SwitchToggle from "../SwitchToggle/SwitchToggle";
import styles from "./ChangeLanguage.module.css";
import { useTranslation } from "@/Hooks/useTranslation";
import { forwardRef } from "react";

interface ChangeLanguageProps {
  showMenuLanguague: boolean;
}
const ChangeLanguage = forwardRef<HTMLDivElement, ChangeLanguageProps>(({ showMenuLanguague }, ref) => {
  // Zustand
  const { toggleLanguage, language } = useLanguageStore() as { toggleLanguage: () => void; language: string };
  const t = useTranslation();

  return (
    <div
      ref={ref}
      className={`${styles.modal} ${
        showMenuLanguague ? styles.showMenuLanguague : ""
      }`}
    >
      <span>{t.navbar.about}</span>

      <div className={styles.toggle_container}>
        <p
          style={{
            color: language === "en" ? "white" : "var(--paragraph)",
          }}
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
          style={{
            color: language === "es" ? "white" : "var(--paragraph)",
          }}
        >
          Español
        </p>
        <SwitchToggle
          id="toggle-es"
          name="es"
          checked={language === "es"}
          onChange={() => language !== "es" && toggleLanguage()}
        />
      </div>
    </div>
  );
});

ChangeLanguage.displayName = "ChangeLanguage";

export default ChangeLanguage;