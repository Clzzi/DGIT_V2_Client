import { CSSProperties } from 'styled-components';

export interface IFontConfig {
  font16: string;
  font18: string;
  font20: string;
  font24: string;
  font30: string;
}

export interface IButton {
  message: string;
  fontColor: string;
  backgroundColor: string;
  customStyle?: CSSProperties;
  click?: () => void | Promise<void>;
}

export type TNav = '종합' | '주간' | '주간기록';
