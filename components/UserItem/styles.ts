import styled from 'styled-components';
import { FontConfig } from 'styles/FontConfig';
import * as M from 'styles/moduleStyle';

export const UserItem = styled.div`
  ${M.selectNone};
  position: relative;
  width: 1410px;
  height: 130px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: start;
  flex-direction: row;
  background-color: ${(props) => props.theme.mainContentBackground};
  border-bottom: 1px solid ${(props) => props.theme.mainBorder};
  color: ${(props) => props.theme.mainContent};
  font-size: ${FontConfig.font18};
  cursor: pointer;
  animation: ${M.fadeIn} 0.1s ease-in-out;
  &:hover {
    background-color: ${(props) => props.theme.navFilterBackground};
  }
`;

export const UserRank = styled.div<{ rank: number }>`
  width: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) =>
    props.rank < 4 ? props.theme.hightlight : props.theme.mainContent};
`;

export const UserProfile = styled.div`
  ${M.dragNone};
  width: 91px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  & > span > img {
    ${M.imgDragNone};
    width: 70px;
    height: 70px;
    border-radius: 50%;
  }
`;

export const UserName = styled.div<{ medal: string | null }>`
  position: relative;
  width: 136px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  &::after {
    content: url(${(props) => props.medal});
    width: 24px;
    height: 24px;
    margin: 2% 0px 0px 2%;
    display: ${(props) => (props.medal ? 'block' : 'none')};
  }
`;

export const UserId = styled.div`
  width: 159px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const UserCommit = styled.div`
  width: 151px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const UserIntro = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const UserKeep = styled.span`
  position: absolute;
  top: 75%;
  left: 17.5%;
  font-size: ${FontConfig.font16};
`;
