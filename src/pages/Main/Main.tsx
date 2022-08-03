import React from 'react';

import { StartGameForm } from '~/components';
import { StyledVector1, StyledVector2, StyledVector3, StyledVector4 } from '~/styles';

import * as S from './Main.styled';

const Main: React.FC = () => (
  <>
    <S.Background />
    <StyledVector1 />
    <StyledVector2 />
    <StyledVector3 />
    <StyledVector4 />
    <S.Content>
      <S.Title>Welcome to the</S.Title>
      <S.StyledLogo />
      <StartGameForm />
    </S.Content>
  </>
);

export default Main;
