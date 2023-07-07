import { useNavigate } from 'react-router-dom';

import { useTeams } from '@/api/getTeams';
import { Card } from '@/components/Card';
import { CardList } from '@/components/CardList';
import { Layout } from '@/components/Layout';
import { useSearch } from '@/hooks/useSearch';
import { Team } from '@/types';

export const Teams = () => {
  const { data, isLoading } = useTeams();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useSearch();

  const filteredData = searchValue
    ? data?.filter((team) => team.name.toLowerCase().includes(searchValue.toLowerCase()))
    : data;

  const columns = { name: 'Name' };

  function handleNavigation(team: Team) {
    navigate(`/team/${team.id}`, { state: { teamName: team.name } });
  }

  return (
    <Layout
      title="Teams"
      onSearchButtonClick={setSearchValue}
      initialSearchValue={searchValue || undefined}
    >
      <CardList isLoading={isLoading}>
        {filteredData?.map((card) => (
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
