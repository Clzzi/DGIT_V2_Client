import ReactGA from 'react-ga';
import { useEffect } from 'react';
import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import { ToastContainer } from 'react-toastify';
import ThemeProviderContainer from 'components/ThemeProviderContainer/ThemeProviderContainer';

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    ReactGA.initialize(`${process.env.NEXT_PUBLIC_GA_ID}`);
    ReactGA.set({ page: window.location.pathname });
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <RecoilRoot>
      <ToastContainer
        position="bottom-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable
        pauseOnHover={false}
      />
      <ThemeProviderContainer Component={Component} pageProps={pageProps} />
    </RecoilRoot>
  );
};

export default App;
