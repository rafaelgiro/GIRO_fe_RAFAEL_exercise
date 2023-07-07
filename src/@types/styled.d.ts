import 'styled-components';

import { theme } from '@/providers/app';

type CustomTheme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomTheme {
    primary: string;
  }
}
