'use client'

import { useRowLabel } from '@payloadcms/ui'

const ContactRowLabel = () => {
  const { data, rowNumber } = useRowLabel<{ value?: string; icon?: string }>()

  const fallbackLabel = `Contact ${String(rowNumber).padStart(2, '0')}`

  const parts = [data?.icon, data?.value].filter(Boolean)
  const customLabel = parts.length ? parts.join(' / ') : fallbackLabel

  return <div>{customLabel}</div>
}

export default ContactRowLabel
