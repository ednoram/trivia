import styled from 'styled-components';

import { Logo } from '~/assets';
import { coloredBackgroundStyles } from '~/styles';

export const Container = styled.div`
  ${coloredBackgroundStyles}
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 150px;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const StyledLogo = styled(Logo)`
  height: 360px;
  margin: -40px 0;
`;
