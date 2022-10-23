import React, { FC, HTMLAttributes, ReactNode } from 'react';
import classes from './ModalList.module.scss';
import CustomMotion from '@/components/CustomMotion/CustomMotion';
import { leftFadeInOut } from '@/animations';
import { AnimatePresence } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLDivElement> {
  active: boolean;
  children?: ReactNode;
}

const ModalList: FC<Props> = ({ active, children, ...other }) => {
  return (
    <AnimatePresence mode='popLayout'>
      {active && (
        <CustomMotion
          element='div'
          variants={leftFadeInOut}
          className={classes.wrap}
          {...other}
        >
          <div className={classes.content} onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </CustomMotion>
      )}
    </AnimatePresence>
  );
};

export default ModalList;
