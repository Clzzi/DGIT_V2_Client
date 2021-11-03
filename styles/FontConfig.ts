import { IFontConfig } from 'types/theme.type';

const getRem = (value: number): string => {
  return `${value / 16}rem`;
};

export const FontConfig: IFontConfig = {
  font16: getRem(16),
  font18: getRem(18),
  font20: getRem(20),
  font24: getRem(24),
  font30: getRem(30),
};
