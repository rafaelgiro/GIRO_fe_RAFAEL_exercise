import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

import TeamOverview from '@/pages/TeamOverview';
import Teams from '@/pages/Teams';
import UserOverview from '@/pages/UserOverview';

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
