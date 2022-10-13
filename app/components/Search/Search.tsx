import { FC } from 'react';
import classes from './Search.module.scss';

type Props = {
  searchQuery: (val: string) => void;
};

const Search: FC<Props> = ({ searchQuery }) => {
  return (
    <form
      className={classes.form}
      data-testid='form'
      onSubmit={e => e.preventDefault()}
    >
      <input
        data-testid='form-input'
        className={classes.input}
        onChange={e => searchQuery(e.target.value)}
        placeholder='Что хотите найти?'
        type='text'
      />
    </form>
  );
};

export default Search;
