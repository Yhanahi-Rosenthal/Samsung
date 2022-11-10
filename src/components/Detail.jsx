import React, { useContext, useState } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import '../css/detail.css';
import { CartContext } from "./CartContext";
import ItemCount from "./ItemCount";
import Toastify from 'toastify-js'
import "toastify-js/src/toastify.css"

function Detail({AItem, setLoader}){

    const{isInCart, addItem, cantidad} = useContext(CartContext)

    const onAdd = () =>{
        isInCart(AItem.id)
        addItem(AItem, cantidad)
    }

    const [nav, setNav] = useState("containerVar")
    
    
    window.addEventListener('scroll', ()=>{
        if(window.pageYOffset > 97){
            setNav('containerVarScroll')
        }else{
            setNav('containerVar')
        }
    })


    const ad = ()=>{
        Toastify({
            text: `Agregaste ${cantidad} ${AItem.name} a tu carrito`,
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: false,
            gravity: "bottom", // `top` or `bottom`
            position: "left", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "white",
              boxShadow: "#171717d1 0 0 0.6rem",
              color: "black",
              fontWeight: "600",
            },
            onClick: function(){} // Callback after click
          }).showToast();
    }

    

    return(
        <>
            <div onLoad={()=>{setLoader(false)}}>
                <div className='semiVarBackground'>
                <div className={nav}>
                    <div className="semiVar">
                        <p className="nameCelVar">{AItem.name}</p>
                        <p className="namePriceVar">US$ {AItem.price}</p>
                    </div>
                    <button className="nameButtonVar" 
                    onClick={()=>{
                        onAdd()
                        ad()    
                    }}
                    >COMPRAR</button>
                </div>
                </div>
              
                <div className="containerCarru">
                    <div className="subContainerCarru">
                        <Carousel showStatus={false} showIndicators={false}>
                            <div>
                                <img src={AItem.img1} />
                            </div>
                            <div>
                                <img src={AItem.img2} />
                            </div>
                            <div>
                                <img src={AItem.img3} />
                            </div>
                            <div>
                                <img src={AItem.img4} />
                            </div>
                        </Carousel>
                    </div>
                    <div className="DetalleProduct">
                        <h2 className="DetalleProductName">{AItem.name}</h2>
                        <div>
                            <div className="DetalleProductPlanRecambio">
                                <h3 className="DetalleProductPlan">Plan Recambio</h3>
                                <p>
                                    Entregá cualquier dispositivo, no importa la marca,
                                    incluso si está roto y <strong>te descontamos USD 50</strong> en 
                                    la compra de tu producto. El descuento adicional se reflejará
                                    directamente en el valor del producto en el carrito, luego de efectuada la
                                    compra nos pondremos en contacto para que nos entregues tu antiguo dispositivo.
                                </p>
                            </div>                           
                            <div className="DetalleProductColores">
                                <p>Colores</p>
                                <div className="DetalleProductColor">
                                    <p>{AItem.color}</p>
                                </div>
                            </div>
                            <div className="DetalleProductPlanRecambio2">
                                <p>Plan Recambio</p>
                                <div  className="DetalleProductNo">
                                    <p>No</p>
                                </div>
                                
                            </div>
                            <div>
                                <div className="containerCountDetail">
                                    <h3 className="precioDelProductoH3">PRECIO DEL PRODUCTO</h3>  
                                    <ItemCount />
                                </div>
                                <p className="precioDelProductoPrice">US$ {AItem.price}</p>
                            </div>
                            <button className="DetalleProductoComprar" 
                            onClick={()=>{
                                onAdd()
                                ad()
                            }}
                            >COMPRAR</button>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="containerKter">
                        {AItem.kter1 &&<div>
                            <img src={AItem?.kter1} className='kter'/>
                        </div>}
                        {AItem.kter2 && <div>
                            <img src={AItem?.kter2} className='kter'/>
                        </div>}
                        {AItem.kter3 && <div>
                            <img src={AItem?.kter3} className='kter'/>
                        </div>}
                        {AItem.kter4 && <div>
                            <img src={AItem?.kter4} className='kter'/>
                        </div>}
                    </div>
                    {AItem.subti1 && <div className="containerSubpor1">
                        <h1>{AItem.subti1}</h1>
                        <img src={AItem.subpor1} />
                        <p>{AItem.desc1}</p>
                    </div>}
                    {AItem.subti2 && <div className="containerSubpor2">
                        <h1>{AItem.subti2}</h1>
                        <img src={AItem.subpor2} />
                        <p>{AItem.desc2}</p>
                    </div>}
                    {AItem.im1 && <div className="containertSub">
                        <div className="sub1">
                            <img src={AItem.im1} />
                            <div>
                                <h3>{AItem.subsubtit1}</h3>
                                <p>{AItem.descsubsub1}</p>
                            </div>                          
                        </div>
                        <div className="sub2">
                            <img src={AItem.im2} />
                            <div>
                                <h3>{AItem.subsubtit2}</h3>
                                <p>{AItem.descsubsub2}</p>
                            </div>                         
                        </div>
                    </div>}
                </div>
            </div>
        </>
    )
}

export default Detail;