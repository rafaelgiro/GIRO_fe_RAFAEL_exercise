import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useTeam } from '@/api/getTeam';
import { useUser } from '@/api/getUser';
import { CardList } from '@/components/CardList';
import { Layout } from '@/components/Layout';
import { Spinner } from '@/components/Spinner';
import { UserCard } from '@/components/UserCard';

type TeamMemberProps = {
  userId: string;
};

const TeamMember = ({ userId }: TeamMemberProps) => {
  const navigate = useNavigate();
  const query = useUser({ userId });
  if (query.isLoading || !query.data) return <Spinner />;

  function handleNavigation() {
    navigate(`/user/${userId}`, { state: { user: query.data } });
  }

  return <UserCard user={query.data} onRequestUserNavigate={handleNavigation} />;
};

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
      {teamLead && <TeamMember userId={teamLead} />}
      {teamMembers && (
        <CardList isLoading={false}>
          {teamMembers.map((userId) => (
            <TeamMember key={userId} userId={userId} />
          ))}
        </CardList>
      )}
    </Layout>
  );
};
