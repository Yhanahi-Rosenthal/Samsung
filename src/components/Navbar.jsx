import samsung from '../img/samsung.png';
import {Link} from 'react-router-dom';
import '../css/navbar.css';
import CartWidget from './CartWidget';

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
                <CartWidget />
            </div>
        </>
    )
}

export default Navbar;