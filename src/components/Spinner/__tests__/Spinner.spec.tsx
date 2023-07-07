import { render, screen } from '@testing-library/react';

import { Spinner } from '..';

describe('<Spinner />', () => {
  it('should render an accessible spinner', () => {
    render(<Spinner />);

    const spinner = screen.getByRole('alert');

    expect(spinner).toBeVisible();
    expect(spinner).toHaveAttribute('aria-live', 'polite');
    expect(spinner).toHaveAttribute('aria-busy', 'true');
  });
});
