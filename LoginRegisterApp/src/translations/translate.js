import { useTranslation } from 'react-i18next';
// import i18n from '../i18n'; 

export function translate(key) {
  const { t } = useTranslation();
  return t(key);
}