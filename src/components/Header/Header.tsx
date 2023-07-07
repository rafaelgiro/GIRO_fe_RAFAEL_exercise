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
      {onGoBackRequest && (
        <BackButton onClick={onGoBackRequest} aria-label="Go back">
          🔙
        </BackButton>
      )}
      <h1>{title}</h1>
      {onSearchButtonClick && (
        <SearchBar
          onSearchButtonClick={onSearchButtonClick}
          initialSearchValue={initialSearchValue}
        />
      )}
    </HeaderContainer>
  );
};
