import Mint from './pages/Mint';
import Inventory from './pages/Inventory';
import Marketplace from './pages/Marketplace';
import ItemDetails from './pages/Item';

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
    element: <ItemDetails />,
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
    path: '/',
    name: 'Mint',
    exact: true,
    layout: 'simple',
    showResponsive: false,
    element: <Mint />,
  },
];

export default routes;
