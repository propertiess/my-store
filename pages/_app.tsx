import '@styles/globals.scss';
import type { AppProps } from 'next/app';
import { PurchasesProvider } from '@context/PurchasesContext';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PurchasesProvider>
      <Component {...pageProps} />
    </PurchasesProvider>
  );
}

export default MyApp;
