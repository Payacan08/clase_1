import React, { useEffect, useState } from 'react'
import ItemCard from "./ItemCard";
import { collection, getDocs, getFirestore} from "firebase/firestore";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItemData();
  }, []);

  const getItemData = ()=>{
    const db = getFirestore();
    const itemCollection = collection(db,'items');
    getDocs(itemCollection).then(result=>{
      const itemData = result.docs.map(d =>({'id': d.id, ... d.data() }))
      setItems(itemData)
    })
  }

  return(
      <div className="flex justify-center flex-wrap flex-row gap-8">
          {items.map(item=><ItemCard key={item.id} data={item}/>)}
      </div>
  )
}

export default ItemListContainer