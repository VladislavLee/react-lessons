import React from 'react'

type LayoutProps = {
  headerTitle?: string
  children: React.ReactNode
  footerText?: string
}

export function Layout({ headerTitle = 'Рестораны', children, footerText = '© 2025' }: LayoutProps): React.JSX.Element {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <header style={{ padding: 16, borderBottom: '1px solid #e5e7eb' }}>
        <h1 style={{ margin: 0 }}>{headerTitle}</h1>
      </header>
      <main style={{ flex: 1, padding: 24 }}>{children}</main>
      <footer style={{ padding: 16, borderTop: '1px solid #e5e7eb', color: '#6b7280' }}>{footerText}</footer>
    </div>
  )
}


