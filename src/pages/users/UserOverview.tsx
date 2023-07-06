import { useLocation, useParams } from 'react-router-dom';

import { useUser } from '@/api/getUser';
import { Layout } from '@/components/Layout';
import { Spinner } from '@/components/Spinner';
import { UserCard } from '@/components/UserCard';

export const UserOverview = () => {
  const { userId } = useParams();
  const location = useLocation();
  const initialUser = location.state?.user;
  const title = initialUser
    ? `User ${initialUser.firstName} ${initialUser.lastName}`
    : 'User overview';

  const query = useUser({ userId });

  if (query.isLoading && !initialUser)
    return (
      <Layout title={title}>
        <Spinner />
      </Layout>
    );

  return (
    <Layout title={title}>
      {userId && <UserCard userId={userId} initialUser={initialUser} />}
    </Layout>
  );
};
