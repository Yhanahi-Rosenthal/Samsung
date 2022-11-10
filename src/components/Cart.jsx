import {useContext} from 'react';
import { CartContext } from "./CartContext";
import '../css/cart.css';
import { Link } from 'react-router-dom';
import samsung from '../img/samsung.png';


function Cart(){

    const {total, emptyCart, deleteItem, get} = useContext(CartContext)

    return(
        <>
            <div>
                <div className='navCart'>
                    <img src={samsung} className='samsungCart' />
                </div>
                {get.length > 0 && 
                    <div className='titCart'>
                        <h3>Mi carrito</h3>
                        <p>Resumen de mi compra</p>
                    </div>
                }
               {get.length > 0 ?
                    get.map((Item, cart) => {
                       return <div key={cart} className='containerProduct'>
                            <img src={Item.img1} />
                            <p className='nameCart'>{Item.name}</p>
                            <p className='p'>US$ {Item.price}</p>
                            <p className='p'>X{Item.cantidad}</p>
                            <button onClick={()=>{deleteItem(Item.id)}} className='buttonProductCart' >Eliminar</button>
                            
                        </div>
                    }):
                    <div className='containerNoProductos'>
                        <p>No hay productos en el carrito</p>
                    </div>
              }
                 
                {get.length > 0 && 
                    <div className='containerTotalVaciar'>
                        <p>Total: US$ {total()}</p>
                        <button className='ButtonVolverATienda'><Link to='/CheckOut' className='volverATienda' >Finalizar compra</Link></button>
                        <button className='ButtonVolverATienda' ><Link to='/Home' className='volverATienda'>Volver a la tienda</Link></button>
                        <button onClick={()=>{emptyCart()}} className='vaciarCart'>Vaciar Carrito</button>
                    </div>
                }
            </div>
        </>
    )
}

export default Cart;