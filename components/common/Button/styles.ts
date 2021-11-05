import * as M from 'styles/moduleStyle';
import styled from 'styled-components';
import { IButton } from 'types/common.type';

export const Button = styled.div<Omit<IButton, 'click' | 'message'>>`
  ${M.selectNone};
  width: 74px;
  height: 32px;
  color: ${(props) => props.fontColor};
  background-color: ${(props) => props.backgroundColor};
  border-radius: 999px;
  border: 1px solid ${(props) => props.theme.mainContent};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  cursor: pointer;
`;
