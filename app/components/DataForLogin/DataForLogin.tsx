import { FC, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ParagraphData } from '@/components';
import { fadeInOut } from '@/animation';
import { useModal } from '@/hooks';
import { IDataForLogin } from '@/interfaces/user.interface';
import { UserService } from '@/services/users/user.service';
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
    <motion.div className={classes.wrap} layout>
      <motion.div className={classes.title} onClick={toggleShow} layout>
        Open data for login
      </motion.div>
      <AnimatePresence mode='popLayout'>
        {isShow && (
          <motion.div {...fadeInOut}>
            {data?.map(el => (
              <ParagraphData key={el.username} data={el} />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export { DataForLogin };
