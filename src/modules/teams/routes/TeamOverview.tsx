import { Layout } from '@/components/Layout';

import { useTeam } from '../api/getTeam';

type TeamOverviewProps = {
  teamId: string;
};

export const TeamOverview = (props: TeamOverviewProps) => {
  const { teamId } = props;

  const query = useTeam({ teamId });

  return <Layout title={`Team ${query.data?.name}`}>Team Overview</Layout>;
};
