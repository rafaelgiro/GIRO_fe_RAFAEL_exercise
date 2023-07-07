import { faker } from '@faker-js/faker';
import { rest } from 'msw';

import { API_URL } from '@/config';

export const usersHandlers = [
  rest.get(`${API_URL}/users/:userId`, (req, res, ctx) => {
    const { userId } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        id: userId,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        displayName: faker.internet.userName(),
        location: faker.location.country(),
        avatar: '',
      })
    );
  }),
];
