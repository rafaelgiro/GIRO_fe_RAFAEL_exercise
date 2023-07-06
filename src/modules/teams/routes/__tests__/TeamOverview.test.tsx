import { customRender, screen } from '@/test/test-utils';

import { TeamOverview } from '../TeamOverview';

describe('TeamOverview', async () => {
  it('should render team overview users', async () => {
    customRender(<TeamOverview teamId="1" />);

    expect(await screen.findAllByTestId('userData')).toHaveLength(4);
  });
});
