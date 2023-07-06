import { useNavigate } from 'react-router-dom';

import { Team } from '@/modules/teams/types';
import { User } from '@/modules/users/types';

import { Container } from './styles';

interface Props {
  id?: string;
  url?: string;
  columns: Array<{
    key: string;
    value: string;
  }>;
  hasNavigation?: boolean;
  navigationProps?: User | Team | null;
}

const Card = ({
  id,
  columns,
  url,
  hasNavigation = true,
  navigationProps = null,
}: Props): JSX.Element => {
  const navigate = useNavigate();

  return (
    <Container
      data-testid={`cardContainer-${id}`}
      hasNavigation={hasNavigation}
      onClick={(e) => {
        if (hasNavigation && url) {
          navigate(url, {
            state: navigationProps,
          });
        }
        e.preventDefault();
      }}
    >
      {columns.map(({ key: columnKey, value }) => (
        <p key={columnKey}>
          <strong>{columnKey}</strong>&nbsp;{value}
        </p>
      ))}
    </Container>
  );
};

export default Card;
