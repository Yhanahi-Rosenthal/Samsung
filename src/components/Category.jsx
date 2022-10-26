import {collection, getDocs, getFirestore} from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Loading from './Loading';
import Item from './Item';
import '../css/item.css';

function Category(){

    let {category} = useParams()

    const [products, setProducts] = useState(false)
    const [Loader, setLoader] = useState(true)

    useEffect(()=>{
        const db = getFirestore()

        const ItemCollection = collection(db, 'Items')

        getDocs(ItemCollection).then((res)=>{
            setProducts(res.docs.map(doc => ({...doc.data(), id: doc.id})))
        })
        .catch((rej)=>{
            console.log('hubo un error')
        })

        setTimeout(() => {
            setLoader(false)
        }, 2500);  
    },[])


    return(
        <>
            {Loader && <Loading />}
            <div className='ContainerCategory'>
                {products && products?.filter(product => product.category.includes(category)).map(product => <Item key={product.id} product={product} />)}              
            </div>
        </>  
    )
}

export default Category;