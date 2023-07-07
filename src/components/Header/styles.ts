import styled from 'styled-components';

export const HeaderContainer = styled.header`
  padding: 0.75rem 2rem;
  border-bottom: 1px solid ${({ theme }) => theme.border};
  background-color: ${({ theme }) => theme.backgroundPrimary};
  display: flex;
  align-items: center;
  justify-content: space-between;

  .title-container {
    display: flex;
    align-items: center;
  }

  h1 {
    margin: 0 1rem;
    color: ${({ theme }) => theme.primary};
  }
`;

export const BackButton = styled.button`
  fill: ${({ disabled, theme }) => (disabled ? theme.disabled : theme.primary)};
`;
