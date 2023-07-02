import type { ReactNode } from 'react';
import { Question } from '@/constant/question';

type AnswerExplanationSectionSectionProps = {
  question: Question;
};

export const AnswerExplanationSectionSection = ({ question }: AnswerExplanationSectionSectionProps): ReactNode => (
  <section className="flex flex-col gap-6">
    <h2 className="text-2xl font-bold text-mauve-12">解答</h2>
    <div className="flex flex-col gap-2">
      <p className="text-xl font-semibold text-mauve-12">{question.answer.answerTitle}</p>
      <p className="text-mauve-11">{question.answer.answerContent}</p>
    </div>
  </section>
);
