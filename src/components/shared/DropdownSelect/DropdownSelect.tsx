import React from 'react';
import { useToggle } from 'react-use';
import { useOutsideClick } from 'src/hooks';

import * as S from './DropdownSelect.styled';
import { DropdownSelectProps } from './types';

const DropdownSelect: React.FC<DropdownSelectProps> = ({
  options,
  selectedOption,
  setSelectedOption,
}) => {
  const wrapperRef = React.useRef<HTMLDivElement>(null);

  const [isOpen, toggleIsOpen] = useToggle(false);

  const optionItems = React.useMemo(
    () =>
      options.map((option) => {
        const handleClick = (): void => {
          toggleIsOpen();
          setSelectedOption(option);
        };

        return (
          <S.Option key={option} onClick={handleClick}>
            {option}
          </S.Option>
        );
      }),
    [options, setSelectedOption, toggleIsOpen]
  );

  useOutsideClick(wrapperRef, () => toggleIsOpen(false));

  return (
    <S.Wrapper ref={wrapperRef}>
      <S.SelectedOption onClick={toggleIsOpen}>
        <p>{selectedOption}</p>
        <S.Arrow $isOpen={isOpen} />
      </S.SelectedOption>
      {isOpen && <S.Options>{optionItems}</S.Options>}
    </S.Wrapper>
  );
};

export default DropdownSelect;
