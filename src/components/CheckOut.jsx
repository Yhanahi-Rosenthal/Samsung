import {useContext} from 'react';
import {CartContext} from './CartContext';
import '../css/checkout.css';
import { useState } from 'react';
import {getFirestore, addDoc, collection} from 'firebase/firestore';
import { Link } from 'react-router-dom';

function CheckOut(){

    const {total, setCart} = useContext(CartContext)

    const compra = JSON.parse(localStorage.getItem('cart'))

    const [form, setForm] = useState(true)
    const [recibo, setRecibo] = useState(false)

    const [nombre, setNombre] = useState('')
    const [apellido, setApellido] = useState('')
    const [email, setEmail] = useState('')
    const [cel, setCel] = useState('')

    const [idBuyer, setIdBuyer] = useState('')

    const db = getFirestore()

    const orderCollection = collection(db, 'orders')

    function handlerClick(){
        if(nombre != '' || apellido != '' || email != '' || cel != ''){
            setForm(false)
            setRecibo(true)
        }

        const order = {
            buyer: {nombre, apellido, email, cel},
            items: compra,
            total: total()
        }

        addDoc(orderCollection, order).then(({id}) =>{
            setIdBuyer(id)
        })
    }

    function inicio(){
        setCart([])
        localStorage.removeItem('cart')
    }


    return(
        <>
            <div className="containerCheckOut">
                {form && <div className='containerForm'>
                    <h3>DATOS DE FACTURACIÓN</h3>
                    <hr />
                    <form className='form'>
                        <label>
                            <div>
                                <p>Cliente</p>
                            </div>
                            <input type='text' onChange={(e) => setNombre(e.target.value)} placeholder='Nombre*' className='cliente ing' required />
                            <input type='text' onChange={(e) => setApellido(e.target.value)} placeholder='Apellido*' className='cliente ing' required />
                        </label>
                        <label>
                            <p>Email</p>
                            <input type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Ingrese su Email*' className='input ing' required />
                        </label>
                        <label>
                            <p>Teléfono/Celular</p>
                            <input type='number' onChange={(e) => setCel(e.target.value)} placeholder='Teléfono/Celular*' className='input ing' required />
                        </label>
                        <button type='submit' className='buttonForm' onClick={()=>{handlerClick()}} >Enviar</button>
                    </form>
                </div>}
               {recibo && <div className='containerRecibo'>
                    <div className='datosRecibo'>
                        <h3>Tus Datos</h3>
                        <p>Nombre completo: {nombre} {apellido}</p>
                        <p>Email: {email}</p>
                        <p>Celular: {cel}</p>
                        <div>
                            <p>Codigo de compra:</p>
                            <p><strong>{idBuyer}</strong></p>
                        </div>
                        <div className='productoChecker'>
                            {compra.length > 0 &&
                                compra.map((Item, cart) => {
                                    return <div key={cart} className='containerProduct2'>
                                        <img src={Item.img1} />
                                        <p className='nameCart1'>{Item.name}</p>
                                        <p className='p1'>US$ {Item.price}</p>
                                        <p className='p1'>X{Item.cantidad}</p>           
                                </div>
                                })}
                        </div>
                        <div className='importe1'>
                                <h3>TOTAL:</h3>
                                <p><strong>US$ {total()}</strong></p>
                        </div>
                    </div>
                    <div className="inicioContainer">
                            <p onClick={()=>{inicio()}} ><Link to='/Home' className='linkForm' >Ir a Inicio</Link></p> 
                    </div>
                </div>}
                {form && <div>
                        <div className='productoCheck'>
                            <div className='productoChecker'>
                            {compra.length > 0 &&
                                compra.map((Item, cart) => {
                                    return <div key={cart} className='containerProduct1'>
                                        <img src={Item.img1} />
                                        <p className='nameCart1'>{Item.name}</p>
                                        <p className='p1'>US$ {Item.price}</p>
                                        <p className='p1'>X{Item.cantidad}</p>           
                                </div>
                                })}
                            </div>
                            <div className="containerRecibo">
                                <div className='subtotal'>
                                    <p>Subtotal:</p>
                                    <p>US$ {total()}</p>
                                </div>
                                <div className='envio'>
                                    <p>Costo de envio:</p>
                                    <p>US$ 0</p>
                                </div>
                                <div className='importe'>
                                    <h3>IMPORTE TOTAL:</h3>
                                    <p><strong>US$ {total()}</strong></p>
                                </div>
                            </div>
                            
                        </div>
                    </div>}
            </div>
        </>
    )
}

export default CheckOut;