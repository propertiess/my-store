import { useState } from 'react';

export const useArray = (count: number) => {
  const temp: number[] = [];
  for (let i = 1; i <= count; i++) {
    temp.push(i);
  }

  const [arr] = useState(temp);

  return {
    arr
  };
};
