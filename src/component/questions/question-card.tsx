'use client';

import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { Image } from '@/component/common/image';
import { Link } from '@/component/common/link';
import { Question } from '@/constant/question';
import { useAnswerStatuses } from '@/state/answer-status.hook';

type QuestionCardLinkProps = {
  question: Question;
};

export const QuestionCardLink = ({ question }: QuestionCardLinkProps): ReactNode => {
  const answerStatuses = useAnswerStatuses();
  const currentAnswerStatuses = answerStatuses.find((status) => status.questionId === question.id);
  if (currentAnswerStatuses === undefined) {
    notFound();
  }

  return (
    <Link href={`/${question.id}`} className="group w-72 overflow-hidden rounded-xl bg-mauve-3 drop-shadow-xl tablet:w-96">
      <Image
        src={question.thumbnailSrc}
        height={256}
        alt={question.thumbnailAlt ?? '問題をイメージした画像。'}
        className="h-52 w-full object-cover tablet:h-64"
      />
      <div className="flex flex-col gap-1 p-8 pt-4 transition tablet:p-10 tablet:pt-6">
        <p className="text-mauve-11">問題 {question.id}</p>
        <p className="text-lg font-semibold text-mauve-12 group-hover:text-mauve-11 group-hover:underline">{question.title}</p>
      </div>
      <div className="absolute right-3 top-3">
        <p className="-rotate-12 text-6xl">{currentAnswerStatuses.isCorrect !== null && (currentAnswerStatuses.isCorrect ? '😆' : '🥺')}</p>
        <p className="sr-only">{currentAnswerStatuses.isCorrect === null ? '未解答' : '解答済み'}</p>
      </div>
    </Link>
  );
};
