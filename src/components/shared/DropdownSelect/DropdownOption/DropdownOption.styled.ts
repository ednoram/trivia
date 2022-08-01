import styled from 'styled-components';

export const Option = styled.div`
  user-select: none;
  cursor: pointer;
  padding: 14px 16px;

  :hover {
    background-color: ${({ theme }) => theme.palette.common.lightGray};
  }
`;
