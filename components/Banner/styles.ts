import styled from 'styled-components';

export const BannerWrap = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  & > div {
    background-image: url('/static/Banner.png');
    width: 1410px;
    height: 170px;
    min-height: 170px;
  }
`;
