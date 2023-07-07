import { QueryClientProvider } from '@tanstack/react-query';
import { ReactNode } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { ThemeProvider } from 'styled-components';

import { queryClient } from '@/api/react-query';

type AppProviderProps = {
  children: ReactNode;
};

export const theme = {
  primary: '#0068ef',
  primary200: '#e8f2ff',
  secondary: '#d0f1ac',
  secondary800: '#047000',
  backgroundPrimary: '#fff',
  backgroundSecondary: '#F4F6F8',
  typographyPrimary: '#001833',
  typographySecondary: '#556b7f',
  border: '#abb4be',
  disabled: '#abb4be',
  shadow:
    'rgba(0, 0, 0, 0.03) 0px -1px 0px 0px, rgba(0, 0, 0, 0.24) 0px 0px 1px 0px, rgba(0, 0, 0, 0.16) 0px 2px 1px -1px, rgba(0, 0, 0, 0.12) 0px 2px 4px 0px;',
};

export const AppProvider = (props: AppProviderProps) => {
  const { children } = props;

  return (
    <ErrorBoundary FallbackComponent={() => <div>todo: error component</div>}>
      <ThemeProvider theme={theme}>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
};
