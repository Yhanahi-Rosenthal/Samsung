import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/item.css';

function Item({product}){

    const [images, setImages] = useState(product.img1)

    return(
        <>
            <div className='itemConainer'>
                <div className='conainterImgItem'>
                    <img src={images} onMouseEnter={() =>{setImages(product.img2)}} onMouseOut={() =>{setImages(product.img1)}} className='imgItem'/>
                    <p>{product.name}</p>
                </div>
                <div className="colorContainer">
                    <p>Color: {product.color}</p>
                    <div className="color"><div className='filling' style={{background:`${product.color}`}}></div></div>
                </div>
                <div className="itemDescription">
                    <div className="infoItem">
                        <ul>
                            <li>{product.descripcion1}</li>
                            <li>{product.descripcion2}</li>
                            <li>{product.descripcion3}</li>
                          
                        </ul>
                    </div>
                    <button><Link to={"/Detail/" + product.id} className='linkButtom'>Más información</Link></button>
                </div>               
            </div>
        </>
    )
}

export default Item;
