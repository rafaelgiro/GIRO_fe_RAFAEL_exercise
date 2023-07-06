import { useQuery } from 'react-query';

import { api } from '@/lib/api';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { User } from '../types';

export const getUser = ({ userId }: { userId: string }): Promise<User> => {
  return api(`/users/${userId}`);
};

type QueryFnType = typeof getUser;

type UseTeamOptions = {
  userId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useTeam = ({ userId, config }: UseTeamOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['user', userId],
    queryFn: () => getUser({ userId }),
  });
};
