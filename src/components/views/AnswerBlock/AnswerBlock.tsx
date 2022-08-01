import React from 'react';

import { CheckMarkIcon, XIcon } from '~/assets';
import { useAppSelector } from '~/hooks';
import { questionsSelectors } from '~/redux';

import * as S from './AnswerBlock.styled';
import { AnswerBlockProps } from './types';

const AnswerBlock: React.FC<AnswerBlockProps> = ({ answer }) => {
  const questions = useAppSelector(questionsSelectors.selectQuestions);

  const question = questions[answer.questionIndex];
  const isAnswerCorrect = answer.answer === question.correct_answer;

  return (
    <S.Wrapper $isCorrect={isAnswerCorrect}>
      <S.Question>{question.question}</S.Question>
      {isAnswerCorrect ? <CheckMarkIcon /> : <XIcon />}
    </S.Wrapper>
  );
};

export default AnswerBlock;
