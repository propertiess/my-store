import { ReactNode } from 'react';

export interface IToolbar {
  id: number;
  active: boolean;
  path: string;
  solid: ReactNode;
  outline: ReactNode;
}
