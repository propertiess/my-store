import Head from 'next/head';
import { FC, ReactNode } from 'react';
import Header from '../components/Header/Header';

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
      <main>{children}</main>
      <footer></footer>
    </>
  );
};

export default Layout;
