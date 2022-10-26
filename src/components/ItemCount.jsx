import { useState } from "react";
import '../css/count.css';

function ItemCount(){

    const[cantidad, setCantidad] = useState(1)

    let restar = ()=>{
        let desde = 1
        if(cantidad > desde){
            setCantidad(cantidad - 1) 
        }else{
            alert('no')
        }
    }

    let sumar = ()=>{
        let hasta = 10
        if(cantidad < hasta){
            setCantidad(cantidad + 1)
        }else{
            alert('no hay mas stock de este producto')
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