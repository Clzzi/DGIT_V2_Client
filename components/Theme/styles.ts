import styled from 'styled-components';

export const ThemeWrapper = styled.div`
  position: relative;
`;
export const ThemeLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 56px;
  height: 28px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.themeBackground};
  cursor: pointer;
  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    margin: 4.8px;
    background-color: ${({ theme }) => theme.themeBall};
    box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
    transition: 0.2s;
  }
`;
export const Theme = styled.input`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 56px;
  height: 28px;
  &:checked + ${ThemeLabel} {
    background-color: ${({ theme }) => theme.themeBackground};
    &::after {
      content: '';
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      margin-left: 33px;
      transition: 0.2.5s ease-in-out;
      background-color: ${({ theme }) => theme.themeBall};
    }
  }
`;
