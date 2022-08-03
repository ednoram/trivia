import styled from 'styled-components';

import { Logo } from '~/assets';
import { Breakpoints } from '~/constants';
import { coloredBackgroundStyles, pageContentStyles } from '~/styles';

export const Background = styled.div`
  ${coloredBackgroundStyles}
`;

export const Content = styled.div`
  ${pageContentStyles}
`;

export const Title = styled.h1`
  font-size: 32px;
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.contrastText};

  @media (max-width: ${Breakpoints.TabletSmall}) {
    font-size: 28px;
  }
`;

export const StyledLogo = styled(Logo)`
  height: 360px;
  margin: -32px 0;

  @media (max-width: ${Breakpoints.Tablet}) {
    height: unset;
    width: 400px;
    margin-top: -12px;
    margin-bottom: 10px;
  }

  @media (max-width: ${Breakpoints.TabletSmall}) {
    width: 340px;
    margin: -10px 0 20px;
  }

  @media (max-width: ${Breakpoints.TabletSmall}) {
    width: 320px;
  }
`;
