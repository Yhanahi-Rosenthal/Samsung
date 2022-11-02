import '../css/checkout.css';

function CheckOut(){
    return(
        <>
            <div className="containerCheckOut">
                <div className='containerForm'>
                    <h3>DATOS DE FACTURACIÓN</h3>
                    <hr />
                    <form className='form'>
                        <label>
                            <div>
                                <p>Cliente</p>
                            </div>
                            <input type='text' placeholder='Nombre*' className='cliente ing' required />
                            <input type='text' placeholder='Apellido*' className='cliente ing' required />
                        </label>
                        <label>
                            <p>Email</p>
                            <input type='email' placeholder='Ingrese su Email*' className='input ing' required />
                        </label>
                        <label>
                            <p>Teléfono/Celular</p>
                            <input type='number' placeholder='Teléfono/Celular*' className='input ing' required />
                        </label>
                        <button type='submit' className='buttonForm' >Siguiente</button>
                    </form>
                </div>
                <div>
                        <div>
                            <div className='productoCheck'>
                                <img />
                                <p>a</p>
                                <p>b</p>
                                <p>c</p>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default CheckOut;