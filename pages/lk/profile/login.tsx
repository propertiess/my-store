import { FC } from 'react';
import LoginForm from '@components/LoginForm/LoginForm';
import { AUTH } from '@utils/constants';
import { GetServerSideProps } from 'next';
import Layout from '@layout/Layout';
import DataForLogin from '@components/DataForLogin/DataForLogin';

type Props = {};

const Login: FC<Props> = ({}) => {
  return (
    <Layout title={'Login page'} description={`Page for login`}>
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
