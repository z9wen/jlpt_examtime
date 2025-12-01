import { Button } from '@/components/ui/button';
import { useLanguage } from '@/i18n/LanguageContext';
import { Languages } from 'lucide-react';

export const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: 'zh' as const, label: '中文', flag: '🇨🇳' },
    { code: 'ja' as const, label: '日本語', flag: '🇯🇵' },
    { code: 'en' as const, label: 'English', flag: '🇺🇸' },
  ];

  return (
    <div className="flex items-center gap-2">
      <Languages className="w-4 h-4 text-gray-600 dark:text-gray-400" />
      <div className="flex gap-1">
        {languages.map((lang) => (
          <Button
            key={lang.code}
            variant={language === lang.code ? 'default' : 'ghost'}
            size="sm"
            onClick={() => setLanguage(lang.code)}
            className="text-xs px-2 py-1 h-auto"
          >
            <span className="mr-1">{lang.flag}</span>
            {lang.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
