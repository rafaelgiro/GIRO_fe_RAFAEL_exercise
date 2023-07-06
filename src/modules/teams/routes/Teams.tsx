import { CardList } from '@/components/CardList';
import { Container } from '@/components/GlobalComponents';
import Header from '@/components/Header';

import { useTeams } from '../api/getTeams';

export const Teams = () => {
  const query = useTeams();

  const columns = { name: 'Name' };

  return (
    <Container>
      <Header title="Teams" showBackButton={false} />
      <CardList
        items={query.data || []}
        columns={columns}
        isLoading={query.isLoading}
        onNavigationRequest={console.log}
      />
    </Container>
  );
};
