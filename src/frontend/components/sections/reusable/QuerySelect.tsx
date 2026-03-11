'use client'

import { Option } from '@/types/select-types'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { cn } from '@/frontend/lib/utils'
import {
  Combobox,
  ComboboxContent,
  ComboboxInput,
  ComboboxEmpty,
  ComboboxList,
  ComboboxItem,
} from '../../ui/combobox'

interface ReusableComboboxProps {
  options: Option[]
  queryKey?: string
  placeholder?: string
  defaultValue?: string | number
  emptyText?: string
  className?: string
  inputClassName?: string
  itemClassName?: string
}

export default function ReusableCombobox({
  options,
  queryKey = 'search',
  placeholder = 'Select item',
  emptyText = 'No items found.',
  defaultValue,
  className,
  inputClassName,
  itemClassName,
}: ReusableComboboxProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const value = searchParams.get(queryKey) || defaultValue

  const handleValueChange = (newValue: string | null) => {
    const params = new URLSearchParams(searchParams.toString())
    if (newValue) {
      params.set(queryKey, newValue)
    } else {
      params.delete(queryKey)
    }
    params.delete('page')
    const query = params.toString()
    router.push(query ? `${pathname}?${query}` : pathname)
  }

  return (
    <Combobox items={options} value={value?.toString()} onValueChange={handleValueChange}>
      <ComboboxInput
        className={className}
        inputClassName={inputClassName}
        placeholder={placeholder}
      />
      <ComboboxContent>
        <ComboboxEmpty>{emptyText}</ComboboxEmpty>
        <ComboboxList>
          {(item) => (
            <ComboboxItem
              key={item.value}
              value={item.value}
              className={cn('text-xl', itemClassName)}
            >
              {item.label}
            </ComboboxItem>
          )}
        </ComboboxList>
      </ComboboxContent>
    </Combobox>
  )
}
