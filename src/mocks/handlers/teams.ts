import { faker } from '@faker-js/faker';
import { rest } from 'msw';

import { API_URL } from '@/config';

export const teamsHandlers = [
  rest.get(`${API_URL}/teams`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: faker.string.uuid(),
          name: faker.commerce.department(),
        },
        {
          id: faker.string.uuid(),
          name: faker.commerce.department(),
        },
        {
          id: faker.string.uuid(),
          name: faker.commerce.department(),
        },
      ])
    );
  }),

  rest.get(`${API_URL}/teams/:teamId`, (req, res, ctx) => {
    const { teamId } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        id: teamId,
        teamLeadId: faker.string.uuid(),
        teamMemberIds: [faker.string.uuid(), faker.string.uuid(), faker.string.uuid()],
      })
    );
  }),
];
