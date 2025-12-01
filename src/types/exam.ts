export type ExamStage = {
  id: string;
  name: string;
  duration: number; // 分钟
  type: 'exam' | 'break';
  description?: string;
}

export const N3_EXAM_STAGES: ExamStage[] = [
  {
    id: 'vocab',
    name: '语言知识（文字·词汇）',
    duration: 30,
    type: 'exam',
    description: '汉字读音、词汇选择等。答完立即涂答题卡！'
  },
  {
    id: 'break1',
    name: '第一次休息',
    duration: 10,
    type: 'break',
    description: '可以离开座位、上洗手间'
  },
  {
    id: 'grammar',
    name: '语言知识（语法）、阅读',
    duration: 70,
    type: 'exam',
    description: '语法选择、短文阅读、长文阅读等。答完立即涂答题卡！'
  },
  {
    id: 'break2',
    name: '第二次休息',
    duration: 10,
    type: 'break',
    description: '可以离开座位、上洗手间'
  },
  {
    id: 'listening',
    name: '听力',
    duration: 40,
    type: 'exam',
    description: '必须边听边涂答题卡！录音结束立即收卡！'
  }
];
