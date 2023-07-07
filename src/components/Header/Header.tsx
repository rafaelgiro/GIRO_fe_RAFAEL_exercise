import { SearchBar } from '../SearchBar';

import { HeaderContainer, BackButton } from './styles';

export type HeaderProps = {
  title: string;
  onGoBackRequest?: () => void;
  onSearchButtonClick?: (e: React.FormEvent<HTMLFormElement>) => void;
  initialSearchValue?: string;
};

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
