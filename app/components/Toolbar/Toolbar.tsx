import { FC } from 'react';
import { IconItem } from '@/components';
import { useToolbarIcon } from '@/hooks';
import classes from './Toolbar.module.scss';

type Props = {};

const Toolbar: FC<Props> = ({}) => {
  const { toolBars, setActiveItem } = useToolbarIcon();

  return (
    <nav className={classes.nav} data-testid='toolbar'>
      <ul className={classes.list} data-testid='toolbar-list'>
        {toolBars.map(item => (
          <IconItem
            key={item.id}
            item={item}
            onClick={() => setActiveItem(item.path)}
          />
        ))}
      </ul>
    </nav>
  );
};

export { Toolbar };
