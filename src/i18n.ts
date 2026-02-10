import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';

i18n
  .use(HttpApi) // Load translations from a server
  .use(initReactI18next) // Passes i18n down to react-i18next
  .init({
    fallbackLng: 'en',
    lng: 'en', // Default language
    interpolation: {
      escapeValue: false, // React already safes from xss
    },
    backend: {
      loadPath: '/locales/{{lng}}/translation.json', // Path to translation files
    },
    detection: {
      order: ['queryString', 'cookie'],
      cache: ['cookie'],
    },
    react: {
      useSuspense: true,
    },
  });

i18n.dir = (lng) => (lng === 'ar' ? 'rtl' : 'ltr');

export default i18n;
