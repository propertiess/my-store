import { FC } from 'react';
import { GetServerSideProps, NextPage } from 'next';
import { ProfileItem } from '@/components';
import { IUser } from '@/interfaces/user.interface';
import Layout from '@/layout/Layout';
import { UserService } from '@/services/users/user.service';

type Props = {
  user: IUser;
};

const Profile: NextPage<Props> = ({ user }) => {
  return (
    <Layout title={user.username} description={`Page of user ${user.username}`}>
      <ProfileItem user={user} />
    </Layout>
  );
};

// @ts-ignore
export const getServerSideProps: GetServerSideProps = async ctx => {
  const cookies = ctx.req.cookies;
  const user = await UserService.fetchUser(cookies);

  if (!user) {
    return {
      redirect: {
        destination: '/lk/profile/login'
      }
    };
  }

  return {
    props: {
      user
    }
  };
};

export default Profile;
