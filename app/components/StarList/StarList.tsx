import React, { FC } from 'react';
import Image from 'next/image';

type Props = {
  quantity: number[];
};

const StarList: FC<Props> = ({ quantity }) => {
  return (
    <div>
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

export default StarList;
