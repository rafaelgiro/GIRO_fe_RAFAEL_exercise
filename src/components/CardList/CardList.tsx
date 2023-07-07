import { ReactNode } from 'react';

import { Spinner } from '../Spinner';

import { CardListContainer } from './styles';

interface CardListProps {
  /**
   * The child elements to be rendered as cards.
   */
  children: ReactNode;
  /**
   * Specifies whether the card list is in a loading state.
   */
  isLoading: boolean;
}

/**
 * CardList component represents a list of cards.
 * It can be used to render a collection of Card components.
 * @param children - The child elements to be rendered as cards.
 * @param isLoading - Specifies whether the card list is in a loading state.
 * @returns The rendered CardList component.
 */
export const CardList = ({ children, isLoading }: CardListProps) => {
  if (isLoading) return <Spinner />;

  return <CardListContainer>{children}</CardListContainer>;
};
