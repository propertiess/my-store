import { FC } from 'react';
import classes from './Header.module.scss';
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

type Props = {};

const Header: FC<Props> = ({}) => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li className={classes.logo}>My Store</li>
          <li>
            <ShoppingBagIcon
              className={classes.icon}
              width={25}
              height={25}
              color='white'
            />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
