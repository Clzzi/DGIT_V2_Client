import styled from 'styled-components';
import { FontConfig } from 'styles/FontConfig';

export const FilterWrapper = styled.div`
  position: relative;
`;

export const Filter = styled.div`
  width: 124px;
  height: 40px;
  border-radius: 8px;
  -o-appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  cursor: pointer;
  &::-ms-expand {
    display: none;
  }
  user-select: none;
  border: none;
  background-color: ${(props) => props.theme.navFilterBackground};
  font-size: ${FontConfig.font16};
  color: ${(porps) => porps.theme.navSelectOptionBackground};
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  & > span {
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    &:first-child {
      width: 87px;
    }
    &:last-child {
      border-left: 1px solid ${(props) => props.theme.navOptionContent};
      width: 37px;
    }
  }
`;

export const Option = styled.div<{ showing: boolean }>`
  width: 87px;
  height: 40px;
  font-size: ${FontConfig.font18};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  user-select: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.showing
      ? props.theme.navSelectOptionBackground
      : props.theme.navOptionBackground};
  color: ${(props) =>
    props.showing
      ? props.theme.navSelectOptionContent
      : props.theme.navOptionContent};
  &:first-child {
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }
  &:last-child {
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
  }
`;

export const OptionWrap = styled.div<{ open: boolean }>`
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-top: 8px;
  opacity: ${(props) => (props.open ? 1 : 0)};
  visibility: ${(props) => (props.open ? 'visible' : 'hidden')};
  transition: 0.2s ease-in-out;
`;
