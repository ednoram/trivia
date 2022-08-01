import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 500px;
  width: 100%;
  margin-inline: auto;
  padding: 100px 0 150px;
`;

export const Title = styled.h1`
  word-break: break-word;
  font-weight: 700;
  font-size: 50px;
  line-height: 70px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.palette.primary.main};
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
`;

export const Progress = styled.div`
  margin-top: 32px;
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
  width: 320px;
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
  color: ${({ theme }) => theme.palette.primary.main};
  margin: 60px 0 40px;
`;

export const AnswerButton = styled.button<{ $inverted?: boolean }>`
  width: 380px;
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
`;
