import { render, screen } from '@testing-library/react';

import { CardList } from '../CardList';

describe('List', () => {
  it.skip('should render spinner and not render items when it is loading', () => {
    render(<CardList isLoading columns={{ column: 'Column' }} items={[]} />);

    const loadingComponent = screen.getByRole('alert');

    expect(loadingComponent).toBeVisible();
    expect(loadingComponent).toHaveAttribute('aria-live', 'polite');
    expect(loadingComponent).toHaveAttribute('aria-busy', 'true');
    expect(screen.queryByTestId('cardContainer')).not.toBeInTheDocument();
  });

  it('should not render spinner and render items when it is not loading', () => {
    const columns = {
      key: 'columnKey1',
      title: 'Column Key',
    };

    const items = [{ columnKey1: 'First Value' }];

    render(<CardList isLoading={false} items={items} columns={columns} />);

    expect(screen.queryByTestId('spinner')).not.toBeInTheDocument();
    expect(screen.getByTestId('cardContainer')).toBeVisible();
  });

  it('should render multiple card when multiple items', () => {
    const columns = {
      key: 'columnKey1',
      title: 'Column Key',
    };

    const items = [{ columnKey1: 'First Value' }, { columnKey1: 'Second Value' }];

    render(<CardList isLoading={false} items={items} columns={columns} />);

    expect(screen.getAllByTestId('cardContainer')).toHaveLength(2);
  });
});
