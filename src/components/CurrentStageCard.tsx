import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Play, Pause, RotateCcw } from 'lucide-react';
import type { ExamStage } from '@/types/exam';
import { useLanguage } from '@/i18n/LanguageContext';

interface CurrentStageCardProps {
  currentStage: ExamStage | undefined;
  remainingTime: string;
  progress: number;
  isRunning: boolean;
  isPaused: boolean;
  onStart: () => void;
  onTogglePause: () => void;
  onNext: () => void;
  onReset: () => void;
}

export const CurrentStageCard = ({
  currentStage,
  remainingTime,
  progress,
  isRunning,
  isPaused,
  onStart,
  onTogglePause,
  onNext,
  onReset,
}: CurrentStageCardProps) => {
  const { t } = useLanguage();
  
  return (
    <Card className="border-2 border-blue-500 dark:border-blue-400">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <CardTitle className="text-2xl">
              {currentStage ? t[currentStage.nameKey] : t.readyToStart}
            </CardTitle>
            <CardDescription>
              {currentStage ? t[currentStage.descKey] : t.clickToStart}
            </CardDescription>
          </div>
          <Badge variant={currentStage?.type === 'exam' ? 'default' : 'secondary'} className="text-lg px-4 py-2">
            {currentStage?.type === 'exam' ? t.exam : t.break}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* 倒计时显示 */}
        <div className="text-center">
          <div className="text-7xl font-bold font-mono text-blue-600 dark:text-blue-400 tabular-nums">
            {remainingTime}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
            {t.timeRemaining}
          </div>
        </div>

        {/* 进度条 */}
        {isRunning && (
          <Progress 
            value={progress} 
            className="h-4"
          />
        )}

        {/* 控制按钮 */}
        <div className="flex gap-4 justify-center">
          {!isRunning ? (
            <Button size="lg" onClick={onStart} className="px-8">
              <Play className="w-5 h-5 mr-2" />
              {t.startExam}
            </Button>
          ) : (
            <>
              <Button size="lg" variant="outline" onClick={onTogglePause} className="px-8">
                {isPaused ? (
                  <>
                    <Play className="w-5 h-5 mr-2" />
                    {t.continue}
                  </>
                ) : (
                  <>
                    <Pause className="w-5 h-5 mr-2" />
                    {t.pause}
                  </>
                )}
              </Button>
              <Button size="lg" variant="outline" onClick={onNext} className="px-8">
                {t.skipStage}
              </Button>
              <Button size="lg" variant="destructive" onClick={onReset} className="px-8">
                <RotateCcw className="w-5 h-5 mr-2" />
                {t.reset}
              </Button>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
