import { FC } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { DataForLogin, LoginForm } from '@/components';
import Layout from '@/layout/Layout';
import { AUTH } from '@/utils/constants';

type Props = {};

const Login: NextPage<Props> = () => {
  return (
    <Layout title='Login page' description='Page for login'>
      <LoginForm />
      <DataForLogin />
    </Layout>
  );
};

// @ts-ignore
export const getServerSideProps: GetServerSideProps = async ctx => {
  const cookies = ctx.req.cookies;
  const token = cookies[AUTH.ACCESS_TOKEN];

  if (token) {
    return {
      redirect: {
        destination: '/lk/profile'
      }
    };
  }

  return {
    props: {}
  };
};

export default Login;
