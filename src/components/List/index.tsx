import { Teams } from '@/modules/teams/types';
import { UserData } from '@/modules/users/types';

import Card from '../Card';
import { Spinner } from '../Spinner';

import { Container } from './styles';

export interface ListItemColumn {
  key: string;
  value: string;
}

export interface ListItem {
  id: string;
  url?: string;
  columns: Array<ListItemColumn>;
  navigationProps?: UserData | Teams;
}

interface Props {
  items?: ListItem[];
  hasNavigation?: boolean;
  isLoading: boolean;
}

const List = ({ items, hasNavigation = true, isLoading }: Props) => {
  return (
    <Container>
      {isLoading && <Spinner />}
      {!isLoading &&
        items?.map(({ url, id, columns, navigationProps }, index) => {
          return (
            <Card
              key={`${id}-${index}`}
              id={id}
              columns={columns}
              navigationProps={navigationProps}
              hasNavigation={hasNavigation}
              url={url}
            />
          );
        })}
    </Container>
  );
};

export default List;
