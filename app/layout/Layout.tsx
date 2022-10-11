import Head from 'next/head';
import { FC, ReactNode } from 'react';
import Header from '@components/Header/Header';
import Toolbar from '@components/Toolbar/Toolbar';
import Loading from '@components/Loading/Loading';
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
        <>
          <Loading />
          {children}
        </>
      </main>
      <footer></footer>
      <Toolbar />
    </>
  );
};

export default Layout;
