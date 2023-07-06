import { useQuery } from '@tanstack/react-query';

import { api } from '@/lib/api';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Team } from '../types';

export const getTeams = (): Promise<Team[]> => {
  return api('/teams');
};

type QueryFnType = typeof getTeams;

type UseTeamsOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useTeams = ({ config = {} }: UseTeamsOptions = {}) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['teams'],
    queryFn: () => getTeams(),
  });
};
