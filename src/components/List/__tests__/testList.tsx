import { render, screen } from '@testing-library/react';

import List from '..';

// jest.mock('react-router-dom', () => ({
//   ...(jest.requireActual('react-router-dom') as any),
//   useNavigate: () => jest.fn(),
// }));

describe('List', () => {
  it('should render spinner and not render items when it is loading', () => {
    render(<List isLoading />);

    const loadingComponent = screen.getByRole('alert');

    expect(loadingComponent).toBeVisible();
    expect(loadingComponent).toHaveAttribute('aria-live', 'polite');
    expect(loadingComponent).toHaveAttribute('aria-busy', 'true');
    expect(screen.queryByTestId('cardContainer')).not.toBeInTheDocument();
  });

  it('should not render spinner and render items when it is not loading', () => {
    const items = [
      {
        columns: [
          {
            key: 'columnKey1',
            title: 'Column Key',
          },
        ],
        values: [{ columnKey1: 'First Value' }],
      },
    ];
    render(<List items={items} />);

    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    expect(screen.getByTestId('cardContainer')).toBeVisible();
  });

  it('should render multiple card when multiple items', () => {
    const items = [
      {
        columns: [
          {
            key: 'columnKey1',
            title: 'Column Key 1',
          },
          {
            key: 'columnKey2',
            title: 'Column Key 2',
          },
        ],
        values: [{ columnKey1: 'First Value' }, { columnKey2: 'Second Value' }],
      },
    ];
    render(<List items={items} />);

    expect(screen.getAllByTestId('cardContainer')).toHaveLength(2);
  });
});
