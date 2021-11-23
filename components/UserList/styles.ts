import styled from 'styled-components';

export const UserList = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserListContent = styled.div`
  width: 1410px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  &:last-child {
    margin-bottom: 100px;
  }
`;

export const UserItemWrapper = styled.div`
  width: 100vw;
  display: flex;
  height: 100vh;
  align-items: center;
  text-align: center;
  flex-direction: column;
`;
