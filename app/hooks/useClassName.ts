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

  const removeClassName = () => {
    setCurrClassName(initial);
  };

  const addClassName = () => {
    setCurrClassName(`${initial} ${to}`);
  };

  return {
    currClassName,
    toggle,
    addClassName,
    removeClassName
  };
};
