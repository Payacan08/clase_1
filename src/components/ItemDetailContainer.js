import { doc, getDoc, getFirestore } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
    const [itemDet, setItemDet] = useState([]);
    const {itemId} = useParams()
    useEffect(() => {
      getItemData();
    }, [itemId]);

    const getItemData = ()=>{
      const db = getFirestore();
      const itemDoc = doc(db,'items',itemId);
      getDoc(itemDoc).then(result=>{
        setItemDet({'id': result.id, ... result.data()})
      })
    }
  
    return(
        <div className="flex justify-center flex-row gap-8">
            <ItemDetail key={itemDet.id} data={itemDet}/>
        </div>
    )
}

export default ItemDetailContainer