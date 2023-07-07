import { customRender, screen } from '@/test/test-utils';

import { UserOverview } from '../UserOverview';

jest.mock('react-router-dom', () => ({
  useLocation: () => ({}),
  useNavigate: () => ({}),
  useParams: () => ({
    userId: '1',
  }),
}));

describe('<UserOverview />', () => {
  it('should render UserOverview', async () => {
    customRender(<UserOverview />);

    expect(await screen.findByRole('heading', { name: 'Name' })).toBeVisible();
    expect(await screen.findByRole('heading', { name: 'Display Name' })).toBeVisible();
    expect(await screen.findByRole('heading', { name: 'Location' })).toBeVisible();
  });
});
