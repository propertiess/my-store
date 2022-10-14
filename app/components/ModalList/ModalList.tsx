import { FC, HTMLAttributes, ReactNode } from 'react';
import classes from './ModalList.module.scss';

interface Props extends HTMLAttributes<HTMLDivElement> {
  active: boolean;
  children?: ReactNode;
}

const ModalList: FC<Props> = ({ active, children, ...other }) => {
  if (!active) return null;

  return (
    <div className={classes.wrap} {...other}>
      <div className={classes.content} onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default ModalList;
