import { NavItem } from "@/data/nav";

export function getNavItems(): NavItem[] {
  return [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Characters",
      href: "/characters",
    },
    {
      label: "Dice Roller",
      href: "/dice",
    },
  ];
}
