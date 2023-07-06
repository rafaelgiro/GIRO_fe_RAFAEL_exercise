import { render, screen } from '@testing-library/react';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { API_URL } from '@/config';

import { Teams } from '../Teams';

const server = setupServer(
  rest.get(`${API_URL}/teams`, (_, res, ctx) => {
    return res(ctx.status(200), ctx.json({}), ctx.delay('infinite'));
  })
);

describe('<Teams /> Loading state', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('should render spinner while loading', () => {
    render(<Teams />);

    const loadingComponent = screen.getByRole('alert');

    expect(loadingComponent).toBeVisible();
    expect(loadingComponent).toHaveAttribute('aria-live', 'polite');
    expect(loadingComponent).toHaveAttribute('aria-busy', 'true');
  });
});

describe('<Teams /> Success state', () => {
  it('should render teams list', async () => {
    render(<Teams />);

    expect(await screen.findAllByTestId('teamContainer')).toHaveLength(3);
  });
});
