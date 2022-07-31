import React from 'react';

import * as S from './Game.styled';

const Game: React.FC = () => (
  <S.Container>
    <S.Title>Entertainment: Videogames</S.Title>
    <S.Level>level 1</S.Level>
    <S.Progress>
      <S.ProgressText>
        <S.ProgressTextPassed>03</S.ProgressTextPassed> /10
      </S.ProgressText>
      <S.ProgressBar>
        <S.ProgressBarFilled />
      </S.ProgressBar>
    </S.Progress>
    <S.Question>
      The M41 Walker Bulldog remains in service in some countries to this day.
    </S.Question>
    <S.AnswerButton>True</S.AnswerButton>
    <S.AnswerButton $inverted>False</S.AnswerButton>
  </S.Container>
);

export default Game;
