import '../styles/globals.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'wagmi';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default appWithTranslation(MyApp);
