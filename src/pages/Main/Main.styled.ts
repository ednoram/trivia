import styled from 'styled-components';

import { Logo } from '~/assets';

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0 120px;
`;

export const Title = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const StyledLogo = styled(Logo)`
  height: 360px;
  margin: -40px 0;
`;
