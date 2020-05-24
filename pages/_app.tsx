import { AppProps } from 'next/app';
import React from 'react';
import '../scss/index.scss';


function Component({ Component, pageProps }: AppProps) {
  return (
    <Component {...pageProps}/>
  );
}

export default Component;
