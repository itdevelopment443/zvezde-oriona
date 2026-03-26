import type { Payload } from 'payload'

interface GenerateYearParams {
  payload: Payload
  date: string | null | undefined
  collection: 'news-years'
}

export async function generateYear({ payload, date, collection }: GenerateYearParams) {
  if (!date) return

  const year = String(new Date(date).getFullYear())

  const existing = await payload.find({
    collection,
    limit: 1,
    depth: 0,
    where: {
      year: {
        equals: year,
      },
    },
  })

  if (existing.docs.length > 0) return

  try {
    await payload.create({
      collection,
      data: {
        year,
      },
    })
  } catch (error) {
    payload.logger.info(`Year "${year}" may already exist in "${collection}". Skipping create.`)
  }
}
