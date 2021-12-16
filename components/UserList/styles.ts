import styled from 'styled-components';

export const UserList = styled.div`
  width: 100vw;
  height: fit-content;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    padding: 0px 25px;
  }
`;

export const UserListContent = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 1410px;
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
