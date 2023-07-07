import { SearchBarContainer } from './styles';

type SearchBarProps = {
  onSearchButtonClick(e: React.FormEvent<HTMLFormElement>): void;
  initialSearchValue?: string;
};

export function SearchBar({ onSearchButtonClick, initialSearchValue }: SearchBarProps) {
  return (
    <SearchBarContainer method="post" onSubmit={onSearchButtonClick}>
      <label htmlFor="search-input">Search for:</label>
      <input id="search-input" name="search" type="text" defaultValue={initialSearchValue} />
      <button type="submit">Find</button>
    </SearchBarContainer>
  );
}
