'use client'

import { ReactSelect, useNav } from '@payloadcms/ui'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

const options = [
  { label: 'Zvezde Oriona', value: 'http://localhost:3000/admin' },
  { label: 'AIPA', value: 'http://localhost:3000/admin' },
]

export function AdminNavHeader() {
  const router = useRouter()
  const { navOpen, setNavOpen } = useNav()
  const [selected, setSelected] = useState(options[0])

  return (
    <div
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: '8px',
        padding: '12px 0',
        marginBottom: '8px',
        borderBottom: '1px solid var(--theme-border-color)',
        boxSizing: 'border-box',
      }}
    >
      <button
        onClick={() => setNavOpen(!navOpen)}
        aria-label="Toggle sidebar"
        title={navOpen ? 'Collapse sidebar' : 'Expand sidebar'}
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0,
          width: '28px',
          height: '28px',
          borderRadius: '6px',
          border: '1px solid var(--theme-border-color)',
          background: 'none',
          cursor: 'pointer',
          color: 'var(--theme-text)',
          opacity: 0.6,
          transform: navOpen ? 'rotate(0deg)' : 'rotate(180deg)',
          transition: 'transform 0.2s, opacity 0.15s, background 0.15s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.opacity = '1'
          e.currentTarget.style.background = 'var(--theme-elevation-100)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.opacity = '0.6'
          e.currentTarget.style.background = 'none'
        }}
      >
        <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
          <path
            d="M10 3L5 8L10 13"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      <div style={{ flex: 1, minWidth: 0 }}>
        <ReactSelect
          value={selected}
          onChange={(option) => {
            if (option && !Array.isArray(option)) {
              const opt = option as { label: string; value: string }
              setSelected(opt)
              router.push(opt.value)
            }
          }}
          options={options}
          isClearable={false}
          isSearchable={false}
        />
      </div>
    </div>
  )
}
