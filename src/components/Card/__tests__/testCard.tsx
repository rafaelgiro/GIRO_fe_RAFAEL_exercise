import { fireEvent, render, screen } from '@testing-library/react';

import { Teams } from '@/modules/teams/types';

import Card from '..';

const mockUseNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockUseNavigate,
}));

describe('Card', () => {
  it('should render card with single column', () => {
    const columns = [{ key: 'columnKey', title: 'Column Key' }];
    const values = [{ columnKey: 'Column Value' }];
    render(<Card columns={columns} values={values} />);

    expect(screen.getByRole('heading', { name: 'Column Key' })).toBeVisible();
    expect(screen.getByText('Column Value')).toBeVisible();
  });

  it('should render card with multiple columns', () => {
    const columns = [
      { key: 'columnKey1', title: 'Column 1' },
      { key: 'columnKey2', title: 'Column 2' },
      { key: 'columnKey3', title: 'Column 3' },
      { key: 'columnKey4', title: '' },
    ];
    const values = [
      { columnKey1: 'First Value' },
      { columnKey2: 'Second Value' },
      { columnKey3: 'Third Value' },
      { columnKey4: 'Fourth Value' },
    ];

    render(<Card columns={columns} values={values} />);

    expect(screen.getAllByRole('heading', { name: /Column / })).toHaveLength(3);
    expect(screen.getAllByText(/ Value/)).toHaveLength(4);
  });

  it('should navigate when card is clicked and navigation is enabled', () => {
    const columns = [{ key: 'columnKey', title: 'Column Key' }];
    const values = [{ columnKey: 'Column Value' }];
    const onNavigationResquest = jest.fn();

    render(<Card columns={columns} values={values} onNavigationRequest={onNavigationResquest} />);

    fireEvent.click(screen.getByRole('link', { name: 'Column Key: Column Value' }));

    expect(onNavigationResquest).toHaveBeenCalled();
  });

  it('should not navigate when card is clicked and navigation is disabled', () => {
    const columns = [{ key: 'columnKey', title: 'Column Key' }];
    const values = [{ columnKey: 'Column Value' }];
    const onNavigationResquest = jest.fn();

    render(<Card columns={columns} values={values} />);

    fireEvent.click(screen.getByText('Column Key: Column Value'));

    expect(onNavigationResquest).not.toHaveBeenCalled();
  });
});
