import { rest } from 'msw';
import ReactRouterDom from 'react-router-dom';

import { API_URL } from '@/config';
import { server } from '@/mocks/server';
import { customRender, screen } from '@/test/test-utils';

import { Teams } from '../Teams';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  useNavigate: () => mockedUsedNavigate,
  useLocation: () => ({}),
  useSearchParams: () => [new URLSearchParams()],
}));

describe('<Teams /> Loading state', () => {
  it('should render spinner while loading', () => {
    customRender(<Teams />);
    server.use(
      rest.get(`${API_URL}/teams`, (_, res, ctx) => {
        return res.once(ctx.status(200), ctx.json({}), ctx.delay('infinite'));
      })
    );
    const loadingComponent = screen.getByRole('alert');

    expect(loadingComponent).toBeVisible();
    expect(loadingComponent).toHaveAttribute('aria-live', 'polite');
    expect(loadingComponent).toHaveAttribute('aria-busy', 'true');
  });
});

describe('<Teams /> Success state', () => {
  it('should render teams list', async () => {
    customRender(<Teams />);

    expect(await screen.findAllByRole('link')).toHaveLength(3);
  });
});

describe('<Teams /> Search by name', () => {
  beforeEach(() => {
    jest
      .spyOn(ReactRouterDom, 'useSearchParams')
      .mockReturnValue([new URLSearchParams({ search: 'games' }), jest.fn()]);
  });

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
