import type { ReactNode } from 'react';
import { QuestionCardLink } from '@/component/questions/question-card';
import { questions } from '@/constant/question';

const RootPage = (): ReactNode => (
  <div className="grid grid-cols-[repeat(auto-fit,288px)] justify-center gap-6 py-12 tablet:grid-cols-[repeat(auto-fit,384px)]">
    {questions.map((question) => (
      <QuestionCardLink key={question.id} question={question} />
    ))}
  </div>
);

export default RootPage;
