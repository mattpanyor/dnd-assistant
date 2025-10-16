export interface NavItem {
  label: string;
  href?: string;
  items?: NavItem[];
}

export const navItems: NavItem[] = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Characters",
    items: [
      { label: "Della", href: "/characters/della" },
    ],
  },
  {
    label: "Dice Roller",
    href: "/dice",
  },
];
