import ListWisata from "views/ListWisata.js";
import Icons from "views/Icons.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";
import Akomodasi from "views/Akomodasi.js";
import Login from "views/Login.js";
import Details from "views/Details.js";

var dashRoutes = [
  {
    path: "/icons",
    name: "Icons",
    icon: "design_image",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: Maps,
    layout: "/admin",
  },
  {
    path: "/listwisata",
    name: "List Wisata",
    icon: "ui-1_bell-53",
    component: ListWisata,
    layout: "/admin",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/admin",
  },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList,
    layout: "/admin",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "objects_spaceship",
    component: Upgrade,
    layout: "/admin",
  },
  {
    path: "/akomodasi",
    name: "Akomodasi",
    icon: "objects_spaceship",
    component: Akomodasi,
    layout: "/admin",
  },
  {
    path: "/login",
    name: "Login",
    icon: "objects_spaceship",
    component: Login,
    layout: "/admin",
  },
  {
    path: "/details",
    name: "Details",
    icon: "objects_spaceship",
    component: Details,
    layout: "/admin",
  },
];

export default dashRoutes;