import { ReactNode } from 'react';

import { Header, HeaderProps } from '../Header';

type LayoutProps = {
  children: ReactNode;
} & HeaderProps;

export const Layout = ({ children, ...other }: LayoutProps) => {
  return (
    <>
      <Header {...other} />
      <main>{children}</main>
    </>
  );
};
