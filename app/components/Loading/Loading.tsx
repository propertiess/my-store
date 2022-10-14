import { FC, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { ClipLoader } from 'react-spinners';
import classes from './Loading.module.scss';
import { AnimatePresence } from 'framer-motion';
import CustomMotion from '@components/CustomMotion/CustomMotion';
import { fadeInOut } from '@animations';

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
          <CustomMotion
            className={classes.wrap}
            element='div'
            variants={fadeInOut}
          >
            <ClipLoader className={classes.loader} />
          </CustomMotion>
        )}
      </AnimatePresence>
    </>
  );
};

export default Loading;
