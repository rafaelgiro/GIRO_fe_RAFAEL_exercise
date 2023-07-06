import { useMemo } from 'react';

import { Container } from './styles';

type CardProps = {
  columns: Record<string, string>;
  values: Record<string, any>;
  onNavigationRequest?: () => void;
};

export const Card = ({ columns, values, onNavigationRequest }: CardProps): JSX.Element => {
  const data = useMemo(() => Object.entries(values), [values]);

  return (
    <Container
      role={onNavigationRequest ? 'link' : 'presentation'}
      onClick={onNavigationRequest}
      hasNavigation={!!onNavigationRequest}
      data-testid="cardContainer"
    >
      {data.map((item) => {
        const [key, value] = item;

        if (typeof columns[key] === 'string')
          return (
            <div key={value}>
              <h3>{columns[key]}</h3>&nbsp;<p>{value}</p>
            </div>
          );

        return null;
      })}
    </Container>
  );
};
