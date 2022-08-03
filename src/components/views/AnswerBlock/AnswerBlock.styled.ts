import styled from 'styled-components';

export const Wrapper = styled.div<{ $isCorrect: boolean }>`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: center;
  background-color: ${({ theme, $isCorrect }) =>
    theme.palette.common[$isCorrect ? 'white' : 'lightPink']};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 22px 24px 22px 32px;
  min-height: 80px;
`;

export const Question = styled.p`
  color: ${({ theme }) => theme.palette.primary.main};
  font-weight: 500;
  font-size: 16px;
  line-height: 148.9%;
  opacity: 0.8;
`;
