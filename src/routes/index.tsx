import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import { TeamOverview, Teams } from '@/modules/teams';
import { UserOverview } from '@/modules/users';

export const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <Teams />,
    },
    {
      path: '/team/:teamId',
      element: <TeamOverview />,
    },
    {
      path: '/user/:useId',
      element: <UserOverview />,
    },
    { path: '*', element: <Navigate to="." /> },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};
