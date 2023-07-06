import { useQuery } from 'react-query';

import { api } from '@/lib/api';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { Team } from '../types';

export const getTeam = ({ teamId }: { teamId: string }): Promise<Team> => {
  return api(`/teams/${teamId}`);
};

type QueryFnType = typeof getTeam;

type UseTeamOptions = {
  teamId: string;
  config?: QueryConfig<QueryFnType>;
};

export const useTeam = ({ teamId, config }: UseTeamOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['team', teamId],
    queryFn: () => getTeam({ teamId }),
  });
};
