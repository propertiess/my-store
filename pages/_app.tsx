import '@styles/globals.scss';
import type { AppProps } from 'next/app';
import { PurchasesProvider } from '@context/PurchasesContext';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import { ActivePathProvider } from '@context/ActivePathContext';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ActivePathProvider>
      <PurchasesProvider>
        <AnimatePresence mode='wait'>
          <Component key={router.basePath} {...pageProps} />
        </AnimatePresence>
      </PurchasesProvider>
    </ActivePathProvider>
  );
}

export default MyApp;
