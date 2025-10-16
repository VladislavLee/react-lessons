import React from 'react'
import { restaurants } from './assets/mock.js'
import { Layout } from './components/Layout'
import { Tabs } from './components/Tabs'
import { RestaurantView } from './components/RestaurantView'

export function App(): React.JSX.Element {
  const [activeId, setActiveId] = React.useState<string>(restaurants[0]?.id ?? '')

  const tabs = React.useMemo(
    () => restaurants.map((r: { id: string; name: string }) => ({ id: r.id, label: r.name })),
    [],
  )

  const activeRestaurant = React.useMemo(
    () => restaurants.find((r: { id: string }) => r.id === activeId),
    [activeId],
  )

  return (
    <Layout>
      <Tabs tabs={tabs} activeId={activeId} onChange={setActiveId} />
      <RestaurantView restaurant={activeRestaurant} />
    </Layout>
  )
}


