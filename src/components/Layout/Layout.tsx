import { ReactNode } from 'react';

import { Header, HeaderProps } from '../Header';

import { MainContainer } from './styles';

type LayoutProps = {
  children: ReactNode;
} & HeaderProps;

export const Layout = ({ children, ...other }: LayoutProps) => {
  return (
    <>
      <Header {...other} />
      <MainContainer>{children}</MainContainer>
    </>
  );
};
