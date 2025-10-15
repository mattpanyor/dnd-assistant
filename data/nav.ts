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
      { label: "Create Character", href: "/characters/create" },
      { label: "My Characters", href: "/characters" },
      { label: "Character Sheet", href: "/characters/sheet" },
    ],
  },
  {
    label: "Campaigns",
    items: [
      { label: "Create Campaign", href: "/campaigns/create" },
      { label: "My Campaigns", href: "/campaigns" },
      { label: "Join Campaign", href: "/campaigns/join" },
    ],
  },
  {
    label: "Tools",
    items: [
      { label: "Dice Roller", href: "/tools/dice" },
      { label: "Spell Book", href: "/tools/spells" },
      { label: "Monster Manual", href: "/tools/monsters" },
      { label: "Item Generator", href: "/tools/items" },
    ],
  },
  {
    label: "Resources",
    items: [
      { label: "Rules Reference", href: "/resources/rules" },
      { label: "Homebrew", href: "/resources/homebrew" },
      { label: "Community", href: "/resources/community" },
    ],
  },
];
