import React from 'react';
import {collection, getDocs, getFirestore} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Detail from './Detail';
import Loading from './Loading';


function ItemDetail(){


    let {id} = useParams()

    const [itens, setItens] = useState(false)
    const[loader, setLoader] = useState(true)

    useEffect(()=>{
            const db = getFirestore()

            const ItemCollection = collection(db, 'Items')

            getDocs(ItemCollection).then((res) =>{
                setItens(res.docs.map(doc => ({...doc.data(), id: doc.id}))
            )})
            .catch((rej)=>{
                console.log('hubo un error')
            })
        
        setTimeout(() => {
            setLoader(false)
        }, 2500);
    },[])


    return (
            <>
                {loader && <Loading />}
                {itens && itens?.filter(item => item.id.includes(id)).map(AItem => <Detail key={AItem.id} AItem={AItem} />)}
            </>
           
           
       
    )
}

export default ItemDetail;