import { FC, ReactNode } from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Header, Loading, Toolbar } from '@/components';
import { fadeInUp } from '@/animation';
import classes from './Layout.module.scss';

type TLayout = {
  title: string;
  description: string;
  children?: ReactNode;
};

const Layout: FC<TLayout> = ({ title, description, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
      </Head>
      <Header />
      <main className={classes.main}>
        <motion.section {...fadeInUp}>
          <Loading />
          {children}
        </motion.section>
      </main>
      <footer></footer>
      <Toolbar />
    </>
  );
};

export default Layout;
