import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import {item as itemData} from "./Item";
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [itemDet, setItemDet] = useState([]);
    const {itemId} = useParams()
    useEffect(() => {
      
      const getItem = new Promise((resolve, reject) => {
        setTimeout(() => {
        resolve(itemData.find(r=>r.id==itemId));
        }, 1000);
      });

      getItem.then((result) => {
        setItemDet(result);
      });
    }, [itemId]);
  
    return(
        <div className="flex justify-center flex-row gap-8">
            <ItemDetail key={itemDet.id} data={itemDet}/>
        </div>
    )
}

export default ItemDetailContainer