import useTheme from 'hooks/util/useTheme';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'styles/GlobalStyle';

const ThemeProviderContainer = ({
  Component,
  pageProps,
}: any): JSX.Element => {
  const { theme } = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};
export default ThemeProviderContainer;
