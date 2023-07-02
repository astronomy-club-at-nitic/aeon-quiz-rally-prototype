import type { ReactNode } from 'react';
import { QuestionCard } from '@/component/questions/question-card';
import { questions } from '@/constant/question';

const RootPage = (): ReactNode => (
  <div className="grid grid-cols-[repeat(auto-fit,288px)] justify-center gap-6 py-12 tablet:grid-cols-[repeat(auto-fit,384px)]">
    {questions.map((question) => (
      <QuestionCard key={question.id} question={question} />
    ))}
  </div>
);

export default RootPage;
