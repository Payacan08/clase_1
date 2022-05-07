import React, { useEffect, useState } from 'react'
import {item as itemData} from "./Item";
import ItemCard from "./ItemCard";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const getItem = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(itemData);
      }, 1000);
    });

    getItem.then((result) => {
      setItems(result);
    });
  }, []);

  return(
      <div className="flex justify-center flex-wrap flex-row gap-8">
          {items.map(item=><ItemCard key={item.id} data={item}/>)}
      </div>
  )
}

export default ItemListContainer