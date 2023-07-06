import { fireEvent, render, screen } from '@testing-library/react';

import { Card } from '../Card';

describe('<Card />', () => {
  it('should render card with single column', () => {
    const columns = { columnKey1: 'Column Key' };
    const values = { columnKey1: 'Column Value' };

    render(<Card columns={columns} values={values} />);

    expect(screen.getByRole('heading', { name: 'Column Key' })).toBeVisible();
    expect(screen.getByText('Column Value')).toBeVisible();
  });

  it('should render card with multiple columns', () => {
    const columns = {
      columnKey1: 'Column 1',
      columnKey2: 'Column 2',
      columnKey3: 'Column 3',
      columnKey4: '',
    };

    const values: Record<string, string> = {
      columnKey1: 'First Value',
      columnKey2: 'Second Value',
      columnKey3: 'Third Value',
      columnKey4: 'Fourth Value',
    };

    render(<Card columns={columns} values={values} />);

    expect(screen.getAllByRole('heading', { name: /Column / })).toHaveLength(3);
    expect(screen.getAllByText(/ Value/)).toHaveLength(4);
  });

  it('should navigate when card is clicked and navigation is enabled', () => {
    const columns = { columnKey1: 'Column Key' };
    const values = { columnKey1: 'Column Value' };
    const onNavigationResquest = jest.fn();

    render(<Card columns={columns} values={values} onNavigationRequest={onNavigationResquest} />);

    fireEvent.click(screen.getByRole('link', { name: 'Column Key Column Value' }));

    expect(onNavigationResquest).toHaveBeenCalled();
  });

  it('should not navigate when card is clicked and navigation is disabled', () => {
    const columns = { columnKey1: 'Column Key' };
    const values = { columnKey1: 'Column Value' };
    const onNavigationResquest = jest.fn();

    render(<Card columns={columns} values={values} />);

    fireEvent.click(screen.getByRole('presentation'));

    expect(onNavigationResquest).not.toHaveBeenCalled();
  });
});
