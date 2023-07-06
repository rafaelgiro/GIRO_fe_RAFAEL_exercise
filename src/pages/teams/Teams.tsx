import { useNavigate } from 'react-router-dom';

import { useTeams } from '@/api/getTeams';
import { Card } from '@/components/Card';
import { CardList } from '@/components/CardList';
import { Layout } from '@/components/Layout';
import { Team } from '@/types';

export const Teams = () => {
  const query = useTeams();
  const navigate = useNavigate();

  const columns = { name: 'Name' };

  function handleNavigation(team: Team) {
    navigate(`/team/${team.id}`, { state: { teamName: team.name } });
  }

  return (
    <Layout title="Teams">
      <CardList isLoading={query.isLoading}>
        {query.data?.map((card) => (
          <Card
            key={card.id}
            values={card}
            columns={columns}
            onNavigationRequest={handleNavigation as (team: Record<string, any>) => void}
          />
        ))}
      </CardList>
    </Layout>
  );
};
