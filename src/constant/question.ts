import { ComponentPropsWithoutRef } from 'react';
import ChoiceThumbnail1Image from '@/asset/choice/thumbnail1.png';
import Map1Image from '@/asset/map/1.png';
import QuestionThumbnail1Image from '@/asset/question/thumbnail1.jpg';
import { Image } from '@/component/common/image';

export type Choice = {
  id: string;
  title: string;
  thumbnailSrc: ComponentPropsWithoutRef<typeof Image>['src'];
  thumbnailAlt?: ComponentPropsWithoutRef<typeof Image>['alt'];
};

export type Answer = {
  answerId: string;
  answerTitle: string;
  answerContent: string;
  answerThumbnailSrc: ComponentPropsWithoutRef<typeof Image>['src'];
  answerThumbnailAlt?: ComponentPropsWithoutRef<typeof Image>['alt'];
};

export type Question = {
  id: string;
  title: string;
  thumbnailSrc: ComponentPropsWithoutRef<typeof Image>['src'];
  thumbnailAlt?: ComponentPropsWithoutRef<typeof Image>['alt'];
  choices: Choice[];
  answer: Answer;
  mapImageSrc: ComponentPropsWithoutRef<typeof Image>['src'];
  mapImageAlt?: ComponentPropsWithoutRef<typeof Image>['alt'];
  hashedToken: string;
};

export const questions: Question[] = [
  {
    id: '1',
    title: 'ポテチを富士山に持っていくとどうなる？',
    thumbnailSrc: QuestionThumbnail1Image,
    thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
    choices: [
      {
        id: '1',
        title: 'ポテチが富士山になる',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
      {
        id: '2',
        title: 'お前はポテチになる',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
      {
        id: '3',
        title: '[編集済み]',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
    ],
    answer: {
      answerId: '1',
      answerTitle: 'ポテチが富士山になる',
      answerContent:
        '高い標高に曝されたポテトチップスの袋は、南方 - ハルトマン時空方程式により、ポテトチップスの含有塩分量に比例した時間を経て富士山に変化します。なお、すべての財団職員は自分がポテトチップスではないことに留意してください。',
      answerThumbnailSrc: ChoiceThumbnail1Image,
      answerThumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
    },
    mapImageSrc: Map1Image,
    mapImageAlt: '茨城県笠間市笠間310を示した地図の画像。',
    hashedToken: '6d8d5db26b326e3da38bb3f4016629b2eb14ba713bd89698513d7099e60734f6',
  },
  {
    id: '2',
    title: 'ポテチを富士山に持っていくとどうなる？',
    thumbnailSrc: QuestionThumbnail1Image,
    thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
    choices: [
      {
        id: '1',
        title: 'ポテチが富士山になる',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
      {
        id: '2',
        title: 'お前はポテチになる',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
      {
        id: '3',
        title: '[編集済み]',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
    ],
    answer: {
      answerId: '1',
      answerTitle: 'ポテチが富士山になる',
      answerContent:
        '高い標高に曝されたポテトチップスの袋は、南方 - ハルトマン時空方程式により、ポテトチップスの含有塩分量に比例した時間を経て富士山に変化します。なお、すべての財団職員は自分がポテトチップスではないことに留意してください。',
      answerThumbnailSrc: ChoiceThumbnail1Image,
      answerThumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
    },
    mapImageSrc: Map1Image,
    mapImageAlt: '茨城県笠間市笠間310を示した地図の画像。',
    hashedToken: '6d8d5db26b326e3da38bb3f4016629b2eb14ba713bd89698513d7099e60734f6',
  },
  {
    id: '3',
    title: 'ポテチを富士山に持っていくとどうなる？',
    thumbnailSrc: QuestionThumbnail1Image,
    thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
    choices: [
      {
        id: '1',
        title: 'ポテチが富士山になる',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
      {
        id: '2',
        title: 'お前はポテチになる',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
      {
        id: '3',
        title: '[編集済み]',
        thumbnailSrc: ChoiceThumbnail1Image,
        thumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
      },
    ],
    answer: {
      answerId: '1',
      answerTitle: 'ポテチが富士山になる',
      answerContent:
        '高い標高に曝されたポテトチップスの袋は、南方 - ハルトマン時空方程式により、ポテトチップスの含有塩分量に比例した時間を経て富士山に変化します。なお、すべての財団職員は自分がポテトチップスではないことに留意してください。',
      answerThumbnailSrc: ChoiceThumbnail1Image,
      answerThumbnailAlt: '手前にポテトチップスの袋が写っていて背景に富士山が写っている画像。',
    },
    mapImageSrc: Map1Image,
    mapImageAlt: '茨城県笠間市笠間310を示した地図の画像。',
    hashedToken: '6d8d5db26b326e3da38bb3f4016629b2eb14ba713bd89698513d7099e60734f6',
  },
];
