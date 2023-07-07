import { teamsHandlers } from './teams';
import { usersHandlers } from './users';

export const handlers = [...teamsHandlers, ...usersHandlers];
