import { render, screen } from '@testing-library/react';

import { TeamOverview } from '../TeamOverview';

describe('TeamOverview', async () => {
  it('should render team overview users', async () => {
    render(<TeamOverview teamId="1" />);

    expect(await screen.findAllByTestId('userData')).toHaveLength(4);
  });
});

export {};
