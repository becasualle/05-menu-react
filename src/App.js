import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

// get unique valuse of categories and add to array with 'all'
const allCategories = ['all', ...new Set(items.map(item => item.category))]

console.log(allCategories);


function App() {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

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
