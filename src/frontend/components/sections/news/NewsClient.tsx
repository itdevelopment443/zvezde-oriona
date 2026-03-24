'use client'

import Image from 'next/image'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { Card } from '@/types/card-types'
import { Button } from '../../ui/button'
import Link from 'next/link'
import { getText } from '@/frontend/utils/normalize'

interface NewsArchiveClientProps {
  items: Card[]
  totalDocs: number
  currentLimit: number
  step?: number
}

export default function NewsArchiveClient({
  items,
  totalDocs,
  currentLimit,
  step = 9,
}: NewsArchiveClientProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const remaining = Math.max(totalDocs - items.length, 0)

  const handleLoadMore = () => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('limit', String(currentLimit + step))
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div>
      <div className="grid lg:grid-cols-3 lg:gap-6">
        {items.map((item, index) => (
          <Link key={index} href={getText(item.link?.href)}>
            <div className="w-full">
              <div className="flex flex-col items-start">
                <div className="w-full">
                  <Image
                    src={item.featured_image}
                    height={300}
                    width={500}
                    alt="prikazna slika"
                    className="w-full"
                  />
                </div>
                <div className="flex flex-col gap-3 pr-5 py-6">
                  <h3 className="text-3xl font-black">{item.title}</h3>
                  <p>{item.excerpt}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {remaining > 0 && (
        <div className="px-16 flex justify-center">
          <Button onClick={handleLoadMore}>Prikaži več ({remaining})</Button>
        </div>
      )}
    </div>
  )
}
