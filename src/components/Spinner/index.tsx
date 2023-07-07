import { SpinnerBody } from './styles';

/**
 * Spinner component represents a loading spinner.
 * It can be used to indicate that content is being loaded or processed.
 * @returns The rendered Spinner component.
 */
export const Spinner = () => {
  return <SpinnerBody role="alert" aria-live="polite" aria-busy="true" />;
};
