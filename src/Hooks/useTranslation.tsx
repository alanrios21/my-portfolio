import { useLanguageStore } from "@/app/store/store";
import { translations } from "@/utils/translations/translations";

type Language = 'es' | 'en';
type Translations = typeof translations;

export const useTranslation = () => {
  const { language } = useLanguageStore() as { language: Language };
  return translations[language as keyof Translations];
};