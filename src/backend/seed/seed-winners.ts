import { getPayload } from 'payload'
import configPromise from '@payload-config'

const PEOPLE = [
  'Mojca Funkl',
  'Klemen Slakonja',
  'Iva Krajnc Bagola',
  'Jernej Šugman',
  'Maruša Majer',
  'Marko Mandić',
  'Katarina Čas',
  'Alojz Svete',
  'Nina Ivanišin',
  'Primož Pirnat',
  'Tanja Ribič',
  'Boris Cavazza',
  'Pia Zemljič',
  'Igor Samobor',
  'Vesna Jevnikar',
  'Matjaž Tribušon',
  'Eva Jesenovec',
  'Rok Vihar',
  'Nataša Barbara Gračner',
  'Miha Rodman',
  'Damjana Černe',
  'Tadej Troha',
  'Urška Hlebec',
  'Gregor Zorc',
  'Lara Vouk',
  'Sebastjan Starič',
  'Mojca Partljič',
  'Aleš Valič',
  'Helena Majdič',
  'Jure Ivanušič',
  'Zvone Hribar',
  'Rebeka Dremelj',
  'Simon Petrič',
  'Andreja Petan',
  'Boštjan Napast',
  'Špela Škulj',
  'Urban Koder',
  'Zala Đurić Ribič',
  'Peter Musevski',
  'Maša Grošelj',
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

async function seed() {
  const payload = await getPayload({ config: configPromise })

  // Fetch existing award categories
  const awardsResult = await payload.find({ collection: 'awards', limit: 10, locale: 'sl' })
  const awards = awardsResult.docs

  if (awards.length === 0) {
    console.error('❌ No award categories found. Please create them in the admin panel first.')
    process.exit(1)
  }

  console.log(`✅ Found ${awards.length} award categories`)

  // Create or find people
  const createdPeople: { id: number }[] = []
  for (const name of PEOPLE) {
    const existing = await payload.find({
      collection: 'people',
      where: { name: { equals: name } },
    })
    if (existing.docs.length > 0) {
      createdPeople.push(existing.docs[0] as { id: number })
      console.log(`↩ Skipping existing person: ${name}`)
    } else {
      const created = await payload.create({ collection: 'people', data: { name } })
      createdPeople.push(created as { id: number })
      console.log(`✅ Created person: ${name}`)
    }
  }

  // Create winners — distribute across all award categories and years
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
      console.log(`  ↩ Skipping existing winner: person ${person.id} / award ${award.id} / ${year}`)
    } else {
      await payload.create({
        collection: 'winners',
        data: {
          person: person.id,
          award: award.id,
          year,
          description,
        },
      })
      console.log(`  ✅ Created winner: ${PEOPLE[i]} → ${award.title} (${year})`)
    }
  }

  console.log('\n🎉 Seed complete!')
  process.exit(0)
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
