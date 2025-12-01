import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import type { JLPTLevel } from '@/types/exam';
import { useLanguage } from '@/i18n/LanguageContext';

interface ImportantNotesProps {
  selectedLevel: JLPTLevel;
}

export const ImportantNotes = ({ selectedLevel }: ImportantNotesProps) => {
  const { t } = useLanguage();
  
  return (
    <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
      <CardHeader>
        <CardTitle className="text-amber-900 dark:text-amber-100">{t.importantNotes}</CardTitle>
      </CardHeader>
      <CardContent className="text-amber-900 dark:text-amber-100 space-y-2">
        <p>{t.note1}</p>
        {selectedLevel === 'N1' || selectedLevel === 'N2' ? (
          <p>{t.note2N1N2.replace('{level}', selectedLevel)}</p>
        ) : (
          <p>{t.note2N3N4N5.replace('{level}', selectedLevel)}</p>
        )}
        <p>{t.note3}</p>
        <p>{t.note4}</p>
      </CardContent>
    </Card>
  );
};
