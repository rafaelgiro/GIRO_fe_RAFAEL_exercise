import { Team } from '@/modules/teams/types';
import { User } from '@/modules/users/types';

import { Card } from '../Card';
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
  navigationProps?: User | Team;
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
          return null;
          // return (
          //   <Card
          //     key={`${id}-${index}`}
          //     id={id}
          //     columns={columns}
          //     navigationProps={navigationProps}
          //     hasNavigation={hasNavigation}
          //     url={url}
          //   />
          // );
        })}
    </Container>
  );
};

export default List;
