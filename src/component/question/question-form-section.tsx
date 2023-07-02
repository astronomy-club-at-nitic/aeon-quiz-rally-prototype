'use client';

import { type ReactNode, useCallback, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Image } from '@/component/common/image';
import { Question } from '@/constant/question';
import { AnswerStatuses } from '@/state/answer-status.atom';
import { useAnswerStatusesMutator } from '@/state/answer-status.hook';
import { breakpoints } from '@/style/token';
import { cn } from '@/util/tailwind';

type QuestionFormData = {
  choice: string;
};

type QuestionFormSectionProps = {
  question: Question;
  currentAnswerStatuses: AnswerStatuses[number];
};

export const QuestionFormSection = ({ question, currentAnswerStatuses }: QuestionFormSectionProps): ReactNode => {
  const { setAnswerStatusesById } = useAnswerStatusesMutator();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { isDirty },
  } = useForm<QuestionFormData>({
    defaultValues: currentAnswerStatuses.choiceTitle !== null ? { choice: currentAnswerStatuses.choiceTitle } : undefined,
  });

  const onSubmit = handleSubmit(
    useCallback(
      (formData) => {
        const isCorrect = formData.choice === question.answer.answerTitle;

        setAnswerStatusesById(question.id, formData.choice, isCorrect);
      },
      [question, setAnswerStatusesById],
    ),
  );

  useEffect(() => {
    if (currentAnswerStatuses.choiceTitle !== null) {
      setValue('choice', currentAnswerStatuses.choiceTitle);
    }
  }, [currentAnswerStatuses.choiceTitle, setValue]);

  return (
    <section className="flex flex-col gap-6">
      <h2 className="text-2xl font-bold">解答の選択肢</h2>
      <form onSubmit={onSubmit} className="flex flex-col items-center gap-12">
        <div className="flex flex-col flex-wrap gap-6 tablet:flex-row">
          {question.choices.map((choice, index) => (
            <div key={index}>
              <input
                id={`${question.id}-${choice.id}`}
                type="radio"
                value={choice.title}
                disabled={currentAnswerStatuses.isCorrect !== null}
                {...register('choice', {
                  required: true,
                })}
                className="peer sr-only"
              />
              <label
                htmlFor={`${question.id}-${choice.id}`}
                className={cn(
                  'relative flex h-60 w-80 cursor-pointer flex-col items-center gap-4 overflow-hidden rounded-xl bg-mauve-3 tablet:w-96',
                  'peer-focus:ring-4 peer-focus:ring-purple-6/80',
                  'peer-checked:ring-4 peer-checked:ring-purple-6',
                  'peer-disabled:pointer-events-none',
                )}
              >
                <Image
                  src={choice.thumbnailSrc}
                  alt={choice.thumbnailAlt ?? '選択肢をイメージした画像。'}
                  fill
                  sizes={`${breakpoints.tablet.mediaQuery} 100vw, 50vw`}
                  className="absolute object-cover"
                />
                <span className="absolute inset-0 flex h-full w-full items-end p-5">
                  <p className="w-fit rounded-md bg-mauve-1 px-4 py-2 font-bold text-mauve-12">
                    {choice.id}. {choice.title}
                  </p>
                </span>
              </label>
            </div>
          ))}
        </div>
        {currentAnswerStatuses.isCorrect ?? (
          <button
            disabled={isDirty === false}
            className={cn(
              'w-fit rounded-xl bg-purple-3 p-5 transition',
              'hover:bg-purple-4',
              'disabled:cursor-not-allowed disabled:bg-mauve-4 disabled:text-mauve-11',
            )}
          >
            答えを確かめる
          </button>
        )}
      </form>
    </section>
  );
};
