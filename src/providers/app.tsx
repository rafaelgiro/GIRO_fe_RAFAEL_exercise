import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

import { queryClient } from '@/lib/react-query';

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props;

  return (
    <ErrorBoundary FallbackComponent={() => <div>todo: error component</div>}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ErrorBoundary>
  );
};
