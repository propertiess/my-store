import { useState } from 'react';

export const useClassName = (initial: string, to: string) => {
  const [currClassName, setCurrClassName] = useState(initial);

  const toggle = () => {
    if (currClassName !== `${initial} ${to}`) {
      setCurrClassName(prev => `${prev} ${to}`);
      return;
    }
    setCurrClassName(initial);
  };

  return {
    currClassName,
    toggle
  };
};
