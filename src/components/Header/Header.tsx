import { SearchBar } from '../SearchBar';

import { HeaderContainer, BackButton } from './styles';

export type HeaderProps = {
  /**
   * The title to be displayed in the header.
   */
  title: string;
  /**
   * Optional event handler for the back button click.
   * If not provided, the back button will appear disabled.
   */
  onGoBackRequest?: () => void;
  /**
   * Optional event handler for the search button click or form submission.
   * If not provided, the searchbar will not be rendered
   */
  onSearchButtonClick?: (e: React.FormEvent<HTMLFormElement>) => void;
  /**
   * Optional initial value for the search input field.
   */
  initialSearchValue?: string;
};

/**
 * Header component represents the main Header of the application.
 * It includes a title, optional back button, and optional search bar.
 * @param title - The title to be displayed in the header.
 * @param onGoBackRequest - Optional event handler for the back button click.
 * @param onSearchButtonClick - Optional event handler for the search button click or form submission.
 * @param initialSearchValue - Optional initial value for the search input field.
 * @returns The rendered Header component.
 */

export const Header = ({
  title,
  onGoBackRequest,
  onSearchButtonClick,
  initialSearchValue,
}: HeaderProps) => {
  return (
    <HeaderContainer>
      <div className="title-container">
        <BackButton onClick={onGoBackRequest} aria-label="Go back" disabled={!onGoBackRequest}>
          <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24">
            <path d="M400-80 0-480l400-400 56 57-343 343 343 343-56 57Z" />
          </svg>
        </BackButton>

        <h1>{title}</h1>
      </div>
      {onSearchButtonClick && (
        <SearchBar
          onSearchButtonClick={onSearchButtonClick}
          initialSearchValue={initialSearchValue}
        />
      )}
    </HeaderContainer>
  );
};
