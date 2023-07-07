import { ReactNode } from 'react';

import { Header, HeaderProps } from '../Header';

import { MainContainer } from './styles';

type LayoutProps = {
  /**
   * The child elements to be rendered within the main container.
   */
  children: ReactNode;
} & HeaderProps;

/**
 * Layout component represents the overall layout of the application.
 * It includes a header and a main container for rendering the content.
 * @param children - The child elements to be rendered within the main container.
 * @param other - Additional props to be passed to the Header component.
 * @returns The rendered Layout component.
 */
export const Layout = ({ children, ...other }: LayoutProps) => {
  return (
    <>
      <Header {...other} />
      <MainContainer>{children}</MainContainer>
    </>
  );
};
