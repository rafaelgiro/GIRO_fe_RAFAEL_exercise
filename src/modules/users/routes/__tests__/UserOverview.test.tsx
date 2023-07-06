import { render, screen } from '@testing-library/react';

import { UserOverview } from '../UserOverview';

describe('UserOverview', () => {
  it('should render UserOverview', () => {
    const user = {
      firstName: 'Test',
      lastName: 'User',
      displayName: 'userName',
      location: 'location',
    };
    render(<UserOverview user={user} />);

    expect(screen.getByText('Test User')).toBeVisible();
    expect(screen.getByText('userName')).toBeVisible();
    expect(screen.getByText('location')).toBeVisible();
  });
});
