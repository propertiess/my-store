import { FC, HTMLAttributes } from 'react';
import { useIsPresent } from 'framer-motion';
import { IDataForLogin } from '@/interfaces/user.interface';

interface Props extends HTMLAttributes<HTMLParagraphElement> {
  data: IDataForLogin;
}

const ParagraphData: FC<Props> = ({ data }) => {
  const { username, password } = data;
  const isPresent = useIsPresent();
  return (
    <p style={{ position: isPresent ? 'static' : 'absolute' }}>
      username: {username}
      <br />
      password: {password}
    </p>
  );
};

export { ParagraphData };
