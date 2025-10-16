import React from 'react'

type DishProps = {
  id: string
  name: string
}

export function Dish({ id, name }: DishProps): React.JSX.Element {
  const [count, setCount] = React.useState<number>(0)

  const decrement = (): void => setCount((c) => Math.max(0, c - 1))
  const increment = (): void => setCount((c) => Math.min(5, c + 1))

  return (
    <li key={id} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <span style={{ flex: 1 }}>{name}</span>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button type="button" onClick={decrement} aria-label="decrement">
          -
        </button>
        <span style={{ minWidth: 16, textAlign: 'center' }}>{count}</span>
        <button type="button" onClick={increment} aria-label="increment">
          +
        </button>
      </div>
    </li>
  )
}


