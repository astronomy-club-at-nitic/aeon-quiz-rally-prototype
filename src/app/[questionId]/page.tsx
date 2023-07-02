import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { QuestionPage } from '@/component/question/question-page';
import { questions } from '@/constant/question';
import { digest } from '@/util/digest';

type QuestionIdPageProps = {
  params: {
    questionId: string;
  };
  searchParams: {
    token?: string;
  };
};

const QuestionIdPage = async ({ params, searchParams }: QuestionIdPageProps): Promise<JSX.Element> => {
  const question = questions.find((q) => q.id === params.questionId);
  if (!question) {
    notFound();
  }

  const hashedToken = searchParams.token && (await digest(searchParams.token));

  return <QuestionPage question={question} hashedToken={hashedToken} />;
};

export default QuestionIdPage;

// NOTE: If you want to SSG, leave this comment out. But do not use searchParams!
// export const generateStaticParams = async (): Promise<QuestionIdPageProps['params'][]> =>
//   questions.map((question) => ({
//     questionId: question.id,
//   }));

export const generateMetadata = async ({ params }: QuestionIdPageProps): Promise<Metadata> => {
  const question = questions.find((q) => q.id === params.questionId);
  if (!question) {
    notFound();
  }

  return {
    title: `問題${question.id}. ${question.title}`,
  };
};
