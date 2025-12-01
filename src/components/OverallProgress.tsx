import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { Clock, CheckCircle2 } from 'lucide-react';
import type { ExamStage, JLPTLevel } from '@/types/exam';
import { useLanguage } from '@/i18n/LanguageContext';

interface OverallProgressProps {
  progress: number;
  examStages: ExamStage[];
  currentStageIndex: number;
  isRunning: boolean;
  selectedLevel: JLPTLevel;
}

export const OverallProgress = ({
  progress,
  examStages,
  currentStageIndex,
  isRunning,
  selectedLevel,
}: OverallProgressProps) => {
  const { t } = useLanguage();
  
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5" />
          {t.overallProgress} {isRunning && <Badge variant="outline">{selectedLevel}</Badge>}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="h-3" />
        <div className="mt-4 flex justify-between text-sm text-gray-600 dark:text-gray-400">
          {examStages.map((stage, index) => (
            <div key={stage.id} className="flex flex-col items-center">
              {index < currentStageIndex ? (
                <CheckCircle2 className="w-4 h-4 text-green-600 mb-1" />
              ) : index === currentStageIndex ? (
                <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse mb-1" />
              ) : (
                <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 mb-1" />
              )}
              <span className="text-xs text-center">{t[stage.nameKey].split('（')[0]}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};
