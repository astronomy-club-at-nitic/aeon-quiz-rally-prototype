import { atomWithStorage } from 'jotai/utils';
import { questions } from '@/constant/question';

export type AnswerStatuses = {
  questionId: string;
  choiceTitle: string | null;
  isCorrect: boolean | null;
}[];

export const AnswerStatusesAtom = atomWithStorage<AnswerStatuses>(
  'answer-status',
  questions.map((question) => ({ questionId: question.id, choiceTitle: null, isCorrect: null })),
);
