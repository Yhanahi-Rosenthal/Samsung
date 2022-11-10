import { createContext, useState } from "react";

export const CartContext = createContext()

const {Provider} = CartContext;

const MyProvider = ({children}) =>{

    const[cart, setCart] = useState([])
    const[cantidad, setCantidad] = useState(1)


    const get = JSON.parse(localStorage.getItem('cart'))
    if(get === null){
        localStorage.setItem('cart', JSON.stringify(cart))
        window.location.reload()
    }
    console.log(get)

    const isInCart = (id) =>{
        return(
            cart.some(AItem => AItem.id === id)
        ) 
    }

    const addItem = (product, cantidad) =>{
        const newItem = {
            ...product,
            cantidad
        }

        if(isInCart(newItem.id)){
            const findProduct = cart.find(product => product.id === newItem.id)
            const indexProduct = cart.indexOf(findProduct)
            const auxArray = [...cart]
            auxArray[indexProduct].cantidad += cantidad
            setCart(auxArray)
            localStorage.setItem('cart', JSON.stringify(auxArray))
        }else{
            setCart([...cart, newItem])
            localStorage.setItem('cart', JSON.stringify([...cart, newItem]))
        }
        
    }

    const deleteItem = (id) =>{
        localStorage.setItem('cart', JSON.stringify(get.filter(product => product.id !== id))) 
        setCart(cart.filter(product => product.id !== id))
    }


    const emptyCart = () =>{  
        setCart([])   
        localStorage.setItem('cart', JSON.stringify(cart))
    }

    const Qty = () =>{
        if(get){
            return get.reduce((acc, product) => acc + product.cantidad, 0)
        }
    }


    const total = () =>{
        if(get){
            return get.reduce((acc, product) => acc + product.price * product.cantidad, 0)
        }
    }

    
    
    return(
        <Provider value={{get, setCart, cart, isInCart, addItem, deleteItem, emptyCart, Qty, total, cantidad, setCantidad}}>{children}</Provider>
    )
}

export default MyProvider;