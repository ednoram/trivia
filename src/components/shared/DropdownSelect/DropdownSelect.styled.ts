import { DropdownArrow } from 'src/assets';
import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
`;

export const SelectedOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20px 18px 22px;
  font-size: 18px;
  font-weight: 500;
  line-height: 149.9%;
  background: transparent;
  color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.borderRadius};
  user-select: none;
  cursor: pointer;
`;

export const Arrow = styled(DropdownArrow)<{ $isOpen?: boolean }>`
  display: block;
  transition: transform 0.2s;
  transform: ${({ $isOpen }) => ($isOpen ? 'rotate(180deg)' : '')};
`;

export const Options = styled.div`
  position: absolute;
  width: 100%;
  top: calc(100% + 6px);
  left: 0;
  padding: 10px 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.palette.common.white};
`;

export const Option = styled.div`
  user-select: none;
  cursor: pointer;
  padding: 10px 16px;

  :hover {
    background-color: ${({ theme }) => theme.palette.common.lightGray};
  }
`;
