import * as M from 'styles/moduleStyle';
import styled from 'styled-components';
import { getPropertyWidth } from 'util/getPropertyWidth';
import { getRem } from 'util/getRem';
import { FontConfig } from 'styles/FontConfig';

export const PropertyBar = styled.section`
  width: 100vw;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 1000px) {
    height: 32px;
    padding: 0px 25px;
  }
`;

export const PropertyBarContent = styled.div`
  width: 1410px;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.mainPropertyBackground};
  border-radius: 8px;
`;

export const Property = styled.div<{ number: number }>`
  ${M.selectNone};
  height: 100%;
  width: ${(props) => getPropertyWidth(props.number)};
  color: ${(props) => props.theme.mainProperty};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  transition: 0.2s ease-in-out;
  font-size: ${FontConfig.font16};
  @media screen and (max-width: 1000px) {
    font-size: ${getRem(13)};
  }
`;
