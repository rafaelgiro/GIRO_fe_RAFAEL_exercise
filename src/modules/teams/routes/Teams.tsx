import { Card } from '@/components/Card';
import { Container } from '@/components/GlobalComponents';
import Header from '@/components/Header';

import { useTeams } from '../api/getTeams';

export const Teams = () => {
  const query = useTeams();

  const columns = { name: 'Name' };

  return (
    <Container>
      <Header title="Teams" showBackButton={false} />
      {(query.data || []).map((team) => (
        <Card key={team.id} columns={columns} values={team} />
      ))}
    </Container>
  );
};
