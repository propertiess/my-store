import { FC } from 'react';
import classes from './Toolbar.module.scss';
import IconItem from '@components/IconItem/IconItem';
import { useToolbarIcon } from '@hooks/useToolbarIcon';

type Props = {};

const Toolbar: FC<Props> = ({}) => {
  const { toolBars, setActiveItem } = useToolbarIcon();
  return (
    <nav className={classes.nav} data-testid='toolbar'>
      <ul className={classes.list} data-testid='toolbar-list'>
        {toolBars.map(item => (
          <IconItem
            key={item.id}
            onClick={() => {
              setActiveItem(item.path);
            }}
            item={item}
          />
        ))}
      </ul>
    </nav>
  );
};

export default Toolbar;
