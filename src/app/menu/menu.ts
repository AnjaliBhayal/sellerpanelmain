import { CoreMenu } from "@core/types";

export const menu: CoreMenu[] = [
  {
    id: "orders",
    title: "Orders",
    translate: "MENU.ORDERS",
    type: "item",
    icon: "../../assets/images/myimages/order_inactive.svg",
    activeIcon: "../../assets/images/myimages/order_active.svg",
    url: "dashboard/orders",
  },
  {
    id: "allOutlet",
    title: "Outlets",
    translate: "MENU.ALLOUTLET",
    type: "item",
    icon: "../../assets/images/myimages/home_inactive.svg",
    activeIcon: "../../assets/images/myimages/home_active.svg",
    url: "dashboard/allOutlet",
  },
  // {
  //   id: "ticket",
  //   title: "Ticket",
  //   translate: "MENU.TICKET",
  //   type: "item",
  //   icon: "../../assets/images/myimages/ticket.png ",
  //   activeIcon: "../../assets/images/myimages/ticket_active.svg",
  //   url: "dashboard/ticket",
  // },
  {
    id: "promotion",
    title: "Promotion",
    translate: "MENU.PROMOTION",
    type: "item",
    icon: "../../assets/images/myimages/promote_inactive.svg",
    activeIcon: "../../assets/images/myimages/promote_active.svg",
    url: "dashboard/promotion",
  },
  {
    id: "Account",
    title: "Account",
    translate: "MENU.ACCOUNT",
    type: "item",
    icon: "../../assets/images/myimages/account_inactive.svg",
    activeIcon: "../../assets/images/myimages/account_active.svg",
    url: "dashboard/account",
  },
  {
    id: "Support",
    title: "Help & Support",
    translate: "MENU.SUPPORT",
    type: "item",
    icon: "../../assets/images/myimages/support_inactive.svg",
    activeIcon: "../../assets/images/myimages/support_active.svg",
    url: "dashboard/support",
  }
  

];
