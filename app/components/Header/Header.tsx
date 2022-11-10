import { Bars3Icon } from '@heroicons/react/24/outline';
import { FC } from 'react';
import Link from 'next/link';
import { IconItem, ModalList } from '@/components';
import { useModal, useToolbarIcon } from '@/hooks';
import classes from './Header.module.scss';

type Props = {};

const Header: FC<Props> = ({}) => {
  const { isShow, toggleShow } = useModal(false);
  const { toolBars } = useToolbarIcon();

  return (
    <>
      <header className={classes.header} data-testid='header'>
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
          </ul>
        </nav>
      </header>
      <ModalList active={isShow} onClick={toggleShow}>
        {toolBars.map(el => (
          <Link key={el.id} href={el.path} prefetch={false}>
            <IconItem
              key={el.id}
              item={el}
              onClick={() => {
                toggleShow();
              }}
            />
          </Link>
        ))}
      </ModalList>
    </>
  );
};

export { Header };
