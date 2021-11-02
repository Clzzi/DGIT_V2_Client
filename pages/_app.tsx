import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import ThemeProviderContainer from 'components/ThemeProviderContainer/ThemeProviderContainer';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <RecoilRoot>
      <ThemeProviderContainer Component={Component} pageProps={pageProps} />
    </RecoilRoot>
  );
};

export default App;
