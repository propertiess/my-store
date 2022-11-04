import { FC, HTMLAttributes, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { leftFadeInOut } from '@/animation';
import classes from './ModalList.module.scss';

interface Props {
  active: boolean;
  onClick?: () => void;
  children?: ReactNode;
}

const ModalList: FC<Props> = ({ active, children, onClick }) => {
  return (
    <AnimatePresence mode='popLayout'>
      {active && (
        <motion.div
          className={classes.wrap}
          {...leftFadeInOut}
          onClick={onClick}
        >
          <div className={classes.content} onClick={e => e.stopPropagation()}>
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export { ModalList };
