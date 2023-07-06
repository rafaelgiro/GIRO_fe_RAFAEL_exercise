import { Container } from '@/components/GlobalComponents';
import Header from '@/components/Header';

import { useTeam } from '../api/getTeam';

type TeamOverviewProps = {
  teamId: string;
};

export const TeamOverview = (props: TeamOverviewProps) => {
  const { teamId } = props;

  const query = useTeam({ teamId });

  console.log(query.data);

  return (
    <Container>
      <Header title={`Team`} />
      Team Overview
    </Container>
  );
};
