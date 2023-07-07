import { fireEvent, render, screen } from '@testing-library/react';

import { Header } from '../Header';

describe('<Header />', () => {
  it('should render header', () => {
    render(<Header title="Header" />);

    expect(screen.getByRole('banner')).toBeVisible();
  });

  it('should render back button in header', () => {
    render(<Header title="Header" onGoBackRequest={jest.fn()} />);

    expect(screen.getByRole('button', { name: 'Go back' })).toBeVisible();
  });

  it('should not enable back button in header', () => {
    render(<Header title="Header" />);

    expect(screen.queryByRole('button', { name: 'Go back' })).toBeDisabled();
  });

  it('should navigate back when back button is clicked', () => {
    const onGoBackRequest = jest.fn();
    render(<Header title="Header" onGoBackRequest={onGoBackRequest} />);

    fireEvent.click(screen.getByRole('button', { name: 'Go back' }));

    expect(onGoBackRequest).toHaveBeenCalled();
  });
});
