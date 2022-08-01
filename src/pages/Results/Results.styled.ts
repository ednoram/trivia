import styled, { css } from 'styled-components';

import { StarIcon, XIcon } from '~/assets';
import { Button } from '~/components';
import { Breakpoints } from '~/constants';
import { coloredBackgroundStyles, pageContentStyles } from '~/styles';

export const Container = styled.div`
  ${coloredBackgroundStyles}
`;

export const Content = styled.div`
  ${pageContentStyles}
  max-width: 820px;
  width: 100%;
  margin-inline: auto;
`;

export const Score = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const ProfilePicture = styled.div`
  background-color: ${({ theme }) => theme.palette.common.white};
  border-radius: 50%;
  width: 52px;
  height: 52px;
`;

export const ScoreText = styled.p`
  font-weight: 700;
  font-size: 21px;
  line-height: 23px;
  color: ${({ theme }) => theme.palette.primary.contrastText};
`;

export const CorrectAnswersCount = styled.span`
  font-size: 28px;
  margin-left: 6px;
  color: ${({ theme }) => theme.palette.secondary.main};
`;

export const Stars = styled.div<{ $totalCount: number }>`
  display: grid;
  grid-template-columns: repeat(${({ $totalCount }) => Math.min($totalCount, 10)}, 1fr);
  gap: 10px 8px;
  margin-top: 28px;
`;

export const Star = styled(StarIcon)<{ $filled?: boolean }>`
  ${({ $filled }) =>
    $filled &&
    css`
      path {
        fill: ${({ theme }) => theme.palette.secondary.main};
      }
    `}
`;

export const Answers = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 48px;
  max-width: 580px;
  width: 100%;
  margin-inline: auto;
`;

export const PlayAgain = styled(Button)`
  max-width: 440px;
  width: 100%;
  padding: 24px 40px;
  font-weight: 700;
  font-size: 21px;
  line-height: 149.9%;
  color: ${({ theme }) => theme.palette.common.white};
  background: ${({ theme }) => theme.gradient};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: 60px;
`;

export const CloseIcon = styled(XIcon)`
  position: absolute;
  top: 112px;
  right: 20px;
  width: 25px;
  height: 25px;
  cursor: pointer;

  path {
    fill: ${({ theme }) => theme.palette.primary.contrastText};
  }

  @media (max-width: ${Breakpoints.TabledSmall}) {
    top: 44px;
  }
`;
