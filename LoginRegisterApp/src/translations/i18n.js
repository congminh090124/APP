import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import vi from './translations/vi.json';

i18n
  .use(initReactI18next) 
  .init({
    resources: {
      en: { translation: en },
      vi: { translation: vi }
    },
    lng: 'en', // Ngôn ngữ mặc định
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false 
    }
  });

export default i18n;