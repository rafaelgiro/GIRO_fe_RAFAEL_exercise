import { HeaderContainer, BackButton } from './styles';

export type HeaderProps = {
  title: string;
  onGoBackRequest?: () => void;
};

export const Header = ({ title, onGoBackRequest }: HeaderProps) => {
  return (
    <HeaderContainer>
      {onGoBackRequest && (
        <BackButton onClick={onGoBackRequest} aria-label="Go back">
          🔙
        </BackButton>
      )}
      <h1>{title}</h1>
    </HeaderContainer>
  );
};
