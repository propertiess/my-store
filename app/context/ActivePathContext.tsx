import {
  createContext,
  Dispatch,
  FC,
  PropsWithChildren,
  SetStateAction,
  useEffect,
  useState
} from 'react';
import { useRouter } from 'next/router';

interface IActivePath {
  path: string;
  setPath: Dispatch<SetStateAction<string>>;
}

export const ActivePathContext = createContext({} as IActivePath);

export const ActivePathProvider: FC<PropsWithChildren> = ({ children }) => {
  const [path, setPath] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (router.asPath === '/lk/profile/login') {
      setPath('/lk/profile');
      return;
    }

    if (router.asPath === '') {
      setPath('/');
      return;
    }

    setPath(router.asPath);
  }, []); // eslint-disable-line

  return (
    <ActivePathContext.Provider
      value={{
        path,
        setPath
      }}
    >
      {children}
    </ActivePathContext.Provider>
  );
};
