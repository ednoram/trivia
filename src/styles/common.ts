import { css } from 'styled-components';

import { Breakpoints } from '~/constants';

export const coloredBackgroundStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;

export const pageContentStyles = css`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 20px 150px;

  @media (max-width: ${Breakpoints.TabledSmall}) {
    padding: 80px 20px 120px;
  }
`;
