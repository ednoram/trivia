import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useToggle } from 'react-use';

import { DropdownSelect, Input } from '~/components/shared';
import { Paths } from '~/constants';
import { useAppDispatch } from '~/hooks';
import { questionsActions } from '~/redux';
import { DifficultyLevels } from '~/types';

import * as S from './StartGameForm.styled';

const DifficultyOptions = Object.values(DifficultyLevels);

const StartGameForm: React.FC = () => {
  const dispatch = useAppDispatch();

  const [loading, toggleLoading] = useToggle(false);
  const [amount, setAmount] = React.useState<number>(10);
  const [difficulty, setDifficulty] = React.useState<DifficultyLevels>(DifficultyLevels.Medium);

  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent): Promise<void> => {
    event.preventDefault();
    toggleLoading();
    await dispatch(questionsActions.getQuestions({ amount, difficulty }));
    toggleLoading();
    navigate(Paths.Game);
  };

  return (
    <S.Form onSubmit={handleSubmit}>
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
      <S.PlayButton submit disabled={loading}>
        {loading ? 'Loading...' : 'Play'}
      </S.PlayButton>
    </S.Form>
  );
};

export default StartGameForm;
