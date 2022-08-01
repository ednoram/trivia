import React from 'react';

import * as S from './DropdownOption.styled';
import { DropdownOptionProps } from './types';

const DropdownOption: React.FC<DropdownOptionProps> = ({
  option,
  toggleIsOpen,
  setSelectedOption,
}) => {
  const handleClick = (): void => {
    toggleIsOpen();
    setSelectedOption(option);
  };

  return (
    <S.Option key={option} onClick={handleClick}>
      {option}
    </S.Option>
  );
};

export default DropdownOption;
