import React from 'react'

type Tab = { id: string; label: string }

type TabsProps = {
  tabs: Tab[]
  activeId: string
  onChange: (id: string) => void
}

export function Tabs({ tabs, activeId, onChange }: TabsProps): React.JSX.Element {
  if (!tabs || tabs.length === 0) {
    return <div>Нет данных</div>
  }
  return (
    <div style={{ display: 'flex', gap: 8, padding: '12px 0', flexWrap: 'wrap' }}>
      {tabs.map((t) => {
        const isActive = t.id === activeId
        return (
          <button
            key={t.id}
            type="button"
            onClick={() => {
              if (!isActive) onChange(t.id)
            }}
            style={{
              padding: '8px 12px',
              borderRadius: 8,
              border: '1px solid #d1d5db',
              background: isActive ? '#111827' : '#fff',
              color: isActive ? '#fff' : '#111827',
              cursor: isActive ? 'default' : 'pointer',
            }}
          >
            {t.label}
          </button>
        )
      })}
    </div>
  )
}


