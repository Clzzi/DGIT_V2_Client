import styled from 'styled-components';

export const BannerWrap = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  & > div {
    background-image: url('/static/Banner.jpg');
    width: 1410px;
    height: 170px;
    border-radius: 16px;
    text-align: right;
    padding: 45px 90px 45px 0px;
    @media screen and (max-width: 1000px) {
      height: 130px;
      padding: 0px 25px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: flex-end;
    }
  }

  @media screen and (max-width: 1000px) {
    padding: 0px 25px;
  }
`;

export const Title = styled.div`
  font-family: 'SB AGGRO' !important;
  font-size: 26px;
  font-weight: lighter;
  color: white;
  line-height: 2.5rem;
  @media screen and (max-width: 1000px) {
    font-size: 16px;
  }
`;

export const Content = styled.div`
  font-family: 'YiSunShin' !important;
  font-size: 22px;
  font-weight: lighter;
  color: white;
  word-break: keep-all;
  @media screen and (max-width: 1000px) {
    font-size: 13.5px;
    width: 50%;
    display: inline-block;
  }
`;
