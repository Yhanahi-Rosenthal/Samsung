import samsung from '../img/samsung.png';
import {Link} from 'react-router-dom';
import carrito from '../img/carrito-de-compras.png';
import '../css/navbar.css';

function Navbar(){

    return(
        <>
            <div className='navbarContainer'>
               <Link to='/Home'><img src={samsung} className='logo'/></Link> 
                <nav className='nav'>
                    <ul>
                        <li><Link to='/Home' className='link'>Home</Link></li>
                        <li><Link to='/category/Phone' className='link'>SmartPhones</Link></li>
                        <li><Link to='/category/Wareables' className='link'>Wareables</Link></li>
                        <li><Link to='/category/TV' className='link'>TV's</Link></li>
                    </ul>
                </nav>
                <div className='contenedorCarrito'><Link to='/Cart'><img  src={carrito} className='carrito'/><p>1</p></Link></div>
            </div>
        </>
    )
}

export default Navbar;