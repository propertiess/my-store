import { useState } from 'react';

export const useModal = (initial: boolean) => {
  const [isShow, setIsShow] = useState(initial);

  const toggleShow = () => {
    setIsShow(prev => !prev);
  };

  return {
    isShow,
    toggleShow
  };
};
