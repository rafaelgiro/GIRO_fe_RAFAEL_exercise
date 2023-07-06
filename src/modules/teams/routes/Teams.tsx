import { Container } from '@/components/GlobalComponents';
import Header from '@/components/Header';
import List, { ListItem } from '@/components/List';

import { useTeams } from '../api/getTeams';
import { Team } from '../types';

const MapT = (teams: Team[]) => {
  return teams.map((team) => {
    const columns = [
      {
        key: 'Name',
        value: team.name,
      },
    ];
    return {
      id: team.id,
      url: `/team/${team.id}`,
      columns,
      navigationProps: team,
    } as ListItem;
  });
};

export const Teams = () => {
  const query = useTeams();

  return (
    <Container>
      <Header title="Teams" showBackButton={false} />
      <List items={MapT(query.data || [])} isLoading={query.isLoading} />
    </Container>
  );
};
