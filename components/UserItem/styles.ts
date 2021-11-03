import styled from 'styled-components';
import { FontConfig } from 'styles/FontConfig';

export const UserItem = styled.div`
  position: relative;
  width: 1410px;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  text-align: center;
  background-color: ${(props) => props.theme.background};
  border-bottom: 1px solid ${(props) => props.theme.mainBorder};
  color: ${(props) => props.theme.mainContent};
  font-size: ${FontConfig.font18};
  cursor: pointer;
  transition: 0.1s ease-in-out;
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
  width: 91px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  & > span {
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
    position: absolute;
    content: url(${(props) => props.medal});
    width: 24px;
    height: 24px;
    top: 0;
    right: 12%;
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
  left: 18%;
  font-size: ${FontConfig.font16};
`;
