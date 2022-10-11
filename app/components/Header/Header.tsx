import { FC } from 'react';
import classes from './Header.module.scss';
import { Bars3Icon, ShoppingBagIcon } from '@heroicons/react/24/outline';
import { useModal } from '../../hooks/useModal';
import ModalList from '../ModalList/ModalList';
import IconItem from '../IconItem/IconItem';
import { useToolbarIcon } from '../../hooks/useToolbarIcon';

type Props = {};

const Header: FC<Props> = ({}) => {
  const { isShow, toggleShow } = useModal(false);
  const { toolBars, setActiveItem } = useToolbarIcon();

  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <>
              <Bars3Icon
                className={classes.icon}
                onClick={toggleShow}
                color='white'
              />
            </>
            <li className={classes.logo}>My Store</li>
            <li>
              <ShoppingBagIcon className={classes.icon} color='white' />
            </li>
          </ul>
        </nav>
      </header>
      <ModalList active={isShow} onClick={toggleShow}>
        {toolBars.map(el => (
          <IconItem
            key={el.id}
            item={el}
            onClick={() => setActiveItem(el.path)}
          />
        ))}
      </ModalList>
    </>
  );
};

export default Header;
