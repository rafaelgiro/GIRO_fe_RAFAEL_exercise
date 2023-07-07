import { useMemo } from 'react';

import { CardContainer } from './styles';

type CardProps = {
  columns: Record<string, string>;
  values: Record<string, any>;
  onNavigationRequest?: (item: CardProps['values']) => void;
};

export const Card = ({ columns, values, onNavigationRequest }: CardProps) => {
  const data = useMemo(() => Object.entries(values), [values]);

  return (
    <CardContainer
      role={onNavigationRequest ? 'link' : 'presentation'}
      onClick={() => onNavigationRequest?.(values)}
      hasNavigation={!!onNavigationRequest}
      data-testid="cardContainer"
    >
      {data.map((item) => {
        const [key, value] = item;

        if (typeof columns[key] === 'string')
          return (
            <div key={value} className="row">
              <h3>{columns[key]}</h3>&nbsp;<p>{value}</p>
            </div>
          );

        return null;
      })}
    </CardContainer>
  );
};
