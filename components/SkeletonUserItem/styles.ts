import styled from 'styled-components';
import * as M from 'styles/moduleStyle';
export const UserItem = styled.div`
  max-width: 1410px;
  width: 100%;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.skeletonBackground};
  margin-bottom: 4px;
  @media screen and (max-width: 767px) {
    padding: 0px 25px;
    height: 80px;
  }
`;

export const UserItemProfile = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.skeletonContent};
  margin: 0px 25px 0px 25px;
  animation: ${M.skeletonAnimation} 1.5s infinite ease-in-out;
  @media screen and (max-width: 767px) {
    width: 48px;
    height: 48px;
    margin: 5px;
  }
`;

export const UserItemContent = styled.div<{
  width: string;
  height: string;
  margin?: string;
  padding?: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.skeletonContent};
  margin: ${(props) => props.margin};
  animation: ${M.skeletonAnimation} 1.5s infinite ease-in-out;
  padding: ${(props) => props.padding};
  @media screen and (max-width: 767px) {
    &:nth-child(1) {
      width: 20px;
      margin: 0px 4px 0px 4px;
    }
    &:nth-child(2) {
      display: none;
    }
    &:nth-child(3) {
      display: none;
    }
    &:nth-child(4) {
      display: none;
    }
    &:nth-child(5) {
      width: 200px;
      margin: 0px 4px 0px 4px;
    }
  }
`;
