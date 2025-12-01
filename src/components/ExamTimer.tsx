import { useExamTimer } from '@/hooks/useExamTimer';
import { useLanguage } from '@/i18n/LanguageContext';
import { SEO } from './SEO';
import { LanguageSwitcher } from './LanguageSwitcher';
import { LevelSelector } from './LevelSelector';
import { OverallProgress } from './OverallProgress';
import { CurrentStageCard } from './CurrentStageCard';
import { ExamSchedule } from './ExamSchedule';
import { ImportantNotes } from './ImportantNotes';

export const ExamTimer = () => {
  const { t } = useLanguage();
  const {
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
  } = useExamTimer();

  return (
    <>
      <SEO 
        title={`JLPT ${selectedLevel} 考试计时器 - 日本语能力测试模拟工具`}
        description={`专业的 JLPT ${selectedLevel} 级别考试计时器，真实模拟日本语能力测试流程。精确计时，自动阶段切换，帮助考生熟悉考试节奏。支持 N1-N5 全级别。`}
        keywords={`JLPT ${selectedLevel}, 日语${selectedLevel}考试, ${selectedLevel}计时器, 日本语能力测试, 模拟考试, 日语学习`}
      />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-gray-800 p-4 md:p-8">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* 语言切换 */}
          <div className="flex justify-end">
            <LanguageSwitcher />
          </div>
          
          {/* 标题 */}
          <header className="text-center space-y-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100">
              {t.title}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {t.subtitle}
            </p>
          </header>

          {/* 级别选择 */}
          {!isRunning && (
            <LevelSelector 
              selectedLevel={selectedLevel} 
              onLevelChange={setSelectedLevel} 
            />
          )}

          {/* 总进度卡片 */}
          <OverallProgress
            progress={calculateTotalProgress()}
            examStages={examStages}
            currentStageIndex={currentStageIndex}
            isRunning={isRunning}
            selectedLevel={selectedLevel}
          />

          {/* 当前阶段卡片 */}
          <CurrentStageCard
            currentStage={currentStage}
            remainingTime={isRunning ? formatTime(remainingSeconds) : '--:--'}
            progress={currentProgress}
            isRunning={isRunning}
            isPaused={isPaused}
            onStart={startExam}
            onTogglePause={togglePause}
            onNext={nextStage}
            onReset={reset}
          />

          {/* 考试流程表 */}
          <ExamSchedule
            examStages={examStages}
            currentStageIndex={currentStageIndex}
            isRunning={isRunning}
            selectedLevel={selectedLevel}
          />

          {/* 注意事项 */}
          <ImportantNotes selectedLevel={selectedLevel} />

          {/* 页脚 */}
          <footer className="text-center text-sm text-gray-600 dark:text-gray-400 py-6 space-y-2">
            <div className="flex items-center justify-center gap-4">
              <a 
                href="https://github.com/z9wen/jlpt_examtime" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors flex items-center gap-1"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                GitHub
              </a>
              <span>•</span>
              <a 
                href="https://www.zew9.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-gray-900 dark:hover:text-gray-200 transition-colors"
              >
                Blog
              </a>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};
