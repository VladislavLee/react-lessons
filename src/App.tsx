import React from 'react'
import { restaurants } from './assets/mock.js'

export function App(): React.JSX.Element {
  return (
    <div style={{ padding: 24 }}>
      <h1>Рестораны</h1>
      {restaurants.map((restaurant) => (
        <section key={restaurant.id} style={{ marginBottom: 32 }}>
          <h2 style={{ marginBottom: 8 }}>{restaurant.name}</h2>

          <h3 style={{ marginTop: 16, marginBottom: 8 }}>Блюда</h3>
          <ul>
            {restaurant.menu.map((item: { id: string; name: string }) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>

          <h3 style={{ marginTop: 16, marginBottom: 8 }}>Отзывы</h3>
          <ul>
            {restaurant.reviews.map((review: { id: string; text: string }) => (
              <li key={review.id}>{review.text}</li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}


