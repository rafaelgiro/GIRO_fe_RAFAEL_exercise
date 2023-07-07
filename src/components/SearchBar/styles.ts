import styled from 'styled-components';

export const SearchBarContainer = styled.form`
  display: flex;
  align-items: center;

  label {
    margin-right: 0.75rem;
    color: ${({ theme }) => theme.typographySecondary};
  }

  input {
    border-left: 1px solid ${({ theme }) => theme.border};
    border-top: 1px solid ${({ theme }) => theme.border};
    border-bottom: 1px solid ${({ theme }) => theme.border};
    border-right: none;
    padding: 0.5rem;
    border-top-left-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }

  button {
    background-color: ${({ theme }) => theme.primary};
    padding: calc(0.5rem + 1px) 1rem;
    color: ${({ theme }) => theme.backgroundPrimary};
    border-top-right-radius: 0.5rem;
    border-bottom-right-radius: 0.5rem;
    font-weight: 700;
    letter-spacing: 1px;
  }
`;
