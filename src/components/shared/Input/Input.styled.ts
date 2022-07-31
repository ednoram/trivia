import styled from 'styled-components';

export const StyledInput = styled.input`
  width: 100%;
  padding: 20px 18px 22px;
  display: block;
  font-size: 18px;
  font-weight: 500;
  line-height: 149.9%;
  background: transparent;
  color: ${({ theme }) => theme.palette.common.white};
  border: 1px solid ${({ theme }) => theme.palette.common.white};
  border-radius: ${({ theme }) => theme.borderRadius};
`;
