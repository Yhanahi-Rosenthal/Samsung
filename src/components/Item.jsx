import { useState } from 'react';
import { Link } from 'react-router-dom';
import LoadImg from './LoadImg';
import '../css/item.css';

function Item({product, setLoader}){

    const [images, setImages] = useState(product.img1)
    const[loadimg, setLoadimg] = useState(true)

    return(
        <>
            <div className='itemConainer' onLoad={()=>{setLoader(false)}}>
                <div className='conainterImgItem' onLoad={()=>{setLoadimg(false)}}>
                    
                    <img src={images} onMouseEnter={() =>{setImages(product.img2)}} onMouseOut={() =>{setImages(product.img1)}} className='imgItem' />
                    {loadimg && <LoadImg />}
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
