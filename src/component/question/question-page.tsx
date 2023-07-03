'use client';

import { notFound } from 'next/navigation';
import type { ReactNode } from 'react';
import { AccessMapSection } from './access-map-section';
import { AnswerExplanationSectionSection } from './answer-explanation-section';
import { AnswerStatus } from './answer-status';
import { QuestionFormSection } from './question-form-section';
import { Image } from '@/component/common/image';
import { Question } from '@/constant/question';
import { CameraIcon } from '@/icon/camera-icon';
import { useAnswerStatuses } from '@/state/answer-status.hook';
import { breakpoints } from '@/style/token';

type QuestionPageProps = {
  question: Question;
  hashedToken?: string;
};

export const QuestionPage = ({ question, hashedToken }: QuestionPageProps): ReactNode => {
  const answerStatuses = useAnswerStatuses();
  const currentAnswerStatuses = answerStatuses.find((status) => status.questionId === question.id);
  if (currentAnswerStatuses === undefined) {
    notFound();
  }

  const isAnswerable = hashedToken === question.hashedToken;
  const isAnswered = currentAnswerStatuses.isCorrect !== null;

  return (
    <section className="flex flex-col gap-12 px-5 py-12 laptop:px-48">
      <div className="flex flex-col gap-6">
        <hgroup className="flex flex-col items-center gap-2 text-mauve-12">
          <h1 className="text-3xl font-bold">問題 {question.id}</h1>
          <p className="text-lg font-semibold">{question.title}</p>
        </hgroup>
        <Image
          src={question.thumbnailSrc}
          width={384}
          height={240}
          sizes={`${breakpoints.laptop} 384px, 50vw`}
          alt={question.thumbnailAlt ?? '問題をイメージした画像。'}
          placeholder="blur"
          className="mx-auto h-60 w-96 rounded-xl object-cover"
        />
      </div>
      {isAnswerable || isAnswered ? (
        <>
          <QuestionFormSection question={question} currentAnswerStatuses={currentAnswerStatuses} />
          <AnswerStatus currentAnswerStatuses={currentAnswerStatuses} />
          {currentAnswerStatuses.isCorrect !== null && <AnswerExplanationSectionSection question={question} />}
        </>
      ) : (
        <div className="flex items-center gap-5 rounded-lg border-2 border-yellow-6 bg-yellow-3 p-5">
          <CameraIcon className="h-6 w-6 shrink-0 fill-mauve-12" />
          <p className="text-lg">この問題に解答するには、以下の地図に示す場所に設置された QR コードを読み取ってください。</p>
        </div>
      )}
      <AccessMapSection question={question} />
    </section>
  );
};
