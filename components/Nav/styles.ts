import * as M from 'styles/moduleStyle';
import styled from 'styled-components';
import { FontConfig } from 'styles/FontConfig';

export const Nav = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const NavContent = styled.div`
  width: 1410px;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

export const NavButtonWrap = styled.div`
  display: inline-flex;
  width: 195px;
  height: 100%;
  margin-left: 18px;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

export const NavButton = styled.div<{ showing: boolean }>`
  ${M.selectNone};
  width: fit-content;
  height: 33px;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  border-bottom: 2px solid
    ${(props) => (props.showing ? props.theme.navTitle : 'transparent')};
  & > div {
    transition: 0.2s ease-in-out;
    font-size: ${FontConfig.font18};
    font-weight: bold;
    color: ${(props) =>
      props.showing ? props.theme.navTitle : props.theme.navNoneSelect};
  }
`;
