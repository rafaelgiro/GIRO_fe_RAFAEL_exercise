import { ReactNode } from 'react';

import { Spinner } from '../Spinner';

import { CardListContainer } from './styles';

interface CardListProps {
  children: ReactNode;
  isLoading: boolean;
}

export const CardList = ({ children, isLoading }: CardListProps) => {
  if (isLoading) return <Spinner />;

  return <CardListContainer>{children}</CardListContainer>;
};
