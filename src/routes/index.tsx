import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';

// import TeamOverview from '@/pages/TeamOverview';
// import Teams from '@/pages/Teams';
// import UserOverview from '@/pages/UserOverview';

export const AppRoutes = () => {
  const routes = [
    {
      path: '/',
      element: <div>teams</div>,
    },
    {
      path: '/team/:teamId',
      element: <div>overview</div>,
    },
    {
      path: '/user/:useId',
      element: <div>user</div>,
    },
    { path: '*', element: <Navigate to="." /> },
  ];

  const router = createBrowserRouter([...routes]);

  return <RouterProvider router={router} />;
};
