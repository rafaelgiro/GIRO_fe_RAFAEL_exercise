import { useNavigate } from 'react-router-dom';

import { Card } from '@/components/Card';
import { Spinner } from '@/components/Spinner';
import { User } from '@/types';

import { useUser } from '../../api/getUser';

type UserCardProps = {
  userId: string;
  initialUser?: User;
};

export const UserCard = ({ userId, initialUser }: UserCardProps) => {
  const query = useUser({ userId });
  const navigate = useNavigate();

  const user = initialUser || query.data;
  const data = {
    name: `${user?.firstName} ${user?.lastName}`,
    displayName: user?.displayName,
    location: user?.location,
  };

  const columns = {
    name: 'Name',
    displayName: 'Display Name',
    location: 'Location',
  };

  function handleNavigation(user: User) {
    navigate(`/user/${user.id}`, { state: { user } });
  }

  if ((query.isLoading || !query.data) && !initialUser) return <Spinner />;

  return (
    <Card
      columns={columns}
      values={data}
      onNavigationRequest={handleNavigation as (user: Record<string, any>) => void}
    />
  );
};
