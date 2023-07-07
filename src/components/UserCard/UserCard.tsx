import { User } from '@/@types';
import { Card } from '@/components/Card';

import { UserCardContainer } from './styles';

type UserCardProps = {
  user: User;
  onRequestUserNavigate?: () => void;
  isLead?: boolean;
};

export const UserCard = ({ user, onRequestUserNavigate, isLead }: UserCardProps) => {
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
    <UserCardContainer>
      <Card
        columns={columns}
        values={data}
        onNavigationRequest={onRequestUserNavigate as (user: Record<string, any>) => void}
      />
      {isLead && (
        <div className="badge">
          <svg xmlns="http://www.w3.org/2000/svg" height="16" viewBox="0 -960 960 960" width="16">
            <path d="M200-120v-665q0-24 18-42t42-18h440q24 0 42 18t18 42v665L480-240 200-120Zm60-91 220-93 220 93v-574H260v574Zm0-574h440-440Z" />
          </svg>
          Team Lead
        </div>
      )}
    </UserCardContainer>
  );
};
