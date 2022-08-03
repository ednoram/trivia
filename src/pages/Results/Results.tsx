import React from 'react';
import { useNavigate } from 'react-router-dom';

import { ProfileIcon } from '~/assets';
import { AnswerBlock } from '~/components';
import { Paths } from '~/constants';
import { useAppDispatch, useAppSelector } from '~/hooks';
import { questionsActions, questionsSelectors } from '~/redux';
import { StyledVector1, StyledVector2, StyledVector3, StyledVector4 } from '~/styles';
import { getOneToNArray } from '~/utils';

import * as S from './Results.styled';

const Results: React.FC = () => {
  const dispatch = useAppDispatch();

  const answers = useAppSelector(questionsSelectors.selectAnswers);
  const questionsCount = useAppSelector(questionsSelectors.selectQuestionsCount);
  const correctAnswersCount = useAppSelector(questionsSelectors.selectCorrectAnswersCount);

  const navigate = useNavigate();

  const stars = React.useMemo(
    () =>
      getOneToNArray(questionsCount).map((item, index) => (
        <S.Star key={item} $filled={index < correctAnswersCount} />
      )),
    [correctAnswersCount, questionsCount]
  );

  const answerBlocks = answers.map((answer) => (
    <AnswerBlock key={answer.questionIndex} answer={answer} />
  ));

  const handlePlayAgainClick = React.useCallback((): void => {
    dispatch(questionsActions.resetQuestionsState());
    navigate(Paths.Game);
  }, [dispatch, navigate]);

  React.useEffect(() => {
    if (!answers.length) {
      navigate(Paths.Main);
    }
  }, [answers.length, navigate]);

  return (
    <>
      <S.Background />
      <StyledVector1 />
      <StyledVector2 />
      <StyledVector3 />
      <StyledVector4 />
      <S.Content>
        <S.CloseIcon role="button" onClick={handlePlayAgainClick} />
        <S.Score>
          <S.ProfilePicture>
            <ProfileIcon />
          </S.ProfilePicture>
          <S.ScoreText>
            You scored <S.CorrectAnswersCount>{correctAnswersCount}</S.CorrectAnswersCount>/
            {questionsCount}
          </S.ScoreText>
        </S.Score>
        <S.Stars $totalCount={questionsCount}>{stars}</S.Stars>
        <S.Answers>{answerBlocks}</S.Answers>
        <S.PlayAgain onClick={handlePlayAgainClick}>Play Again</S.PlayAgain>
      </S.Content>
    </>
  );
};

export default Results;
