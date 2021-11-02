import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    hightlight: string;
    mainContent: string;
    mainProperty: string;
    mainPropertyBackground: string;
    navTitle: string;
    navNoneSelect: string;
    navFilterBackground: string;
    navOptionContent: string;
    navOptionBackground: string;
    navSelectOptionBackground: string;
    navSelectOptionContent: string;
    modalTitle: string;
    modalIntro: string;
    modalBorder: string;
    modalContent: string;
    modalSubTitle: string;
  }
}