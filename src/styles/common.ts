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

export const gradientButtonStyles = css`
  max-width: 440px;
  width: 100%;
  font-weight: 700;
  font-size: 21px;
  line-height: 149.9%;
  color: ${({ theme }) => theme.palette.common.white};
  background: ${({ theme }) => theme.gradient};
  border-radius: ${({ theme }) => theme.borderRadius};
  box-shadow: 0px 6px 0px ${({ theme }) => theme.palette.common.lightRed};
  padding: 22px 32px;

  :disabled {
    color: ${({ theme }) => theme.palette.common.darkGray};
    background: ${({ theme }) => theme.palette.common.white};
    box-shadow: 0px 6px 0px ${({ theme }) => theme.palette.common.lightGray};
  }
`;
