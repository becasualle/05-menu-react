import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// map - get all categories
// get Set object of unique values
// turn it back to array using spread
const allCategories = ['all', ...new Set(items.map(item => item.category))]

function App() {
  const [menuItems, setMenuItems] = useState(items);
  // set categories = array of all unique categories names from source data
  const [categories, setCategories] = useState(allCategories);

  // filter items in data array of objects using category name
  const filterItems = category => {

    if (category === "all"){
      setMenuItems(items);
      return;
    }

    const newItems = items.filter(item => item.category === category);
    setMenuItems(newItems);
  }

  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>our menu</h2>
          <div className="underline"></div>
        </div>
      </section>
      <Categories categories={categories} filterItems={filterItems}/>
      <Menu items={menuItems}/>
    </main>
  )
}

export default App;
