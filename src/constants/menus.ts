interface MenuItem {
  label: string;
  type: "download" | "link";
  href: string;
}

export const mainHeaderMenu: MenuItem[] = [
  {
    label: "Podelitve",
    href: "podelitev",
    type: "link",
  },
  {
    label: "Nagrade",
    href: "nagrade",
    type: "link",
  },
  {
    label: "Novice",
    href: "novice",
    type: "link",
  },
  {
    label: "Kontakt",
    href: "kontakt",
    type: "link",
  },
  {
    label: "O nas",
    href: "kontakt#1",
    type: "link",
  },
];

export const mainFooterMenu: MenuItem[] = [
  {
    label: "Prenesi CGP",
    href: "#",
    type: "download",
  },
  {
    label: "Politika zasebnosti",
    href: "politika-zasebnosti",
    type: "link",
  },
  {
    label: "Pogoji poslovanja",
    href: "pogoji-poslovanja",
    type: "link",
  },
];

export const copyrightFooter = "© Vse pravice zadržane Aipa, k.o.";
