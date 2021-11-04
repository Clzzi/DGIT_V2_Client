import { RecoilRoot } from 'recoil';
import type { AppProps } from 'next/app';
import ThemeProviderContainer from 'components/ThemeProviderContainer/ThemeProviderContainer';
import { ToastContainer } from 'react-toastify';

const App = ({ Component, pageProps }: AppProps) => {
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
