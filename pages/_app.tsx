import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { AnimatePresence } from 'framer-motion';
import { PurchasesProvider } from '@/context/PurchasesContext';
import '@/styles/globals.scss';

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
