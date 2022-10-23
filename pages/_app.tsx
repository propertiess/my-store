import '@/styles/globals.scss';
import type { AppProps } from 'next/app';
import { PurchasesProvider } from '@/context/PurchasesContext';
import { AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <PurchasesProvider>
      <AnimatePresence mode='wait'>
        <Component key={router.basePath} {...pageProps} />
      </AnimatePresence>
    </PurchasesProvider>
  );
}

export default MyApp;
