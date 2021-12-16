import * as M from 'styles/moduleStyle';
import styled from 'styled-components';
import { FontConfig } from 'styles/FontConfig';

export const Help = styled.div`
  ${M.selectNone};
  width: 80%;
  height: 75%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: start;
`;

export const HelpTitle = styled.div`
  width: 100%;
  height: 12.5%;
  border-bottom: 1px solid ${(props) => props.theme.modalBorder};
  & > div {
    font-size: ${FontConfig.font30};
    font-weight: bold;
    color: ${(props) => props.theme.mainContent};
  }
  @media screen and (max-width: 767px) {
    height: 7%;
    & > div {
      font-size: ${FontConfig.font16};
    }
  }
`;

export const HelpContent = styled.ol`
  width: 100%;
  height: 82.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  text-align: start;
  padding-left: 36px;
  & > li {
    font-size: ${FontConfig.font20};
    color: ${(props) => props.theme.modalIntro};
    font-weight: 400;
    word-break: keep-all;
    list-style: decimal;
  }
  @media screen and (max-width: 767px) {
    & > li {
      font-size: ${FontConfig.font14};
    }
  }
`;
