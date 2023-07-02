import type { ReactNode } from 'react';
import { AnswerStatuses } from '@/state/answer-status.atom';
import { cn } from '@/util/tailwind';

type AnswerStatusProps = {
  currentAnswerStatuses: AnswerStatuses[number];
};

export const AnswerStatus = ({ currentAnswerStatuses }: AnswerStatusProps): ReactNode => {
  const isCorrect = currentAnswerStatuses.isCorrect;
  if (isCorrect === null) {
    return null;
  }

  return <p className={cn('text-center text-4xl font-bold', isCorrect ? 'text-green-11' : 'text-blue-11')}>{isCorrect ? '正解！' : '不正解...'}</p>;
};
