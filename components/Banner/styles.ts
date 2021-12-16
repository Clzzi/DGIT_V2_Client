import styled from 'styled-components';
import { getRem } from 'util/getRem';

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
  font-size: ${getRem(26)};
  font-weight: lighter;
  color: white;
  line-height: 2.5rem;
  @media screen and (max-width: 1000px) {
    font-size: ${getRem(16)};
  }
`;

export const Content = styled.div`
  font-family: 'YiSunShin' !important;
  font-size: ${getRem(22)};
  font-weight: lighter;
  color: white;
  word-break: keep-all;
  @media screen and (max-width: 1000px) {
    font-size: ${getRem(13.5)};
    width: 50%;
    display: inline-block;
  }
`;
