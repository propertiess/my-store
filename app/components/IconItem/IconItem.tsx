import { FC, HTMLAttributes } from 'react';
import { IToolbar } from '@interfaces/toolbar.interface';
import classes from './IconItem.module.scss';
import { ICartIcon } from '@interfaces/cartIcon.interface';

interface Props extends HTMLAttributes<HTMLLIElement> {
  item: IToolbar | ICartIcon;
}

const IconItem: FC<Props> = ({ item, ...other }) => {
  return (
    <>
      {(item as IToolbar)?.active || (item as ICartIcon)?.added ? (
        <li className={classes.icon} {...other}>
          {item.solid}
        </li>
      ) : (
        <li className={classes.icon} {...other}>
          {item.outline}
        </li>
      )}
    </>
  );
};

export default IconItem;
