import { css } from 'styled-components';

export const coloredBackgroundStyles = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  overflow-y: auto;
  background-color: ${({ theme }) => theme.palette.primary.main};
`;
