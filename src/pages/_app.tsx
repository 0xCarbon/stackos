import '../styles/globals.css';
import React, { Suspense } from 'react';
import type { AppProps } from 'next/app';
import { Provider } from 'wagmi';
import { appWithTranslation } from 'next-i18next';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Suspense fallback="Loading...">
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </Suspense>
  );
}

export default appWithTranslation(MyApp);
