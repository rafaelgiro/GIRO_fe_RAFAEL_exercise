import { CardList } from '@/components/CardList';
import { Layout } from '@/components/Layout';

import { useTeams } from '../api/getTeams';

export const Teams = () => {
  const query = useTeams();

  const columns = { name: 'Name' };

  return (
    <Layout title="Teams">
      <CardList
        items={query.data || []}
        columns={columns}
        isLoading={query.isLoading}
        onNavigationRequest={console.log}
      />
    </Layout>
  );
};
