import { Card } from '@/components/Card';
import { User } from '@/types';

type UserCardProps = {
  user: User;
  onRequestUserNavigate?: () => void;
};

export const UserCard = ({ user, onRequestUserNavigate }: UserCardProps) => {
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

  return (
    <Card
      columns={columns}
      values={data}
      onNavigationRequest={onRequestUserNavigate as (user: Record<string, any>) => void}
    />
  );
};
