import { useContext, useState } from "react";
import '../css/count.css';
import { CartContext } from "./CartContext";

function ItemCount({
    cantidad,
    setCantidad,
    onAdd,
    AItem
}){

    const {deleteItem} = useContext(CartContext)

    let restar = ()=>{
        let desde = 1
        if(cantidad > desde){
            setCantidad(cantidad - 1) 
        }else{
            alert('La cantidad minima es uno')
        }
    }

    let sumar = ()=>{
        let hasta = 10
        if(cantidad < hasta){
            setCantidad(cantidad + 1)
        }else{
            alert('No hay mas stock de este producto')
        }
    }
    return(
        <>
            <div className="containerCount">
                <button onClick={()=>{restar()}} className="restar">-</button>
                <div>
                    <p>{cantidad}</p>
                </div>
                <button onClick={()=>{sumar()}} className="sumar">+</button>
            </div>
        </>
    )
}

export default ItemCount;