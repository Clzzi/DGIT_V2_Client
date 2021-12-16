import styled from 'styled-components';
import { FontConfig } from 'styles/FontConfig';
import * as M from 'styles/moduleStyle';
import { getRem } from 'util/getRem';

export const UserItem = styled.div`
  ${M.selectNone};
  position: relative;
  width: 100%;
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
  @media screen and (max-width: 767px) {
    font-size: ${getRem(14)};
    height: 80px;
  }
`;

export const UserRank = styled.div<{ rank: number }>`
  width: 9.7%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: ${(props) =>
    props.rank < 4 ? props.theme.hightlight : props.theme.mainContent};
  @media screen and (max-width: 767px) {
    width: 15%;
  }
`;

export const UserProfile = styled.div`
  ${M.dragNone};
  width: 5.8%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  border-radius: 50%;
  & > span > img {
    ${M.imgDragNone};
    border-radius: 50%;
    @media screen and (max-width: 767px) {
      min-height: 70% !important;
      max-height: 70% !important;
      min-width: 70% !important;
      max-width: 70% !important;
    }
  }
  @media screen and (max-width: 767px) {
    width: 20%;
  }
`;

export const UserName = styled.div<{ medal: string | null }>`
  position: relative;
  width: 9.8%;
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
    @media screen and (max-width: 767px) {
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    width: 20%;
  }
`;

export const UserId = styled.div`
  width: 11.8%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 767px) {
    width: 20%;
  }
`;

export const UserCommit = styled.div`
  width: 10.5%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 767px) {
    width: 15%;
  }
`;

export const UserIntro = styled.div`
  width: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 767px) {
    display: none;
  }
`;

export const UserKeep = styled.span`
  position: absolute;
  top: 75%;
  left: 17.5%;
  font-size: ${FontConfig.font16};
  @media screen and (max-width: 767px) {
    display: none;
  }
`;
