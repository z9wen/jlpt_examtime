export type ExamStage = {
  id: string;
  nameKey: 'vocabGrammarReadingStage' | 'vocabStage' | 'grammarReadingStage' | 'listeningStage' | 'break1' | 'break2';
  descKey: 'vocabGrammarReadingDesc' | 'vocabDesc' | 'grammarReadingDesc' | 'listeningDesc' | 'breakDesc';
  duration: number; // 分钟
  type: 'exam' | 'break';
}

export type JLPTLevel = 'N1' | 'N2' | 'N3' | 'N4' | 'N5';

export const EXAM_STAGES: Record<JLPTLevel, ExamStage[]> = {
  N1: [
    {
      id: 'vocab-grammar-reading',
      nameKey: 'vocabGrammarReadingStage',
      descKey: 'vocabGrammarReadingDesc',
      duration: 110,
      type: 'exam',
    },
    {
      id: 'break',
      nameKey: 'break1',
      descKey: 'breakDesc',
      duration: 10,
      type: 'break',
    },
    {
      id: 'listening',
      nameKey: 'listeningStage',
      descKey: 'listeningDesc',
      duration: 60,
      type: 'exam',
    }
  ],
  N2: [
    {
      id: 'vocab-grammar-reading',
      nameKey: 'vocabGrammarReadingStage',
      descKey: 'vocabGrammarReadingDesc',
      duration: 105,
      type: 'exam',
    },
    {
      id: 'break',
      nameKey: 'break1',
      descKey: 'breakDesc',
      duration: 10,
      type: 'break',
    },
    {
      id: 'listening',
      nameKey: 'listeningStage',
      descKey: 'listeningDesc',
      duration: 50,
      type: 'exam',
    }
  ],
  N3: [
    {
      id: 'vocab',
      nameKey: 'vocabStage',
      descKey: 'vocabDesc',
      duration: 30,
      type: 'exam',
    },
    {
      id: 'break1',
      nameKey: 'break1',
      descKey: 'breakDesc',
      duration: 10,
      type: 'break',
    },
    {
      id: 'grammar-reading',
      nameKey: 'grammarReadingStage',
      descKey: 'grammarReadingDesc',
      duration: 70,
      type: 'exam',
    },
    {
      id: 'break2',
      nameKey: 'break2',
      descKey: 'breakDesc',
      duration: 10,
      type: 'break',
    },
    {
      id: 'listening',
      nameKey: 'listeningStage',
      descKey: 'listeningDesc',
      duration: 40,
      type: 'exam',
    }
  ],
  N4: [
    {
      id: 'vocab',
      nameKey: 'vocabStage',
      descKey: 'vocabDesc',
      duration: 25,
      type: 'exam',
    },
    {
      id: 'break1',
      nameKey: 'break1',
      descKey: 'breakDesc',
      duration: 10,
      type: 'break',
    },
    {
      id: 'grammar-reading',
      nameKey: 'grammarReadingStage',
      descKey: 'grammarReadingDesc',
      duration: 55,
      type: 'exam',
    },
    {
      id: 'break2',
      nameKey: 'break2',
      descKey: 'breakDesc',
      duration: 10,
      type: 'break',
    },
    {
      id: 'listening',
      nameKey: 'listeningStage',
      descKey: 'listeningDesc',
      duration: 35,
      type: 'exam',
    }
  ],
  N5: [
    {
      id: 'vocab',
      nameKey: 'vocabStage',
      descKey: 'vocabDesc',
      duration: 20,
      type: 'exam',
    },
    {
      id: 'break1',
      nameKey: 'break1',
      descKey: 'breakDesc',
      duration: 10,
      type: 'break',
    },
    {
      id: 'grammar-reading',
      nameKey: 'grammarReadingStage',
      descKey: 'grammarReadingDesc',
      duration: 40,
      type: 'exam',
    },
    {
      id: 'break2',
      nameKey: 'break2',
      descKey: 'breakDesc',
      duration: 10,
      type: 'break',
    },
    {
      id: 'listening',
      nameKey: 'listeningStage',
      descKey: 'listeningDesc',
      duration: 30,
      type: 'exam',
    }
  ]
};

// 向后兼容
export const N3_EXAM_STAGES = EXAM_STAGES.N3;
