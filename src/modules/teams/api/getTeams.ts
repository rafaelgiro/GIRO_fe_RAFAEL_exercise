import { useQuery } from 'react-query';

import { api } from '@/lib/api';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Team } from '../types';

export const getTeams = (): Promise<Team[]> => {
  return api('/teams');
};

type QueryFnType = typeof getTeams;

type UseTeamOptions = {
  config?: QueryConfig<QueryFnType>;
};

export const useTeam = ({ config }: UseTeamOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['teams'],
    queryFn: () => getTeams(),
  });
};
