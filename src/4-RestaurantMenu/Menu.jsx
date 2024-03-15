import React, { useState } from 'react'
import items from './data/data'
import Categories from './Categories'
import MenuItems from './MenuItems'

const allCategories = ['all', ...new Set(items.map((item) => item.category))]

function Menu() {
  const [menuItems, setMenuItems] = useState(items)
  const [categories, setCategories] = useState(allCategories)
  const [order, setOrder] = useState(false)
  const [orderName, setOrderName] = useState('')

  let menuDiv = {
    height: '100vh',
    width: '100%',
    margin: "0 auto"
  }

  function filterItems(category) {
    if (category === 'all') {
      setMenuItems(items)
      console.log('all')
      return
    }
    const newItems = items.filter((item) => item.category === category)
    setMenuItems(newItems)
    console.log('filter')
  }

  function orderNow(name) {
    setOrder(true)
    setOrderName(name)
  }

  if (order) {
    return (
      <main className="text-center text-danger">
        <h5 style={{ lineHeight: '3rem' }}>
          <b>{orderName.toUpperCase()}</b> <br />
          siparişiniz başarı ile oluşturulmuştur. <br />
          Afiyet Olsun 😋
        </h5>
      </main>
    )
  }

  return (
    <main className="mt-3">
      <section className="text-center" style={menuDiv}>
        <h2 className="text-danger my-3">Our Menu</h2>
        <div
          style={{ width: '5rem' }}
          className="border border-bottom border-danger border-2 mb-3 mx-auto"
        ></div>
        <Categories categories={categories} filterItems={filterItems} />
        <MenuItems items={menuItems} orderNow={orderNow} />
      </section>
    </main>
  )
}

export default Menu
