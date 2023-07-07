import styled from 'styled-components';

export const MainContainer = styled.main`
  padding: 2rem 4rem;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -15rem;
    left: -10rem;
    width: 20rem;
    height: 20rem;
    border-radius: 50%;
    border: 6rem solid ${({ theme }) => theme.primary};
    z-index: -1;
  }
`;
