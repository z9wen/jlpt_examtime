import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2 } from 'lucide-react';
import type { ExamStage, JLPTLevel } from '@/types/exam';
import { useLanguage } from '@/i18n/LanguageContext';

interface ExamScheduleProps {
  examStages: ExamStage[];
  currentStageIndex: number;
  isRunning: boolean;
  selectedLevel: JLPTLevel;
}

export const ExamSchedule = ({
  examStages,
  currentStageIndex,
  isRunning,
  selectedLevel,
}: ExamScheduleProps) => {
  const { t } = useLanguage();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>{t.examSchedule}</CardTitle>
        <CardDescription>{t.examScheduleDesc.replace('{level}', selectedLevel)}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {examStages.map((stage, index) => (
            <div
              key={stage.id}
              className={`flex items-center justify-between p-4 rounded-lg border-2 transition-all ${
                index === currentStageIndex && isRunning
                  ? 'border-blue-500 bg-blue-50 dark:bg-blue-950'
                  : index < currentStageIndex && isRunning
                  ? 'border-green-500 bg-green-50 dark:bg-green-950'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
            >
              <div className="flex items-center gap-4">
                <div className="flex flex-col items-center">
                  {index < currentStageIndex && isRunning ? (
                    <CheckCircle2 className="w-6 h-6 text-green-600" />
                  ) : index === currentStageIndex && isRunning ? (
                    <div className="w-6 h-6 rounded-full bg-blue-600 animate-pulse" />
                  ) : (
                    <div className="w-6 h-6 rounded-full border-2 border-gray-300 dark:border-gray-600 flex items-center justify-center text-xs">
                      {index + 1}
                    </div>
                  )}
                </div>
                <div>
                  <div className="font-semibold">{t[stage.nameKey]}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{t[stage.descKey]}</div>
                </div>
              </div>
              <Badge variant={stage.type === 'exam' ? 'default' : 'secondary'}>
                {stage.duration} {t.minutes}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
