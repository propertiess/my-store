import { FC, useEffect, useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import { fadeInOut } from '@/animation';
import classes from './Loading.module.scss';

type Props = {};

const Loading: FC<Props> = ({}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleStart = (url: string) =>
      url !== router.asPath && setLoading(true);
    const handleComplete = (url: string) =>
      url === router.asPath && setLoading(false);

    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleComplete);
    router.events.on('routeChangeError', handleComplete);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleComplete);
      router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    <>
      <AnimatePresence mode={'wait'}>
        {loading && (
          <motion.div className={classes.wrap} {...fadeInOut}>
            <ClipLoader className={classes.loader} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export { Loading };
