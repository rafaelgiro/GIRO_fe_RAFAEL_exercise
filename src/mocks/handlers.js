import { rest } from 'msw';

export const handlers = [
  rest.get('/teams', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json([
        {
          id: '1',
          name: 'Team 1',
        },
        {
          id: '2',
          name: 'Team 2',
        },
        {
          id: '3',
          name: 'Team 3',
        },
      ])
    );
  }),

  rest.get('/teams/1', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '1',
        teamLeadId: '2',
        teamMemberIds: ['3', '4', '5'],
      })
    );
  }),

  rest.get('/teams/2', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '2',
        teamLeadId: '3',
        teamMemberIds: ['1', '3', '5'],
      })
    );
  }),

  rest.get('/teams/3', (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        id: '3',
        teamLeadId: '4',
        teamMemberIds: ['6', '8', '9'],
      })
    );
  }),

  rest.get('/users/:userId', (req, res, ctx) => {
    const { userId } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        id: userId,
        firstName: 'First Name',
        lastName: 'Last Name',
        displayName: 'Display Name',
        location: '',
        avatar: '',
      })
    );
  }),
];
