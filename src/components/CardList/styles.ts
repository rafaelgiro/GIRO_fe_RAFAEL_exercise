import styled from 'styled-components';

export const CardListContainer = styled.div`
  flex: 1;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-evenly;
  position: relative;
  padding: 0.5rem;

  &:before {
    content: '';
    position: absolute;
    top: 2.5rem;
    left: 0rem;
    width: 100%;
    height: 93%;
    background-color: ${({ theme }) => theme.primary200};
    z-index: -1;
    border-radius: 1rem;
  }

  & > div {
    max-width: 25vw;
  }
`;
