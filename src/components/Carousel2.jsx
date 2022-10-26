import portadita1 from '../img/portadita1.jpg';
import portadita2 from '../img/portadita2.png';
import portadita3 from '../img/portadita3.png';
import portadita4 from '../img/portadita4.png';
import '../css/carousel2.css';
import { Link } from "react-router-dom";

function Carousel2(){
    
    const portada = [
        {
            img: portadita1,
            descripcion: 'Smartphone`s',
            alt: 'Iphone',
            link:'/category/Phone'
        },
        {
            img: portadita2,
            descripcion: 'SmartWatch',
            alt:'SmartWatch',
            link:'/category/Wareables'
        },
        {
            img: portadita3,
            descripcion: 'Buds Pro',
            alt:'Buds Pro',
            link:'/category/Wareables'
        },
        {
            img: portadita4,
            descripcion: 'Smart TV',
            alt:'Smart TV',
            link:'/category/TV-s'
        },
    ]


    return(
        <>
        <div>
            <div className="carouselContainer">
                <div className="carouselSubContainer">
                    {portada && portada.map((por, index) =>(
                      <Link to={por.link} className='link2' key={index}>
                        <div className="portaditas">
                        <p>{por.descripcion}</p>
                          <img src={por.img} alt={por.alt} className='imgPortadita' />                        
                        </div>
                      </Link>
                    ))}
                </div>               
            </div>          
        </div>
        </>
    )
}

export default Carousel2;