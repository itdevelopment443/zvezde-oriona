'use client'

import { useEffect, useCallback } from 'react'
import { createPortal } from 'react-dom'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'
import { Card } from '@/types/card-types'
import { cn } from '@/frontend/lib/utils'

interface GalleryLightboxProps {
  cards: Card[]
  activeIndex: number | null
  onClose: () => void
  onNext: () => void
  onPrev: () => void
}

export function GalleryLightbox({
  cards,
  activeIndex,
  onClose,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (activeIndex === null) return
      if (e.key === 'ArrowRight') onNext()
      if (e.key === 'ArrowLeft') onPrev()
      if (e.key === 'Escape') onClose()
    },
    [activeIndex, onNext, onPrev, onClose],
  )

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [handleKeyDown])

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
    }
  }, [activeIndex])

  if (activeIndex === null) return null

  const item = cards[activeIndex]

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 text-white/80 hover:text-white transition-colors"
        aria-label="Close lightbox"
      >
        <X className="size-8" />
      </button>

      {/* Counter */}
      <span className="absolute top-4 left-1/2 -translate-x-1/2 text-white/60 text-sm tabular-nums">
        {activeIndex + 1} / {cards.length}
      </span>

      {/* Prev */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onPrev()
        }}
        className="absolute left-4 z-10 text-white/80 hover:text-white transition-colors"
        aria-label="Previous image"
      >
        <ChevronLeft className="size-10" />
      </button>

      {/* Image */}
      <div
        className="relative max-w-5xl w-full mx-16 max-h-[85vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative w-full max-h-[75vh]">
          <Image
            src={item.featured_image}
            alt={item.excerpt ?? 'gallery image'}
            width={1200}
            height={800}
            className="w-full h-full object-contain max-h-[75vh]"
            priority
          />
        </div>

        {/* Caption */}
        {(item.title || item.excerpt) && (
          <div className="bg-black/60 px-4 py-3 text-white text-center">
            {item.title && (
              <p className="font-black uppercase text-lg">{item.title}</p>
            )}
            {item.excerpt && (
              <p className={cn('text-sm text-white/70', { 'mt-1': !!item.title })}>
                {item.excerpt}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Next */}
      <button
        onClick={(e) => {
          e.stopPropagation()
          onNext()
        }}
        className="absolute right-4 z-10 text-white/80 hover:text-white transition-colors"
        aria-label="Next image"
      >
        <ChevronRight className="size-10" />
      </button>
    </div>,
    document.body,
  )
}
