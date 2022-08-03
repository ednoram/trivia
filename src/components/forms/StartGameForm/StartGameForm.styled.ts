import styled from 'styled-components';

import { CoinIcon, TrophyIcon } from '~/assets';
import { Button } from '~/components/shared';
import { Breakpoints } from '~/constants';
import { gradientButtonStyles } from '~/styles';

export const Form = styled.form`
  max-width: 442px;
  width: 100%;
`;

export const Label = styled.label`
  display: grid;
  grid-template-columns: 36px auto;
  align-items: center;
  font-weight: 700;
  font-size: 15px;
  line-height: 151.9%;
  color: ${({ theme }) => theme.palette.common.lightOrange};
  margin-bottom: 8px;
`;

export const AmountInputWrapper = styled.div`
  margin-top: 32px;
`;

export const Trophy = styled(TrophyIcon)`
  width: 28px;
`;

export const Coin = styled(CoinIcon)`
  width: 24px;
`;

export const PlayButton = styled(Button)`
  ${gradientButtonStyles}
  margin-top: 80px;

  @media (max-width: ${Breakpoints.TabledSmall}) {
    margin-top: 60px;
  }
`;
