import { FC } from 'react';
import Link from 'next/link';
import { IconItem } from '@/components';
import { useToolbarIcon } from '@/hooks';
import classes from './Toolbar.module.scss';

type Props = {};

const Toolbar: FC<Props> = ({}) => {
  const { toolBars } = useToolbarIcon();

  return (
    <nav className={classes.nav} data-testid='toolbar'>
      <ul className={classes.list} data-testid='toolbar-list'>
        {toolBars.map(item => (
          <Link key={item.id} href={item.path} prefetch={false}>
            <IconItem item={item} />
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export { Toolbar };
