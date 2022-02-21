import { lazy } from 'react';

var routes = [
  {
    path: '/marketplace',
    name: 'Marketplace',
    layout: 'dashboard',
    showResponsive: true,
    element: lazy(() => import('./pages/Marketplace')),
  },
  {
    path: '/marketplace/:id',
    name: 'Item Details',
    layout: 'dashboard',
    showResponsive: false,
    element: lazy(() => import('./pages/Item')),
  },
  {
    path: '/inventory',
    name: 'Inventory',
    layout: 'dashboard',
    showResponsive: true,
    element: lazy(() => import('./pages/Inventory')),
  },
  {
    path: '/mint',
    name: 'Mint',
    layout: 'simple',
    showResponsive: true,
    element: lazy(() => import('./pages/Mint')),
  },
  {
    path: '/',
    name: 'Mint',
    exact: true,
    layout: 'simple',
    showResponsive: false,
    element: lazy(() => import('./pages/Mint')),
  },
];

export default routes;
