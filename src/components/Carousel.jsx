import portada from '../img/portada1.png';
import portada1 from '../img/portada2.png';
import portada2 from '../img/portada3.png';
import portada3 from '../img/portada4.png';
import '../css/home.css';

function Carousel(){

    return(
    <div className="contenedorCarousel">  
        <div className="centrarCarousel">
               
        <div id="carouselExampleIndicators" class="carousel slide" style={{width: "100%"}} data-bs-ride="true" pause='hover'>
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active" data-bs-interval="100000">
                    <div className='subtitles'>
                        <strong><p className='week'>Samsung Week</p></strong>
                        <p className='info'>Esta llegando muy pronto!</p>
                        <button>Más información</button>
                    </div>
                <img src={portada} class="d-block w-100 imgP" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="100000">
                    <div className='subtitles1'>
                        <strong><p className='week1'>The Freestyle</p></strong>
                        <p className='info1'>Beneficíos de lanzamiento.<br /> Llevate unos Galaxy Buds2
                            de regalo con tu compra. <br /> Hasta 12 cuiotas sin recargo y envío gratis.
                        </p>
                        <button>Más información</button>
                    </div>
                <img src={portada1} class="d-block w-100 imgP" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="100000">
                    <strong><p className="wareable1">Lanzamiento de compra</p></strong>
                    <button className='masInfo1'>Más información</button>
                    <img src={portada2} class="d-block w-100 imgP" alt="..." />
                </div>
                <div class="carousel-item" data-bs-interval="100000">
                    <strong><p className="wareable2">Lanzamiento de compra</p></strong>                  
                    <button className='masInfo2'>Más información</button>
                    <img src={portada3} class="d-block w-100 imgP" alt="..." />
                </div>
            </div>
            <button class="carousel-control-prev" style={{width: "5%"}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span class="carousel-control-prev-icon btn btn-dark" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next btn-sm" style={{width: "5%"}} type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span class="carousel-control-next-icon btn btn-dark" aria-hidden="true" ></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
        </div> 
    </div> 
    )
}

export default Carousel;