import type { ReactNode } from 'react';
import { Image } from '@/component/common/image';
import { Question } from '@/constant/question';
import { breakpoints } from '@/style/token';

type AccessMapSectionProps = {
  question: Question;
};

export const AccessMapSection = ({ question }: AccessMapSectionProps): ReactNode => (
  <section className="flex flex-col gap-6">
    <h2 className="text-2xl font-bold text-mauve-12">アクセスマップ</h2>
    <Image
      src={question.mapImageSrc}
      height={1024}
      sizes={`${breakpoints.laptop.mediaQuery} 1024px, 100vw`}
      alt={question.mapImageAlt ?? '問題に解答するための QR コードが設置されている場所を示した地図の画像。'}
      placeholder="blur"
    />
  </section>
);
