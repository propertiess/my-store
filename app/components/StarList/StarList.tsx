import React, { FC, HTMLAttributes } from 'react';
import Image from 'next/image';

interface Props extends HTMLAttributes<HTMLDivElement> {
  quantity: number[];
}

const StarList: FC<Props> = ({ quantity, ...other }) => {
  if (!quantity.length) return null;
  return (
    <div {...other}>
      {quantity.map(el => (
        <Image
          key={el}
          data-testid='stars'
          src='/star.svg'
          height={13}
          width={13}
          alt={`star-${el}`}
        />
      ))}
    </div>
  );
};

export { StarList };
