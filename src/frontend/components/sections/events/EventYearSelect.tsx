'use client'

import { useRouter } from 'next/navigation'
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from '../../ui/combobox'

interface EventYearSelectProps {
  years: string[]
  currentYear: string
  locale: string
  className?: string
  inputClassName?: string
}

export default function EventYearSelect({
  years,
  currentYear,
  locale,
  className,
  inputClassName,
}: EventYearSelectProps) {
  const router = useRouter()
  const options = years.map((y) => ({ label: y, value: y }))

  const handleValueChange = (newYear: string | null) => {
    if (newYear && newYear !== currentYear) {
      router.push(`/${locale}/dogodki/${newYear}`)
    }
  }

  return (
    <Combobox items={options} value={currentYear} onValueChange={handleValueChange}>
      <ComboboxInput
        className={className}
        inputClassName={inputClassName}
        placeholder={currentYear}
      />
      <ComboboxContent>
        <ComboboxEmpty>Ni let.</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem key={item.value} value={item.value} className="text-xl">
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
