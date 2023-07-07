import { useMemo } from 'react';

import { CardContainer } from './styles';

type CardProps = {
  /**
   * The mapping of column keys to column labels.
   */
  columns: Record<string, string>;
  /**
   * The mapping of column keys to corresponding values.
   */
  values: Record<string, any>;
  /**
   * Optional event handler for card navigation requests.
   */
  onNavigationRequest?: (item: CardProps['values']) => void;
};

/**
 * Card component represents a card with dynamic columns and values.
 * It can be used to display data in a structured format.
 * @param columns - The mapping of column keys to column labels.
 * @param values - The mapping of column keys to corresponding values.
 * @param onNavigationRequest - Optional event handler for card navigation requests.
 * @returns The rendered Card component.
 */
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
