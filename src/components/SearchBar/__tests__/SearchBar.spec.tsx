import { fireEvent, render, screen } from '@testing-library/react';

import { SearchBar } from '../SearchBar';

describe('<SearchBar />', () => {
  it('should run the provided search function on button click', () => {
    const mockSearch = jest.fn();
    render(<SearchBar onSearchButtonClick={mockSearch} />);

    fireEvent.click(screen.getByRole('button', { name: 'Find' }));
    expect(mockSearch).toHaveBeenCalledTimes(1);
  });

  it('should render with an initial value', () => {
    render(<SearchBar onSearchButtonClick={jest.fn()} initialSearchValue="test" />);
    expect(screen.getByRole('textbox', { name: 'Search for:' })).toHaveValue('test');
  });
});
