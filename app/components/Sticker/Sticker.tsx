import { FC, HTMLAttributes } from 'react';
import classes from './Sticker.module.scss';

interface Props extends HTMLAttributes<HTMLSpanElement> {
  value: string | number;
}

const Sticker: FC<Props> = ({ value, ...other }) => {
  if (value === 0) return null;
  return (
    <span className={classes.sticker} {...other}>
      {value}
    </span>
  );
};

export { Sticker };
