import ListWisata from "views/ListWisata.js";
import Icons from "views/Icons.js";
import TableList from "views/TableList.js";
import Maps from "views/Maps.js";
import Upgrade from "views/Upgrade.js";
import UserPage from "views/UserPage.js";
import Akomodasi from "views/Akomodasi.js";
import Login from "views/Login.js";
import Register from "views/Register.js";
import Details from "views/Details.js";
import Error from "views/Error.js";

var dashRoutes = [
  {
    path: "/icons",
    name: "Icons",
    icon: "design_image",
    component: Icons,
    layout: "/layouts",
  },
  {
    path: "/maps",
    name: "Maps",
    icon: "location_map-big",
    component: Maps,
    layout: "/layouts",
  },
  {
    path: "/listwisata",
    name: "List Wisata",
    icon: "ui-1_bell-53",
    component: ListWisata,
    layout: "/layouts",
  },
  {
    path: "/user-page",
    name: "User Profile",
    icon: "users_single-02",
    component: UserPage,
    layout: "/layouts",
  },
  {
    path: "/extended-tables",
    name: "Table List",
    icon: "files_paper",
    component: TableList,
    layout: "/layouts",
  },
  {
    pro: true,
    path: "/upgrade",
    name: "Upgrade to PRO",
    icon: "objects_spaceship",
    component: Upgrade,
    layout: "/layouts",
  },
  {
    path: "/akomodasi",
    name: "Akomodasi",
    icon: "objects_spaceship",
    component: Akomodasi,
    layout: "/layouts",
  },
  {
    path: "/login",
    name: "Login",
    icon: "objects_spaceship",
    component: Login,
    layout: "/layouts",
  },
  {
    path: "/details/:id",
    name: "Details",
    icon: "objects_spaceship",
    component: Details,
    layout: "/layouts",
  },
  {
    path: "/register",
    name: "Register",
    icon: "objects_spaceship",
    component: Register,
    layout: "/layouts",
  },
  {
    path: "/error",
    name: "Error404",
    icon: "objects_spaceship",
    component: Error,
    layout: "/layouts",
  },
  {
    path: "/aboutus",
    name: "AboutUs",
    icon: "objects_spaceship",
    component: Error,
    layout: "/layouts",
  },
];

export default dashRoutes;