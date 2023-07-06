import { fireEvent, render, screen } from '@testing-library/react';

import Header from '..';

describe('Header', () => {
  it('should render header', () => {
    render(<Header title="Header" />);

    expect(screen.getByRole('banner', { name: 'Header' })).toBeVisible();
  });

  it('should render back button in header', () => {
    render(<Header title="Header" onGoBackRequest={jest.fn()} />);

    expect(screen.getByRole('button', { name: 'Go Back' })).toBeVisible();
  });

  it('should not render back button in header', () => {
    render(<Header title="Header" />);

    expect(screen.queryByRole('button', { name: 'Go Back' })).not.toBeInTheDocument();
  });

  it('should navigate back when back button is clicked', () => {
    const onGoBackRequest = jest.fn();
    render(<Header title="Header" onGoBackRequest={onGoBackRequest} />);

    fireEvent.click(screen.getByRole('button', { name: 'Go Back' }));

    expect(onGoBackRequest).toHaveBeenCalled();
  });
});
