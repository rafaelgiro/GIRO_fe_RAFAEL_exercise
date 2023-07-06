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
}));

describe('TeamOverview', () => {
  it('should render team overview users', async () => {
    customRender(<TeamOverview />);

    await waitFor(() => {
      expect(screen.getAllByRole('link')).toHaveLength(4);
    });
  });
});
