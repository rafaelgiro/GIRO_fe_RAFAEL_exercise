import { faker } from '@faker-js/faker';
import { rest } from 'msw';

export const usersHandlers = [
  rest.get('/users/:userId', (req, res, ctx) => {
    const { userId } = req.params;

    return res(
      ctx.status(200),
      ctx.json({
        id: userId,
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        displayName: faker.person.fullName(),
        location: faker.location.country(),
        avatar: faker.image.avatar(),
      })
    );
  }),
];
