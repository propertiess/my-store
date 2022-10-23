import { FC, useEffect, useState } from 'react';
import { UserService } from '@/services/users/user.service';
import { useModal } from '@/hooks/useModal';
import { AnimatePresence } from 'framer-motion';
import CustomMotion from '@/components/CustomMotion/CustomMotion';
import { fadeInOut } from '@/animations';
import { IDataForLogin } from '@/interfaces/user.interface';
import ParagraphData from '@/components/ParagraphData/ParagraphData';
import classes from './DataForLogin.module.scss';

const DataForLogin: FC = () => {
  const [data, setData] = useState<IDataForLogin[]>([]);
  const { isShow, toggleShow } = useModal(false);

  const fetch = async () => {
    const response = await UserService.fetchUsersData();
    response && setData(response);
  };

  useEffect(() => {
    fetch();
  }, []);

  return (
    <CustomMotion element='div' layout className={classes.wrap}>
      <CustomMotion
        element='div'
        layout
        onClick={toggleShow}
        className={classes.title}
      >
        Open data for login
      </CustomMotion>
      <AnimatePresence mode='popLayout'>
        {isShow && (
          <CustomMotion element='div' variants={fadeInOut}>
            {data?.map(el => (
              <ParagraphData key={el.username} data={el} />
            ))}
          </CustomMotion>
        )}
      </AnimatePresence>
    </CustomMotion>
  );
};

export default DataForLogin;
