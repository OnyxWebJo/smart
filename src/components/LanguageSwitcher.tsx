import { useTranslation } from 'react-i18next';
import { Globe } from 'lucide-react';

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="relative">
      <button
        onClick={() => changeLanguage(i18n.language === 'en' ? 'ar' : 'en')}
        className="flex items-center gap-2 text-white/70 hover:text-turquoise transition-colors duration-300"
      >
        <Globe className="w-5 h-5" />
        <span className="text-sm font-medium">
          {i18n.language === 'en' ? 'العربية' : 'English'}
        </span>
      </button>
    </div>
  );
};

export default LanguageSwitcher;
