import { Card } from '../Card';
import { Spinner } from '../Spinner';

import { CardListContainer } from './styles';

interface CardListProps {
  columns: Record<string, string>;
  items: Record<string, any>[];
  isLoading: boolean;
  onNavigationRequest?: (values: Record<string, any>) => void;
}

export const CardList = ({ items, columns, onNavigationRequest, isLoading }: CardListProps) => {
  if (isLoading) return <Spinner />;

  return (
    <CardListContainer>
      {items.map((card) => {
        return (
          <Card
            key={JSON.stringify(card)}
            values={card}
            columns={columns}
            onNavigationRequest={onNavigationRequest}
          />
        );
      })}
    </CardListContainer>
  );
};
