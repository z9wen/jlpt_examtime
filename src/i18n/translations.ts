export type Language = 'zh' | 'ja' | 'en';

export interface Translation {
  // Header
  title: string;
  subtitle: string;
  
  // Level Selector
  selectLevel: string;
  selectLevelDesc: string;
  minutes: string;
  
  // Progress
  overallProgress: string;
  
  // Current Stage
  readyToStart: string;
  clickToStart: string;
  exam: string;
  break: string;
  timeRemaining: string;
  startExam: string;
  pause: string;
  continue: string;
  skipStage: string;
  reset: string;
  
  // Schedule
  examSchedule: string;
  examScheduleDesc: string;
  
  // Notes
  importantNotes: string;
  note1: string;
  note2N1N2: string;
  note2N3N4N5: string;
  note3: string;
  note4: string;
  
  // Stages
  vocabStage: string;
  vocabDesc: string;
  grammarReadingStage: string;
  grammarReadingDesc: string;
  vocabGrammarReadingStage: string;
  vocabGrammarReadingDesc: string;
  listeningStage: string;
  listeningDesc: string;
  break1: string;
  break2: string;
  breakDesc: string;
}

export const translations: Record<Language, Translation> = {
  zh: {
    title: 'JLPT 考试计时器',
    subtitle: '日本语能力测试',
    
    selectLevel: '选择考试级别',
    selectLevelDesc: '请选择你要模拟的 JLPT 级别',
    minutes: '分钟',
    
    overallProgress: '考试总进度',
    
    readyToStart: '准备开始',
    clickToStart: '点击开始按钮开始考试',
    exam: '考试',
    break: '休息',
    timeRemaining: '剩余时间',
    startExam: '开始考试',
    pause: '暂停',
    continue: '继续',
    skipStage: '跳过当前阶段',
    reset: '重置',
    
    examSchedule: '考试流程',
    examScheduleDesc: '完整的 JLPT {level} 考试时间安排',
    
    importantNotes: '重要提示',
    note1: '• 听力部分必须边听边涂答题卡，录音结束立即收卡！',
    note2N1N2: '• {level} 级别：文字词汇语法阅读合并考试，休息1次',
    note2N3N4N5: '• {level} 级别：文字词汇单独考，语法阅读合并，休息2次',
    note3: '• 每个科目答完立即涂答题卡',
    note4: '• 休息时间可以离开座位、上洗手间',
    
    vocabStage: '语言知识（文字·词汇）',
    vocabDesc: '汉字读音、词汇选择等。答完立即涂答题卡！',
    grammarReadingStage: '语言知识（语法）、阅读',
    grammarReadingDesc: '语法选择、短文阅读、长文阅读等。答完立即涂答题卡！',
    vocabGrammarReadingStage: '语言知识（文字·词汇·语法）、阅读',
    vocabGrammarReadingDesc: '文字词汇语法阅读合并考试。答完立即涂答题卡！',
    listeningStage: '听力',
    listeningDesc: '必须边听边涂答题卡！录音结束立即收卡！',
    break1: '第一次休息',
    break2: '第二次休息',
    breakDesc: '可以离开座位、上洗手间',
  },
  
  ja: {
    title: 'JLPT 試験タイマー',
    subtitle: '日本語能力試験',
    
    selectLevel: '試験レベルを選択',
    selectLevelDesc: 'シミュレーションする JLPT レベルを選択してください',
    minutes: '分',
    
    overallProgress: '試験全体の進捗',
    
    readyToStart: '開始準備',
    clickToStart: '開始ボタンをクリックして試験を始めてください',
    exam: '試験',
    break: '休憩',
    timeRemaining: '残り時間',
    startExam: '試験開始',
    pause: '一時停止',
    continue: '再開',
    skipStage: '現在の段階をスキップ',
    reset: 'リセット',
    
    examSchedule: '試験スケジュール',
    examScheduleDesc: 'JLPT {level} の完全な試験時間配分',
    
    importantNotes: '重要な注意事項',
    note1: '• 聴解は聞きながらマークシートに記入し、録音終了後すぐに回収されます！',
    note2N1N2: '• {level} レベル：言語知識（文字・語彙・文法）・読解は一緒、休憩1回',
    note2N3N4N5: '• {level} レベル：言語知識（文字・語彙）は単独、文法・読解は一緒、休憩2回',
    note3: '• 各科目終了後、すぐにマークシートに記入してください',
    note4: '• 休憩時間は席を離れたり、お手洗いに行くことができます',
    
    vocabStage: '言語知識（文字・語彙）',
    vocabDesc: '漢字の読み、語彙選択など。終了後すぐにマークシートに記入！',
    grammarReadingStage: '言語知識（文法）・読解',
    grammarReadingDesc: '文法選択、短文読解、長文読解など。終了後すぐにマークシートに記入！',
    vocabGrammarReadingStage: '言語知識（文字・語彙・文法）・読解',
    vocabGrammarReadingDesc: '文字・語彙・文法・読解の統合試験。終了後すぐにマークシートに記入！',
    listeningStage: '聴解',
    listeningDesc: '聞きながら必ずマークシートに記入！録音終了後すぐに回収！',
    break1: '1回目の休憩',
    break2: '2回目の休憩',
    breakDesc: '席を離れたり、お手洗いに行けます',
  },
  
  en: {
    title: 'JLPT Exam Timer',
    subtitle: 'Japanese Language Proficiency Test',
    
    selectLevel: 'Select Exam Level',
    selectLevelDesc: 'Please select the JLPT level you want to simulate',
    minutes: 'min',
    
    overallProgress: 'Overall Progress',
    
    readyToStart: 'Ready to Start',
    clickToStart: 'Click the start button to begin the exam',
    exam: 'Exam',
    break: 'Break',
    timeRemaining: 'Time Remaining',
    startExam: 'Start Exam',
    pause: 'Pause',
    continue: 'Continue',
    skipStage: 'Skip Current Stage',
    reset: 'Reset',
    
    examSchedule: 'Exam Schedule',
    examScheduleDesc: 'Complete JLPT {level} exam time allocation',
    
    importantNotes: 'Important Notes',
    note1: '• Listening section: Mark answers while listening. Answer sheets collected immediately after recording ends!',
    note2N1N2: '• {level} Level: Language Knowledge (Vocabulary, Grammar) & Reading combined, 1 break',
    note2N3N4N5: '• {level} Level: Language Knowledge (Vocabulary) separate, Grammar & Reading combined, 2 breaks',
    note3: '• Mark answer sheets immediately after each section',
    note4: '• You may leave your seat and use the restroom during breaks',
    
    vocabStage: 'Language Knowledge (Vocabulary)',
    vocabDesc: 'Kanji reading, vocabulary selection, etc. Mark answers immediately after!',
    grammarReadingStage: 'Language Knowledge (Grammar) & Reading',
    grammarReadingDesc: 'Grammar selection, short & long reading passages. Mark answers immediately after!',
    vocabGrammarReadingStage: 'Language Knowledge (Vocab, Grammar) & Reading',
    vocabGrammarReadingDesc: 'Combined vocabulary, grammar, and reading test. Mark answers immediately after!',
    listeningStage: 'Listening',
    listeningDesc: 'Must mark answers while listening! Sheets collected immediately after recording!',
    break1: 'First Break',
    break2: 'Second Break',
    breakDesc: 'You may leave your seat or use the restroom',
  },
};
