import { getPayload } from 'payload'
import configPromise from '@payload-config'
import { NextResponse } from 'next/server'

const PEOPLE = [
  'Mojca Funkl', 'Klemen Slakonja', 'Iva Krajnc Bagola', 'Jernej Šugman',
  'Maruša Majer', 'Marko Mandić', 'Katarina Čas', 'Alojz Svete',
  'Nina Ivanišin', 'Primož Pirnat', 'Tanja Ribič', 'Boris Cavazza',
  'Pia Zemljič', 'Igor Samobor', 'Vesna Jevnikar', 'Matjaž Tribušon',
  'Eva Jesenovec', 'Rok Vihar', 'Nataša Barbara Gračner', 'Miha Rodman',
]

const DESCRIPTIONS = [
  'V Imenu Ljudstva\nKrimi-Nadaljevanka',
  'Pod Svobodnim Soncem\nHistorična Drama',
  'Ena Ženska\nPsihološka Drama',
  'Veliki Brat\nResničnostni Šov',
  'Mladina Govori\nDokumentarni Film',
  'Na Robu\nTriler',
  'Domači Prag\nRomantična Komedija',
  'Zvezdni Prah\nSci-Fi Serija',
  'Tišina\nArtistični Film',
  'Preobrat\nAkcijska Drama',
]

const YEARS = ['2023', '2024', '2025']

export async function GET() {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not allowed in production' }, { status: 403 })
  }

  const payload = await getPayload({ config: configPromise })
  const log: string[] = []

  // Fetch award categories
  const awardsResult = await payload.find({ collection: 'awards', limit: 10, locale: 'sl' })
  const awards = awardsResult.docs
  if (awards.length === 0) {
    return NextResponse.json({ error: 'No award categories found. Create them in admin first.' }, { status: 400 })
  }
  log.push(`Found ${awards.length} award categories`)

  // Create people
  const createdPeople: { id: number; name: string }[] = []
  for (const name of PEOPLE) {
    const existing = await payload.find({ collection: 'people', where: { name: { equals: name } } })
    if (existing.docs.length > 0) {
      createdPeople.push(existing.docs[0] as { id: number; name: string })
      log.push(`Skipped existing person: ${name}`)
    } else {
      const created = await payload.create({ collection: 'people', data: { name } })
      createdPeople.push(created as { id: number; name: string })
      log.push(`Created person: ${name}`)
    }
  }

  // Add WinnersBlock to each event for matching year
  for (const year of YEARS) {
    const eventsResult = await payload.find({
      collection: 'events',
      where: { year: { equals: year } },
      limit: 1,
    })
    const event = eventsResult.docs?.[0]
    if (!event) {
      log.push(`No event found for year ${year}, skipping WinnersBlock`)
      continue
    }

    const existingSections = (event.sections as any[]) ?? []
    const hasWinnersBlock = existingSections.some((s: any) => s.blockType === 'winners-block')

    if (!hasWinnersBlock) {
      await payload.update({
        collection: 'events',
        id: event.id,
        data: {
          sections: [
            ...existingSections,
            { blockType: 'winners-block', year, heading: `Zmagovalci ${year}` },
          ],
        },
      })
      log.push(`Added WinnersBlock (${year}) to event: ${event.title}`)
    } else {
      log.push(`WinnersBlock already exists in event: ${event.title}`)
    }
  }

  // Create winners
  for (let i = 0; i < createdPeople.length; i++) {
    const person = createdPeople[i]
    const award = awards[i % awards.length]
    const year = YEARS[i % YEARS.length]
    const description = DESCRIPTIONS[i % DESCRIPTIONS.length]

    const existing = await payload.find({
      collection: 'winners',
      where: {
        and: [
          { person: { equals: person.id } },
          { award: { equals: award.id } },
          { year: { equals: year } },
        ],
      },
    })

    if (existing.docs.length > 0) {
      log.push(`Skipped existing winner: ${person.name} / ${award.title} / ${year}`)
    } else {
      await payload.create({
        collection: 'winners',
        data: { person: person.id, award: award.id, year, description },
      })
      log.push(`Created winner: ${person.name} → ${award.title} (${year})`)
    }
  }

  return NextResponse.json({ success: true, log })
}
