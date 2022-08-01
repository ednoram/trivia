import { decode as decodeHTML } from 'html-entities';
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Paths } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { questionsActions, questionsSelectors } from '~/redux';
import { AnswerOptions } from '~/types';

import * as S from './Game.styled';

const Game: React.FC = () => {
  const dispatch = useAppDispatch();

  const questions = useAppSelector(questionsSelectors.selectQuestions);
  const currentQuestionIndex = useAppSelector(questionsSelectors.selectCurrentQuestionIndex);

  const navigate = useNavigate();

  const currentQuestion = questions[currentQuestionIndex];
  const progress = (currentQuestionIndex + 1) / questions.length;

  const handleAnswerClick = (answer: AnswerOptions) => {
    dispatch(questionsActions.answerQuestion({ answer, questionIndex: currentQuestionIndex }));
  };

  const handleTrueClick = () => handleAnswerClick(AnswerOptions.True);
  const handleFalseClick = () => handleAnswerClick(AnswerOptions.False);

  React.useEffect(() => {
    if (!questions.length) {
      navigate(Paths.Main);
    }
  }, [questions, navigate]);

  React.useEffect(() => {
    const hasPassedAllQuestions = currentQuestionIndex === questions.length;

    if (!!questions.length && hasPassedAllQuestions) {
      navigate(Paths.Results);
    }
  }, [currentQuestionIndex, questions, navigate]);

  if (!currentQuestion) {
    return null;
  }

  return (
    <S.Container>
      <S.Title>{currentQuestion.category}</S.Title>
      <S.Level>level: {currentQuestion.difficulty}</S.Level>
      <S.Progress>
        <S.ProgressText>
          <S.ProgressTextPassed>{currentQuestionIndex + 1}</S.ProgressTextPassed> /
          {questions.length}
        </S.ProgressText>
        <S.ProgressBar>
          <S.ProgressBarFilled $progress={progress} />
        </S.ProgressBar>
      </S.Progress>
      <S.Question>{decodeHTML(currentQuestion.question)}</S.Question>
      <S.AnswerButton onClick={handleTrueClick}>True</S.AnswerButton>
      <S.AnswerButton $inverted onClick={handleFalseClick}>
        False
      </S.AnswerButton>
    </S.Container>
  );
};

export default Game;
