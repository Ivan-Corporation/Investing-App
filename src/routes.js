import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
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
    path: "/map",
    name: "Карта бирж (Новости)",
    rtlName: "خرائط",
    icon: "tim-icons icon-globe-2",
    component: Map,
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
  {
    path: "/stock-info",
    name: "Типография",
    rtlName: "طباعة",
    icon: "tim-icons icon-minimal-left",
    component: Typography,
    layout: "/admin",
  },
  
  {
    path: "/rtl-support",
    name: "Поддержка RTL",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-minimal-right",
    component: Rtl,
    layout: "/rtl",
  },
];
export default routes;
