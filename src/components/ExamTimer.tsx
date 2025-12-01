import { useState, useEffect, useCallback } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { type ExamStage, N3_EXAM_STAGES } from '@/types/exam';
import { useAudioAlert } from '@/hooks/useAudioAlert';
import { Play, Pause, RotateCcw, Clock, CheckCircle2 } from 'lucide-react';

export const ExamTimer = () => {
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const { playAlert } = useAudioAlert();

  const currentStage = N3_EXAM_STAGES[currentStageIndex];
  const totalSeconds = currentStage.duration * 60;
  const progress = ((totalSeconds - remainingSeconds) / totalSeconds) * 100;

  // 格式化时间显示
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 计算总进度
  const calculateTotalProgress = () => {
    let completedMinutes = 0;
    for (let i = 0; i < currentStageIndex; i++) {
      completedMinutes += N3_EXAM_STAGES[i].duration;
    }
    const currentStageElapsed = (totalSeconds - remainingSeconds) / 60;
    completedMinutes += currentStageElapsed;

    const totalMinutes = N3_EXAM_STAGES.reduce((sum, stage) => sum + stage.duration, 0);
    return (completedMinutes / totalMinutes) * 100;
  };

  // 开始考试
  const startExam = useCallback(() => {
    setCurrentStageIndex(0);
    setRemainingSeconds(N3_EXAM_STAGES[0].duration * 60);
    setIsRunning(true);
    setIsPaused(false);
    playAlert('start');
  }, [playAlert]);

  // 暂停/继续
  const togglePause = useCallback(() => {
    setIsPaused(prev => !prev);
  }, []);

  // 重置
  const reset = useCallback(() => {
    setCurrentStageIndex(0);
    setRemainingSeconds(0);
    setIsRunning(false);
    setIsPaused(false);
  }, []);

  // 跳到下一阶段
  const nextStage = useCallback(() => {
    if (currentStageIndex < N3_EXAM_STAGES.length - 1) {
      const nextIndex = currentStageIndex + 1;
      const nextStage = N3_EXAM_STAGES[nextIndex];
      
      setCurrentStageIndex(nextIndex);
      setRemainingSeconds(nextStage.duration * 60);
      
      // 播放提示音
      if (nextStage.type === 'break') {
        playAlert('break');
      } else {
        playAlert('start');
      }
    } else {
      // 考试结束
      playAlert('end');
      setIsRunning(false);
    }
  }, [currentStageIndex, playAlert]);

  // 倒计时逻辑
  useEffect(() => {
    if (!isRunning || isPaused) return;

    if (remainingSeconds <= 0 && currentStageIndex < N3_EXAM_STAGES.length) {
      nextStage();
      return;
    }

    const timer = setInterval(() => {
      setRemainingSeconds(prev => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, isPaused, remainingSeconds, currentStageIndex, nextStage]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* 标题 */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
            JLPT N3 考试计时器
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            日本语能力测试 N3 级别
          </p>
        </div>

        {/* 总进度卡片 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              考试总进度
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Progress value={calculateTotalProgress()} className="h-3" />
            <div className="mt-4 flex justify-between text-sm text-gray-600 dark:text-gray-400">
              {N3_EXAM_STAGES.map((stage, index) => (
                <div key={stage.id} className="flex flex-col items-center">
                  {index < currentStageIndex ? (
                    <CheckCircle2 className="w-4 h-4 text-green-600 mb-1" />
                  ) : index === currentStageIndex ? (
                    <div className="w-4 h-4 rounded-full bg-blue-600 animate-pulse mb-1" />
                  ) : (
                    <div className="w-4 h-4 rounded-full bg-gray-300 dark:bg-gray-600 mb-1" />
                  )}
                  <span className="text-xs text-center">{stage.name.split('（')[0]}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 当前阶段卡片 */}
        <Card className="border-2 border-blue-500 dark:border-blue-400">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <CardTitle className="text-2xl">{currentStage?.name || '准备开始'}</CardTitle>
                <CardDescription>{currentStage?.description || '点击开始按钮开始考试'}</CardDescription>
              </div>
              <Badge variant={currentStage?.type === 'exam' ? 'default' : 'secondary'} className="text-lg px-4 py-2">
                {currentStage?.type === 'exam' ? '考试' : '休息'}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* 倒计时显示 */}
            <div className="text-center">
              <div className="text-7xl font-bold font-mono text-blue-600 dark:text-blue-400 tabular-nums">
                {isRunning ? formatTime(remainingSeconds) : '--:--'}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                剩余时间
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
                <Button size="lg" onClick={startExam} className="px-8">
                  <Play className="w-5 h-5 mr-2" />
                  开始考试
                </Button>
              ) : (
                <>
                  <Button size="lg" variant="outline" onClick={togglePause} className="px-8">
                    {isPaused ? (
                      <>
                        <Play className="w-5 h-5 mr-2" />
                        继续
                      </>
                    ) : (
                      <>
                        <Pause className="w-5 h-5 mr-2" />
                        暂停
                      </>
                    )}
                  </Button>
                  <Button size="lg" variant="outline" onClick={nextStage} className="px-8">
                    跳过当前阶段
                  </Button>
                  <Button size="lg" variant="destructive" onClick={reset} className="px-8">
                    <RotateCcw className="w-5 h-5 mr-2" />
                    重置
                  </Button>
                </>
              )}
            </div>
          </CardContent>
        </Card>

        {/* 考试流程表 */}
        <Card>
          <CardHeader>
            <CardTitle>考试流程</CardTitle>
            <CardDescription>完整的 JLPT N3 考试时间安排</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {N3_EXAM_STAGES.map((stage, index) => (
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
                      <div className="font-semibold">{stage.name}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">{stage.description}</div>
                    </div>
                  </div>
                  <Badge variant={stage.type === 'exam' ? 'default' : 'secondary'}>
                    {stage.duration} 分钟
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* 注意事项 */}
        <Card className="bg-amber-50 dark:bg-amber-950 border-amber-200 dark:border-amber-800">
          <CardHeader>
            <CardTitle className="text-amber-900 dark:text-amber-100">重要提示</CardTitle>
          </CardHeader>
          <CardContent className="text-amber-900 dark:text-amber-100 space-y-2">
            <p>• 听力部分必须边听边涂答题卡，录音结束立即收卡！</p>
            <p>• 语法和阅读是连续70分钟，不单独计时</p>
            <p>• 每个科目答完立即涂答题卡</p>
            <p>• 休息时间可以离开座位、上洗手间</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
