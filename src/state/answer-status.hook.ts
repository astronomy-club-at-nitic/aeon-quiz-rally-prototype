import { useAtomValue, useSetAtom } from 'jotai';
import { useCallback } from 'react';
import { AnswerStatusesAtom } from './answer-status.atom';

export const useAnswerStatuses = () => useAtomValue(AnswerStatusesAtom);

export const useAnswerStatusesMutator = () => {
  const setAnswerStatuses = useSetAtom(AnswerStatusesAtom);

  const setAnswerStatusesById = useCallback(
    (questionId: string, choiceTitle: string, isCorrect: boolean) => {
      setAnswerStatuses((prev) =>
        prev.map((AnswerStatuses) => (AnswerStatuses.questionId === questionId ? { ...AnswerStatuses, choiceTitle, isCorrect } : AnswerStatuses)),
      );
    },
    [setAnswerStatuses],
  );

  return { setAnswerStatusesById };
};
