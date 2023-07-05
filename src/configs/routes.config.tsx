import { Navigate, RouteObject } from 'react-router-dom';
import NotAuthenticated from '@/common/pages/NotAuthenticated';
import NotFound from '@/common/pages/NotFound';
import RedirectHere from '@/common/pages/RedirectHere';
import UnAuthorized from '@/common/pages/UnAuthorized';
import homeRoutes from '@/views/home/home.routes';
import Layout from "@/layout/Layout";

const routes = () => {
  const all_routes: RouteObject[] = [
    { path: '/redirect-here', element: <RedirectHere /> },
    { path: '/401', element: <NotAuthenticated /> },
    { path: '/403', element: <UnAuthorized /> },
    { path: '/404', element: <NotFound /> },
    { path: '*', element: <Navigate to="/404" /> },
      { element: <Layout />, children: [...homeRoutes]},
];
  return all_routes;
};

export default routes;
