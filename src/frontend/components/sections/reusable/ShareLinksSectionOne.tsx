'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { SiFacebook, SiX } from '@icons-pack/react-simple-icons'
import { Copy } from 'lucide-react'

export default function ShareSection() {
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')

  useEffect(() => {
    setUrl(window.location.href)
    setTitle(document.title)
  }, [])

  const encodedUrl = encodeURIComponent(url)
  const encodedTitle = encodeURIComponent(title)

  const facebook = `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`
  const twitter = `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`

  const copyForInstagram = () => {
    navigator.clipboard.writeText(url)
    alert('Link copied. Paste it in Instagram.')
  }

  const box =
    'w-14 h-14 border border-gray-300 flex items-center justify-center rounded hover:bg-gray-100 transition'

  return (
    <section id="social-share">
      <div className="flex gap-2">
        <Link href={facebook} target="_blank" className={box}>
          <SiFacebook size={24} />
        </Link>
        <Link href={twitter} target="_blank" className={box}>
          <SiX size={24} />
        </Link>
        <button onClick={copyForInstagram} className={box}>
          <Copy size={24} />
        </button>
      </div>
    </section>
  )
}
