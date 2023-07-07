import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { useTeam } from '@/api/getTeam';
import { useUser } from '@/api/getUser';
import { CardList } from '@/components/CardList';
import { Layout } from '@/components/Layout';
import { Spinner } from '@/components/Spinner';
import { UserCard } from '@/components/UserCard';
import { useSearch } from '@/hooks/useSearch';

type TeamMemberProps = {
  userId: string;
  searchValue: string | null;
  isLead?: boolean;
};

const TeamMember = ({ userId, searchValue, isLead }: TeamMemberProps) => {
  const navigate = useNavigate();
  const { data, isLoading } = useUser({ userId });
  const values = Object.values(data || {});
  const searchExists = values.find((v) => v.toLowerCase().includes(searchValue?.toLowerCase()));

  function handleNavigation() {
    navigate(`/user/${userId}`, { state: { user: data } });
  }

  if (isLoading || !data) return <Spinner />;
  if (!searchExists && searchValue) return null;
  return <UserCard user={data} isLead={isLead} onRequestUserNavigate={handleNavigation} />;
};

export const TeamOverview = () => {
  const { teamId } = useParams();
  const { data, isLoading } = useTeam({ teamId });
  const location = useLocation();
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useSearch();
  const title = location.state?.teamName ? `Team ${location.state.teamName}` : 'Team overview';

  const teamLead = data?.teamLeadId;
  const teamMembers = data?.teamMemberIds;

  if (isLoading)
    return (
      <Layout title={title}>
        <Spinner />
      </Layout>
    );

  return (
    <Layout
      title={title}
      onGoBackRequest={() => navigate(-1)}
      onSearchButtonClick={setSearchValue}
      initialSearchValue={searchValue || undefined}
    >
      {teamLead && <TeamMember isLead userId={teamLead} searchValue={searchValue} />}
      {teamMembers && (
        <CardList isLoading={false}>
          {teamMembers.map((userId) => (
            <TeamMember key={userId} userId={userId} searchValue={searchValue} />
          ))}
        </CardList>
      )}
    </Layout>
  );
};
