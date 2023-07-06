import { Card } from '@/components/Card';
import { Spinner } from '@/components/Spinner';

import { useUser } from '../../api/getUser';

type UserCardProps = {
  userId: string;
};

export const UserCard = ({ userId }: UserCardProps) => {
  const query = useUser({ userId });

  const columns = {
    firstName: 'First Name',
    lastName: 'Last Name',
    displayName: 'Display Name',
    location: 'Location',
  };

  if (query.isLoading || !query.data) return <Spinner />;

  return <Card columns={columns} values={query.data} onNavigationRequest={console.log} />;
};
