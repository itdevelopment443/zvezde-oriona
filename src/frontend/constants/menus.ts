interface SubMenu {
  label: string
  href: string
}

interface MenuItem {
  label: string
  type: 'download' | 'link'
  href: string
  subMenu?: Array<SubMenu>
}

export const mainHeaderMenu: MenuItem[] = [
  {
    label: 'Podelitve',
    href: '/#dogodki',
    type: 'link',
    subMenu: [
      {
        label: '2024',
        href: '#',
      },
    ],
  },
  {
    label: 'Nagrade',
    href: '/#nagrade',
    type: 'link',
    subMenu: [
      {
        label: '2024',
        href: '#',
      },
    ],
  },
  {
    label: 'Novice',
    href: '/novice',
    type: 'link',
  },

  {
    label: 'O nas',
    href: '/o-nas',
    type: 'link',
  },
]

export const mainFooterMenu: MenuItem[] = [
  {
    label: 'Prenesi CGP',
    href: '#',
    type: 'download',
  },
  {
    label: 'Politika zasebnosti',
    href: '/politika-zasebnosti',
    type: 'link',
  },
]

export const copyrightFooter = '© Vse pravice zadržane Aipa, k.o.'
