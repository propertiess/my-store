import { FC } from 'react';
import { IUser } from '@/interfaces/user.interface';
import classes from './ProfileItem.module.scss';
import { AuthService } from '@/services/auth/auth.service';
import { useRouter } from 'next/router';

type Props = {
  user: IUser;
};

const ProfileItem: FC<Props> = ({ user }) => {
  const router = useRouter();

  const logOutHandler = async () => {
    await AuthService.logout();
    await router.push('/lk/profile/login');
  };

  return (
    <>
      <div className={classes.wrap}>
        <button onClick={logOutHandler}>Выйти</button>
        <div>
          <h3>
            {user.name.firstname} {user.name.lastname}
          </h3>
          <span>Phone:</span>
          <p>{user.phone}</p>
        </div>
        <div>
          <span>City and street:</span>

          <p>
            {user.address.city} {user.address.street}
          </p>
        </div>
      </div>
    </>
  );
};

export default ProfileItem;
