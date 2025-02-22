import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useLanguageStore = create(
  persist(
    (set) => ({
      language: "en",
      scaling: false,
      viewProject: false,
      viewCopy: false,
      toggleLanguage: () =>
        set((state: { language: string }) => ({
          language: state.language === "en" ? "es" : "en",
        })),
      setScaling: (value: boolean) => set({ scaling: value }),
      setViewProject: (value: boolean) => set({ viewProject: value }),
      setViewCopy: (value: boolean) => set({ viewCopy: value }),
    }),
    {
      name: "language-store",
    }
  )
);
