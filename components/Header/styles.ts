import styled from 'styled-components';

export const Header = styled.header`
  width: 100vw;
  height: 90px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  @media screen and (max-width: 1000px) {
    padding: 0px 25px;
  }
`;

export const HeaderContent = styled.div`
  width: 1410px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
`;

export const HeaderButton = styled.div`
  width: 162px;
  height: 32px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  @media screen and (max-width: 1000px) {
    width: 134px;
    height: 28px;
  }
`;
