import Stock from "views/Stock.js";
import Icons from "views/Icons.js";
import Notifications from "views/Notifications.js";
import About from "views/About";
import Settings from "views/Settings";
import Crypto from "views/Crypto";
import Tutorials from "views/Tutorials";
import Calculators from "views/Calculators";
import Portfolio from "views/Portfolio";

var routes = [
  {
    path: "/stock-about",
    name: "О проекте",
    icon: "tim-icons icon-bulb-63",
    component: About,
    layout: "/ru",
  },
  {
    path: "/stock-info",
    name: "Основная информация",
    icon: "tim-icons icon-coins",
    component: Stock,
    layout: "/ru",
  },
  {
    path: "/stock-list",
    name: "Акции",
    icon: "tim-icons icon-bank",
    component: Icons,
    layout: "/ru",
  },
  {
    path: "/crypto",
    name: "Криптовалюта",
    icon: "tim-icons icon-molecule-40",
    component: Crypto,
    layout: "/ru",
  },
  {
    path: "/notifications",
    name: "Уведомления",
    icon: "tim-icons icon-bell-55",
    component: Notifications,
    layout: "/ru",
  }, 
  {
    path: "/tutorials",
    name: "Туториалы",
    icon: "tim-icons icon-paper",
    component: Tutorials,
    layout: "/ru",
  },
  {
    path: "/calculator",
    name: "Калькуляторы",
    icon: "tim-icons icon-tablet-2",
    component: Calculators,
    layout: "/ru",
  },
  {
    path: "/portfolio",
    name: "Портфель",
    icon: "tim-icons icon-basket-simple",
    component: Portfolio,
    layout: "/ru",
  },
  {
    path: "/settings",
    name: "Настройки",
    icon: "tim-icons icon-settings-gear-63",
    component: Settings,
    layout: "/ru",
  },
  

];
 


export default routes;
