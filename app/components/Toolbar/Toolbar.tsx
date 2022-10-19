import { FC, useContext } from 'react';
import classes from './Toolbar.module.scss';
import IconItem from '@components/IconItem/IconItem';
import { useToolbarIcon } from '@hooks/useToolbarIcon';
import { ActivePathContext } from '@context/ActivePathContext';

type Props = {};

const Toolbar: FC<Props> = ({}) => {
  const { toolBars, setActiveItem } = useToolbarIcon();
  const { setPath } = useContext(ActivePathContext);
  return (
    <nav className={classes.nav} data-testid='toolbar'>
      <ul className={classes.list} data-testid='toolbar-list'>
        {toolBars.map(item => (
          <IconItem
            key={item.id}
            onClick={() => {
              setPath(item.path);
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
