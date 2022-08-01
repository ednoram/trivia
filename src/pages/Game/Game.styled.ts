import styled, { css } from 'styled-components';

import { Breakpoints } from '~/constants';
import { pageContentStyles } from '~/styles';

export const Container = styled.div`
  ${pageContentStyles}
  max-width: 540px;
  width: 100%;
  margin-inline: auto;
`;

export const Title = styled.h1`
  word-break: break-word;
  font-weight: 700;
  font-size: 50px;
  line-height: 70px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.palette.primary.main};

  @media (max-width: ${Breakpoints.TabledSmall}) {
    font-size: 32px;
    line-height: 44px;
  }
`;

export const Level = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 116.13%;
  text-align: center;
  letter-spacing: 0.5em;
  text-transform: lowercase;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-top: 24px;

  @media (max-width: ${Breakpoints.TabledSmall}) {
    font-size: 16px;
    margin-top: 10px;
  }
`;

export const Progress = styled.div`
  max-width: 320px;
  width: 100%;
  margin-top: 32px;

  @media (max-width: ${Breakpoints.TabledSmall}) {
    max-width: unset;
  }
`;

export const ProgressText = styled.p`
  font-weight: 700;
  font-size: 18px;
  line-height: 28px;
  color: ${({ theme }) => theme.palette.primary.main};
  margin-bottom: 6px;
`;

export const ProgressTextPassed = styled.span`
  font-size: 24px;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const ProgressBar = styled.div`
  height: 5px;
  background-color: ${({ theme }) => theme.palette.common.lightGray};
`;

export const ProgressBarFilled = styled.div<{ $progress: number }>`
  height: 100%;
  width: ${({ $progress }) => $progress * 100}%;
  background-color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Question = styled.p`
  font-weight: 500;
  font-size: 28px;
  line-height: 143.9%;
  text-align: center;
  word-break: break-word;
  color: ${({ theme }) => theme.palette.primary.main};
  margin: 60px 0 40px;

  @media (max-width: ${Breakpoints.TabledSmall}) {
    font-size: 22px;
    text-align: start;
    max-width: 70vw;
    align-self: flex-start;
  }
`;

export const AnswerButton = styled.button<{ $inverted?: boolean }>`
  max-width: 380px;
  width: 100%;
  height: 72px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme, $inverted }) =>
    $inverted ? 'transparent' : theme.palette.primary.main};
  color: ${({ theme, $inverted }) => theme.palette.primary[$inverted ? 'main' : 'contrastText']};
  font-weight: 900;
  font-size: 18px;
  line-height: 149.9%;
  text-transform: uppercase;
  margin-top: 32px;

  ${({ $inverted }) =>
    $inverted &&
    css`
      border: 2px solid ${({ theme }) => theme.palette.primary.main};
    `}

  @media (max-width: ${Breakpoints.TabledSmall}) {
    height: 60px;
    margin-top: 20px;
  }
`;
