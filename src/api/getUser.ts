import { useQuery } from '@tanstack/react-query';

import { api } from '@/api';
import { ExtractFnReturnType, QueryConfig } from '@/api/react-query';

import { User } from '../types';

export const getUser = ({ userId }: { userId: string }): Promise<User> => {
  return api(`/users/${userId}`);
};

type QueryFnType = typeof getUser;

type UseUserOptions = {
  userId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useUser = ({ userId, config }: UseUserOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['user', userId],
    queryFn: () => getUser({ userId }),
  });
};
