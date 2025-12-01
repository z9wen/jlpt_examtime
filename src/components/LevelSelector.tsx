import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { EXAM_STAGES, type JLPTLevel } from '@/types/exam';
import { useLanguage } from '@/i18n/LanguageContext';

interface LevelSelectorProps {
  selectedLevel: JLPTLevel;
  onLevelChange: (level: JLPTLevel) => void;
}

export const LevelSelector = ({ selectedLevel, onLevelChange }: LevelSelectorProps) => {
  const { t } = useLanguage();
  const levels: JLPTLevel[] = ['N1', 'N2', 'N3', 'N4', 'N5'];

  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.selectLevel}</CardTitle>
        <CardDescription>{t.selectLevelDesc}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex gap-3 justify-center flex-wrap">
          {levels.map((level) => {
            const stages = EXAM_STAGES[level];
            const totalTime = stages.reduce((sum, stage) => sum + stage.duration, 0);
            return (
              <Button
                key={level}
                variant={selectedLevel === level ? 'default' : 'outline'}
                size="lg"
                onClick={() => onLevelChange(level)}
                className="flex flex-col h-auto py-4 px-6"
              >
                <span className="text-2xl font-bold">{level}</span>
                <span className="text-xs opacity-80">{totalTime}{t.minutes}</span>
              </Button>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
};
