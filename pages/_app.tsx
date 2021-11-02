import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import GlobalStyle from 'styles/GlobalStyle';
import useTheme from 'hooks/util/useTheme';
import { ThemeProvider } from 'styled-components';

const App = ({ Component, pageProps }: AppProps) => {
  const theme = useTheme();
  return (
    <RecoilRoot>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </RecoilRoot>
  );
};

export default App;
