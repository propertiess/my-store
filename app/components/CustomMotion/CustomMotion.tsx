import { FC, HTMLAttributes, ReactNode } from 'react';
import { motion, Variants } from 'framer-motion';

interface Props extends HTMLAttributes<HTMLElement> {
  element: string;
  variants?: Variants;
  children?: ReactNode;
  layout?: boolean;
}

const CustomMotion: FC<Props> = ({
  element,
  children,
  variants,
  layout,
  ...other
}) => {
  // @ts-ignore
  const Component = motion[element];

  return (
    <Component
      initial='initial'
      animate='animate'
      whileTap='whileTap'
      whileInView='whileInView'
      whileHover='whileHover'
      whileDrag='whileDrag'
      whileFocus='whileFocus'
      layout={layout}
      exit='exit'
      variants={variants}
      {...other}
    >
      {children}
    </Component>
  );
};

export default CustomMotion;
