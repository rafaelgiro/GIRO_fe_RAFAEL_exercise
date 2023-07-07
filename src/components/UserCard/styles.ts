import styled from 'styled-components';

export const UserCardContainer = styled.div`
  position: relative;

  .badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: ${({ theme }) => theme.secondary};
    color: ${({ theme }) => theme.secondary800};
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 0.25rem;

    svg {
      fill: ${({ theme }) => theme.secondary800};
      margin-right: 0.5rem;
    }
  }
`;
