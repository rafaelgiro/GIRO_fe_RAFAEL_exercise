import { rest } from 'msw';
import ReactRouterDom from 'react-router-dom';

import { API_URL } from '@/config';
import { server } from '@/mocks/server';
import { customRender, screen, waitFor } from '@/test/test-utils';

import { TeamOverview } from '../TeamOverview';

jest.mock('react-router-dom', () => ({
  useLocation: () => ({
    state: {
      teamName: 'Some Team',
    },
  }),
  useNavigate: () => ({}),
  useParams: () => ({
    teamId: '1',
  }),
  useSearchParams: () => [new URLSearchParams()],
}));

describe('<TeamOverview />', () => {
  it('should render team overview users', async () => {
    customRender(<TeamOverview />);

    await waitFor(() => {
      expect(screen.getAllByRole('link')).toHaveLength(4);
    });
  });
});

describe('<TeamOverview /> Search by name', () => {
  beforeEach(() => {
    jest
      .spyOn(ReactRouterDom, 'useSearchParams')
      .mockReturnValue([new URLSearchParams({ search: 'Lead' }), jest.fn()]);
  });

  it('should display only one user', async () => {
    server.use(
      rest.get(`${API_URL}/teams/1`, (_, res, ctx) => {
        return res.once(
          ctx.json({
            id: 1,
            teamLeadId: '2',
            teamMemberIds: ['3'],
          })
        );
      })
    );

    server.use(
      rest.get(`${API_URL}/users/2`, (req, res, ctx) => {
        return res.once(
          ctx.json({
            id: '2',
            firstName: 'Lead',
            lastName: 'Member',
            displayName: 'displayLead',
            location: 'Brazil',
            avatar: '',
          })
        );
      })
    );

    server.use(
      rest.get(`${API_URL}/users/3`, (req, res, ctx) => {
        return res.once(
          ctx.json({
            id: '3',
            firstName: 'Team',
            lastName: 'Member',
            displayName: 'displayTeam',
            location: 'Mexico',
            avatar: '',
          })
        );
      })
    );

    customRender(<TeamOverview />);

    expect(await screen.findByRole('link')).toBeVisible();
  });
});
