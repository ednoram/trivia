import { CoinIcon, TrophyIcon } from 'src/assets';
import { Button } from 'src/components/shared';
import styled from 'styled-components';

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
  color: ${({ theme }) => theme.palette.secondary.main};
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
  width: 100%;
  font-weight: 700;
  font-size: 21px;
  line-height: 149.9%;
  color: ${({ theme }) => theme.palette.common.white};
  background: ${({ theme }) => theme.gradient};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin-top: 80px;
  padding: 22px 32px;
`;