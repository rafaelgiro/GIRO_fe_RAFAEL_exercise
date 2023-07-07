import { SearchBarContainer } from './styles';

type SearchBarProps = {
  /**
   * Event handler triggered when the search button is clicked or the form is submitted.
   * @param e - The form event associated with the click or submit action.
   */
  onSearchButtonClick(e: React.FormEvent<HTMLFormElement>): void;
  /**
   * The initial value for the search input field.
   */
  initialSearchValue?: string;
};

/**
 * SearchBar component renders a search bar with an input field and a submit button.
 * @param onSearchButtonClick - The event handler for the search button click or form submission.
 * @param initialSearchValue - The initial value for the search input field.
 * @returns The rendered SearchBar component.
 */
export function SearchBar({ onSearchButtonClick, initialSearchValue }: SearchBarProps) {
  return (
    <SearchBarContainer method="post" onSubmit={onSearchButtonClick}>
      <label htmlFor="search-input">Search for:</label>
      <input id="search-input" name="search" type="text" defaultValue={initialSearchValue} />
      <button type="submit">Find</button>
    </SearchBarContainer>
  );
}
