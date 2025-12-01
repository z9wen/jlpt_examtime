import { useState, useEffect, useCallback } from 'react';
import { EXAM_STAGES, type JLPTLevel } from '@/types/exam';
import { useAudioAlert } from './useAudioAlert';

export const useExamTimer = (initialLevel: JLPTLevel = 'N1') => {
  // 从 localStorage 读取上次选择的级别，默认 N1
  const [selectedLevel, setSelectedLevel] = useState<JLPTLevel>(() => {
    const saved = localStorage.getItem('jlpt-selected-level');
    return (saved as JLPTLevel) || initialLevel;
  });
  const [currentStageIndex, setCurrentStageIndex] = useState(0);
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(false);
  const { playAlert } = useAudioAlert();

  // 保存级别选择到 localStorage
  useEffect(() => {
    localStorage.setItem('jlpt-selected-level', selectedLevel);
  }, [selectedLevel]);

  const examStages = EXAM_STAGES[selectedLevel];
  const currentStage = examStages[currentStageIndex];
  const totalSeconds = currentStage?.duration ? currentStage.duration * 60 : 0;
  const currentProgress = totalSeconds > 0 ? ((totalSeconds - remainingSeconds) / totalSeconds) * 100 : 0;

  // 格式化时间显示
  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // 计算总进度
  const calculateTotalProgress = useCallback(() => {
    if (!isRunning) {
      return 0;
    }
    
    let completedMinutes = 0;
    for (let i = 0; i < currentStageIndex; i++) {
      completedMinutes += examStages[i].duration;
    }
    const currentStageElapsed = totalSeconds > 0 ? (totalSeconds - remainingSeconds) / 60 : 0;
    completedMinutes += currentStageElapsed;

    const totalMinutes = examStages.reduce((sum, stage) => sum + stage.duration, 0);
    return (completedMinutes / totalMinutes) * 100;
  }, [isRunning, currentStageIndex, examStages, totalSeconds, remainingSeconds]);

  // 开始考试
  const startExam = useCallback(() => {
    setCurrentStageIndex(0);
    setRemainingSeconds(examStages[0].duration * 60);
    setIsRunning(true);
    setIsPaused(false);
    playAlert('start');
  }, [playAlert, examStages]);

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
    if (currentStageIndex < examStages.length - 1) {
      const nextIndex = currentStageIndex + 1;
      const nextStage = examStages[nextIndex];
      
      setCurrentStageIndex(nextIndex);
      setRemainingSeconds(nextStage.duration * 60);
      
      if (nextStage.type === 'break') {
        playAlert('break');
      } else {
        playAlert('start');
      }
    } else {
      playAlert('end');
      setIsRunning(false);
    }
  }, [currentStageIndex, playAlert, examStages]);

  // 倒计时逻辑
  useEffect(() => {
    if (!isRunning || isPaused) return;

    if (remainingSeconds <= 0 && currentStageIndex < examStages.length) {
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
  }, [isRunning, isPaused, remainingSeconds, currentStageIndex, nextStage, examStages.length]);

  return {
    selectedLevel,
    setSelectedLevel,
    currentStageIndex,
    remainingSeconds,
    isRunning,
    isPaused,
    examStages,
    currentStage,
    currentProgress,
    formatTime,
    calculateTotalProgress,
    startExam,
    togglePause,
    reset,
    nextStage,
  };
};
