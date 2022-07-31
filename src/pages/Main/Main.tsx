import React from 'react';
import { StartGameForm } from 'src/components';

import * as S from './Main.styled';

const Main: React.FC = () => (
  <S.Container>
    <S.Content>
      <S.Title>Welcome to the</S.Title>
      <S.StyledLogo />
      <StartGameForm />
    </S.Content>
  </S.Container>
);

export default Main;
