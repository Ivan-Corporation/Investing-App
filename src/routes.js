import Stock from "views/Stock.js";
import Icons from "views/Icons.js";
import Typography from "views/Typography.js";
import Notifications from "views/Notifications.js";

import TableList from "views/TableList.js";

import UserProfile from "views/UserProfile.js";
import About from "views/About";
import Settings from "views/Settings";
import Crypto from "views/Crypto";

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
    component: Stock,
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
    path: "/crypto",
    name: "Криптовалюта",
    rtlName: "معلومات عن العمل",
    icon: "tim-icons icon-molecule-40",
    component: Crypto,
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
    path: "/tutorials",
    name: "Туториалы",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-paper",
    component: TableList,
    layout: "/admin",
  },
  {
    path: "/calculator",
    name: "Калькуляторы",
    rtlName: "",
    icon: "tim-icons icon-tablet-2",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/portfolio",
    name: "Портфель",
    rtlName: "",
    icon: "tim-icons icon-basket-simple",
    component: Typography,
    layout: "/admin",
  },
  {
    path: "/settings",
    name: "Настройки",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-settings-gear-63",
    component: Settings,
    layout: "/admin",
  },
  

];
export default routes;
