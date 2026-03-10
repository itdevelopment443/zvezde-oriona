export interface CardLink {
  label?: string
  href: string
}

export interface Card {
  id?: string
  upperHeading?: string
  title: string
  featured_image: string
  excerpt?: string
  link: CardLink
}
