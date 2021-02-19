import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import Notifications from "views/Notifications.js";

import TableList from "views/TableList.js";

import UserProfile from "views/UserProfile.js";
import About from "views/About";

var routes = [
  {
    path: "/stock-about",
    name: "О проекте",
    rtlName: "معلومات عن العمل",
    icon: "tim-icons icon-bulb-63",
    component: About,
    layout: "/admin",
  },
  {
    path: "/stock-info",
    name: "Основная информация",
    rtlName: "معلومات عن العمل",
    icon: "tim-icons icon-coins",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/stock-list",
    name: "Акции",
    rtlName: "الترقيات",
    icon: "tim-icons icon-bank",
    component: Icons,
    layout: "/admin",
  },
  {
    path: "/stock-info",
    name: "Криптовалюта",
    rtlName: "معلومات عن العمل",
    icon: "tim-icons icon-molecule-40",
    component: Dashboard,
    layout: "/admin",
  },
  {
    path: "/notifications",
    name: "Уведомления",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/admin",
  },
  {
    path: "/user-profile",
    name: "Профиль",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-badge",
    component: UserProfile,
    layout: "/admin",
  },
  {
    path: "/tables",
    name: "Туториалы",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/achievments",
    name: "Шаблоны (Достяги?)",
    rtlName: "",
    icon: "tim-icons icon-trophy",
    component: Typography,
    layout: "/admin",
  },
  
  

];
export default routes;
