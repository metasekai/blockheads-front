import Mint from "./pages/Mint";
import Inventory from "./pages/Inventory";
import Marketplace from "./pages/Marketplace";
import ItemDetails from "./pages/Item";

var routes = [
  {
    path: "/mint",
    name: "Mint",
    layout: "simple",
    element: <Mint />,
  },
  {
    path: "/marketplace",
    name: "Marketplace",
    layout: "dashboard",
    element: <Marketplace />,
  },
  {
    path: "/marketplace/:id",
    name: "Item Details",
    layout: "dashboard",
    element: <ItemDetails />,
  },
  {
    path: "/inventory",
    name: "Inventory",
    layout: "dashboard",
    element: <Inventory />,
  },
];

export default routes;
