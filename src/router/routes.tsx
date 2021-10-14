import { isConnect } from 'data/db';
import { lazy } from 'react';

type Routes = {
  title?: string,
  LoadComponent: React.ComponentType,
  exact: boolean,
  path: string,
}

const routes: Routes[] = [
  {
    title: 'Home',
    path: '/',
    LoadComponent: lazy(() => import('components/pages/home')),
    exact: true,
  },
  {
    title: 'Lottery',
    path: '/lottery',
    LoadComponent: lazy(() => import('components/pages/lottery')),
    exact: true,
  },
  {
    title: 'Millipad',
    path: '/millipad',
    LoadComponent: lazy(() => import('components/pages/millipad')),
    exact: true,
  },
  {
    title: 'Millipad',
    path: '/millipad/:nameProject',
    LoadComponent: isConnect ? lazy(() => import('components/pages/millipad/connected')) : lazy(() => import('components/pages/millipad/unconnected')),
    exact: true,
  },
  {
    title: 'NFT Tickets',
    path: '/tickets',
    LoadComponent: lazy(() => import('components/pages/tickets')),
    exact: true,
  },
];

export default routes;
