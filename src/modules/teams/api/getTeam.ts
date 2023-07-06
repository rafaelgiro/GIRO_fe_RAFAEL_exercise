import { useQuery } from '@tanstack/react-query';

import { api } from '@/lib/api';
import { ExtractFnReturnType, QueryConfig } from '@/lib/react-query';

import { TeamOverview } from '../types';

export const getTeam = ({ teamId }: { teamId?: string }): Promise<TeamOverview> => {
  if (!teamId) Promise.resolve([]);

  return api(`/teams/${teamId}`);
};

type QueryFnType = typeof getTeam;

type UseTeamOptions = {
  teamId?: string;
  config?: QueryConfig<QueryFnType>;
};

export const useTeam = ({ teamId, config }: UseTeamOptions) => {
  return useQuery<ExtractFnReturnType<QueryFnType>>({
    ...config,
    queryKey: ['team', teamId],
    queryFn: () => getTeam({ teamId }),
  });
};
