import styled from 'styled-components';
import { getPropertyWidth } from 'util/getPropertyWidth';

export const PropertyBar = styled.section`
  width: 100vw;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const PropertyBarContent = styled.div`
  width: 1410px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.mainPropertyBackground};
  border-radius: 8px;
`;

export const Property = styled.div<{ number: number }>`
  height: 100%;
  width: ${(props) => getPropertyWidth(props.number)};
  color: ${(props) => props.theme.mainProperty};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: 0.2s ease-in-out;
  user-select: none;
`;
