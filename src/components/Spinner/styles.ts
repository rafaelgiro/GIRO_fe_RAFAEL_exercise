import styled, { keyframes } from 'styled-components';

export const spinnerAnimation = keyframes`
  from {
      transform: rotate(0deg);
  }
  to {
      transform: rotate(360deg);
  }
`;

export const SpinnerBody = styled.div`
  height: 4rem;
  width: 4rem;
  border: 0.25rem solid ${({ theme }) => theme.primary200};
  border-top-color: ${({ theme }) => theme.primary};
  border-radius: 50%;
  animation: ${spinnerAnimation} 800ms linear infinite;
`;
