import { SectionComponentMap } from '@/types/page-types'
import AboutSection from '../components/sections/contact/AboutSection'
import ExposedNews from '../components/sections/home/ExposedNews'
import HomeHero from '../components/sections/home/HomeHero'
import { Seperator } from '../components/sections/reusable/Seperator'
import Events from '../components/sections/home/Events'
import Awards from '../components/sections/home/Awards'
import LawSection from '../components/sections/law/LawSection'

export const sectionMap: SectionComponentMap = {
  'home-hero-block': HomeHero,
  'exposed-news-block': ExposedNews,
  'seperator-block': Seperator,
  'events-block': Events,
  'awards-block': Awards,
  'about-us-block': AboutSection,
  'law-block': LawSection,
}
