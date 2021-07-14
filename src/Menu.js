import React from 'react';

const Menu = ({items}) => {
  return (
    <div className="section-center">
      {items.map(menuItem => {
        // get all properties using destructuring
        const {id, title, category, price, img, desc} = menuItem;
        return (
          // fore each item render article using id's
          <article key={id} className="menu-item">
            <img src={img} alt={title} className="photo"/>
            <div className="item-info">
              <header>
                <h4>{title}</h4>
                <h4 className="price">${price}</h4>
              </header>
              <p className="item-text">{desc}</p>
            </div>
          </article>
        )
      })}
    </div>

  );
};

export default Menu;
