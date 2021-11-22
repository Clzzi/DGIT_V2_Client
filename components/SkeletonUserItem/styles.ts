import styled from 'styled-components';
import * as M from 'styles/moduleStyle';
export const UserItem = styled.div`
  width: 1410px;
  height: 130px;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  text-align: center;
  background-color: ${({ theme }) => theme.skeletonBackground};
  margin-bottom: 4px;
`;

export const UserItemProfile = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.skeletonContent};
  margin: 0px 25px 0px 25px;
  animation: ${M.skeletonAnimation} 1.5s infinite ease-in-out;
`;

export const UserItemContent = styled.div<{
  width: string;
  height: string;
  margin?: string;
}>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  border-radius: 5px;
  background-color: ${({ theme }) => theme.skeletonContent};
  margin: ${(props) => props.margin};
  animation: ${M.skeletonAnimation} 1.5s infinite ease-in-out;
`;
