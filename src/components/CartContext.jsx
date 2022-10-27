import { createContext, useState } from "react";

export const CartContext = createContext()

const {Provider} = CartContext;

const MyProvider = ({children}) =>{

    const[cart, setCart] = useState([])

    const isInCart = (id) =>{
        return cart.some(AItem => AItem.id === id)
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
        }else{
            setCart([...cart, newItem])
        }
    }

    const deleteItem = (id) =>{
        setCart(cart.filter(produc => produc.id !== id))
    }

    const emptyCart = () =>{
        setCart([])
    }

    const Qty = () =>{
        return cart.reduce((acc, product) => acc + product.cantidad, 0)
    }

    const total = () =>{
        return cart.reduce((acc, product) => acc + product.price * product.cantidad, 0)
    }
    
    return(
        <Provider value={{cart, isInCart, addItem, deleteItem, emptyCart, Qty, total}}>{children}</Provider>
    )
}

export default MyProvider;