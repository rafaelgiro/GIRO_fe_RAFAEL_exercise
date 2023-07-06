import { faker } from '@faker-js/faker';
import { rest } from 'msw';

export const teamsHandlers = [
  rest.get('/teams', (_, res, ctx) => {
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

  rest.get('/teams/:teamId', (req, res, ctx) => {
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
