import { rest } from 'msw';

import { API_URL } from '@/config';
import { server } from '@/mocks/server';
import { customRender, screen } from '@/test/test-utils';

import { Teams } from '../Teams';

jest.mock('react-router-dom', () => ({
  useNavigate: () => jest.fn(),
  useLocation: () => ({}),
  useSearchParams: () => [new URLSearchParams({ search: 'games' })],
}));

describe('<Teams /> Filtered state', () => {
  it('should display only one team', async () => {
    server.use(
      rest.get(`${API_URL}/teams`, (_, res, ctx) => {
        return res.once(
          ctx.json([
            {
              id: '1',
              name: 'Games',
            },
            {
              id: '2',
              name: 'Technology',
            },
            {
              id: '3',
              name: 'Garden',
            },
          ])
        );
      })
    );

    customRender(<Teams />);

    expect(await screen.findByRole('link')).toBeVisible();
  });
});
