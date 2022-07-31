import React from 'react';
import { DropdownSelect, Input } from 'src/components/shared';
import { DifficultyLevels } from 'src/types';

import * as S from './StartGameForm.styled';

const DifficultyOptions = Object.values(DifficultyLevels);

const StartGameForm: React.FC = () => {
  const [amount, setAmount] = React.useState<number>(10);
  const [difficulty, setDifficulty] = React.useState<DifficultyLevels>(DifficultyLevels.Medium);

  return (
    <S.Form>
      <S.Label htmlFor="difficulty">
        <S.Trophy />
        Difficulty
      </S.Label>
      <DropdownSelect
        selectedOption={difficulty}
        options={DifficultyOptions}
        setSelectedOption={setDifficulty as (value: string) => void}
      />
      <S.AmountInputWrapper>
        <S.Label htmlFor="amount">
          <S.Coin /> Amount
        </S.Label>
        <Input
          name="amount"
          type="integer"
          value={String(amount)}
          onChange={(value) => setAmount(Number(value))}
        />
      </S.AmountInputWrapper>
      <S.PlayButton>Play</S.PlayButton>
    </S.Form>
  );
};

export default StartGameForm;
