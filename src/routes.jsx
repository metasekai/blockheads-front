import { lazy } from 'react';

const Mint = lazy(() => import('./pages/Mint'));
const Marketplace = lazy(() => import('./pages/Marketplace'));
const Item = lazy(() => import('./pages/Item'));
const Inventory = lazy(() => import('./pages/Inventory'));
const Login = lazy(() => import('./pages/Login'));
const Profile = lazy(() => import('./pages/Profile'));

var routes = [
  {
    path: '/marketplace',
    name: 'Marketplace',
    layout: 'dashboard',
    showResponsive: true,
    element: <Marketplace />,
  },
  {
    path: '/marketplace/:id',
    name: 'Item Details',
    layout: 'dashboard',
    showResponsive: false,
    element: <Item />,
  },
  {
    path: '/inventory',
    name: 'Inventory',
    layout: 'dashboard',
    showResponsive: true,
    element: <Inventory />,
  },
  {
    path: '/mint',
    name: 'Mint',
    layout: 'simple',
    showResponsive: true,
    element: <Mint />,
  },
  {
    path: '/profile',
    name: 'Profile',
    layout: 'dashboard',
    showResponsive: true,
    element: <Profile />,
  },
  {
    path: '/',
    name: 'Login',
    exact: true,
    layout: 'simple',
    showResponsive: false,
    element: <Login />,
  },
];

export default routes;
