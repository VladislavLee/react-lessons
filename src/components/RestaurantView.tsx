import React from 'react'
import { Dish } from './Dish'

type MenuItem = { id: string; name: string }
type Review = { id: string; text: string }

type Restaurant = {
  id: string
  name: string
  menu?: MenuItem[]
  reviews?: Review[]
}

type Props = { restaurant?: Restaurant }

export function RestaurantView({ restaurant }: Props): React.JSX.Element {
  if (!restaurant) {
    return <div>Нет данных ресторана</div>
  }

  const { name, menu, reviews } = restaurant

  return (
    <section>
      <h2 style={{ marginBottom: 8 }}>{name}</h2>

      <h3 style={{ marginTop: 16, marginBottom: 8 }}>Блюда</h3>
      {menu && menu.length > 0 ? (
        <ul>
          {menu.map((m) => (
            <Dish key={m.id} id={m.id} name={m.name} />
          ))}
        </ul>
      ) : (
        <div>Блюда отсутствуют</div>
      )}

      <h3 style={{ marginTop: 16, marginBottom: 8 }}>Отзывы</h3>
      {reviews && reviews.length > 0 ? (
        <ul>
          {reviews.map((r) => (
            <li key={r.id}>{r.text}</li>
          ))}
        </ul>
      ) : (
        <div>Отзывы отсутствуют</div>
      )}
    </section>
  )
}


