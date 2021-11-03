import styled from 'styled-components';
import { FontConfig } from 'styles/FontConfig';

export const Help = styled.div`
  width: 860px;
  height: 508px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: start;
`;

export const HelpTitle = styled.div`
  width: 848px;
  height: 63px;
  border-bottom: 1px solid ${(props) => props.theme.modalBorder};
  & > div {
    font-size: ${FontConfig.font30};
    font-weight: bold;
    color: ${(props) => props.theme.mainContent};
  }
`;

export const HelpContent = styled.ol`
  width: 860px;
  height: 416px;
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
    list-style: decimal !important;
  }
`;
