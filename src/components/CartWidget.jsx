import {Link} from 'react-router-dom';
import carrito from '../img/carrito-de-compras.png';
import {CartContext} from './CartContext';
import {useContext} from 'react';
import '../css/navbar.css';

export default function CardWidget(){

    const {Qty, cantidad} = useContext(CartContext)

    return(
        <div className='contenedorCarrito'>
            <Link to='/Cart'>
                <img  src={carrito} className='carrito'/><p>{Qty(cantidad)}</p>
            </Link>
        </div>
    )
}
