import { useLocation, useParams } from 'react-router-dom';

import { useTeam } from '@/api/getTeam';
import { CardList } from '@/components/CardList';
import { Layout } from '@/components/Layout';
import { Spinner } from '@/components/Spinner';
import { UserCard } from '@/components/UserCard';

export const TeamOverview = () => {
  const { teamId } = useParams();
  const location = useLocation();
  const title = location.state?.teamName ? `Team ${location.state.teamName}` : 'Team overview';

  const query = useTeam({ teamId });

  const teamLead = query.data?.teamLeadId;
  const teamMembers = query.data?.teamMemberIds;

  if (query.isLoading)
    return (
      <Layout title={title}>
        <Spinner />
      </Layout>
    );

  return (
    <Layout title={title}>
      {teamLead && <UserCard userId={teamLead} />}
      {teamMembers && (
        <CardList isLoading={false}>
          {teamMembers.map((userId) => (
            <UserCard key={userId} userId={userId} />
          ))}
        </CardList>
      )}
    </Layout>
  );
};
