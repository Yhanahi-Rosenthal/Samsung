import {useContext} from 'react';
import { CartContext } from "./CartContext";
import '../css/cart.css';
import { Link } from 'react-router-dom';
import samsung from '../img/samsung.png';
import candadito from '../img/candadito.png';


function Cart(){

    const {cart, total, emptyCart, deleteItem} = useContext(CartContext)

    return(
        <>
            <div>
                <div className='navCart'>
                    <img src={samsung} className='samsungCart' />
                </div>
                {cart.length > 0 && 
                    <div className='titCart'>
                        <h3>Mi carrito</h3>
                        <p>Resumen de mi compra</p>
                    </div>
                }
              {cart.length > 0 ?
                    cart.map((Item, index) => {
                       return <div key={index} className='containerProduct'>
                            <img src={Item.img1} />
                            <p className='nameCart'>{Item.name}</p>
                            <p className='p'>{Item.price}</p>
                            <p className='p'>X{Item.cantidad}</p>
                            <button onClick={()=>{deleteItem()}} className='buttonProductCart' >Eliminar</button>
                        </div>
                    }):
                    <div className='containerNoProductos'>
                        <p>No hay productos en el carrito</p>
                    </div>
              }
                 
                {cart.length > 0 && 
                    <div className='containerTotalVaciar'>
                        <p>Total: US$ {total()}</p>
                        <button className='ButtonVolverATienda' ><Link to='/Home' className='volverATienda'>Volver a la tienda</Link></button>
                        <button onClick={()=>{emptyCart()}} className='vaciarCart'>Vaciar Carrito</button>
                    </div>
                }
            </div>
        </>
    )
}

export default Cart;