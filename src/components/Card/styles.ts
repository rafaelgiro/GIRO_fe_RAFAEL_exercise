import styled from 'styled-components';

export const CardContainer = styled.div<{ hasNavigation: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: ${({ hasNavigation }) => (hasNavigation ? 'pointer' : 'default')};
  box-shadow: ${({ theme }) => theme.shadow};
  background-color: ${({ theme }) => theme.backgroundPrimary};
  flex: 1;
  margin: 0.5rem;
  min-height: 20vh;
  min-width: 25vw;
  padding: 2rem 0;
  border-radius: 0.5rem;
  transition: background-color 0.2s ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.backgroundSecondary};
  }

  .row {
    display: flex;
    align-items: center;

    h3 {
      margin-right: 0.5rem;
    }
  }
`;
