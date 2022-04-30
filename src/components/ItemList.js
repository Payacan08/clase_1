import { useEffect, useState } from "react";
import {item as itemData} from "./Item";
import ItemCard from "./ItemCard";

const ItemList = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
      const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(itemData);
          resolve(itemData);
        }, 2000);
      });

      getItem.then((result) => {
        setItems(result);
      });
    }, []);

    return(
        <div className="flex flex-row gap-8">
            {items.map(item=><ItemCard data={item}/>)}
        </div>
    )
}

export default ItemList