import '../styles/globals.css';
import '../styles/index.css';
import React from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'wagmi';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
