import face from '../img/facebook.png';
import twitter from '../img/gorjeo.png';
import insta from '../img/instagram.png';
import youtube from '../img/youtube.png';
import '../css/footer.css';

function Footer(){
    return(
        <>
            <hr />
            <div className='containerFooter'>
                <div className='containerLink'>
                    <div>
                        <h3>Productos y Servicios</h3>
                        <a href="#notFound">Smartphones</a>
                        <a href="#notFound">Tablets</a>
                        <a href="#notFound">Audio</a>
                        <a href="#notFound">Watches</a>
                        <a href="#notFound">Smart  Switch</a>
                        <a href="#notFound">TVs</a>
                    </div>
                    <div>
                        <h3>Shop</h3>
                        <a href="#notFound">Promociones</a>
                        <a href="#notFound">Students</a>
                        <a href="#notFound">Explorar</a>
                    </div>
                    <div>
                        <h3>Soporte</h3>
                        <a href="#notFound">Chat Online</a>
                        <a href="#notFound">Email del Soporte</a>
                        <a href="#notFound">Sugerencias al director</a>
                        <a href="#notFound">Atencion telefónica</a>
                        <a href="#notFound">Soporte de Samsung</a>
                        <a href="#notFound">Buscar Locales</a>
                    </div>
                    <div>
                        <h3>Sobre nosotros</h3>
                        <a href="#notFound">Información de la compañía</a>
                        <a href="#notFound">Area de negocios</a>
                        <a href="#notFound">Identidad de marca</a>
                        <a href="#notFound">Noticias</a>
                        <a href="#notFound">Etica</a>
                        <a href="#notFound">Diseño de Samsung</a>
                    </div>
                    <div>
                        <h3>Sustentabilidad</h3>
                        <a href="#notFound">Resumen</a>
                        <a href="#notFound">Medio ambiente</a>
                        <a href="#notFound">Ciudadanía corporativa</a>
                        <a href="#notFound">Responsabilidad digital</a>
                        <a href="#notFound">Seguridad y privacidad</a>
                        <a href="#notFound">Accesibilidad</a>
                    </div>
                </div>
                <hr />
                <div className='containerEtc'>
                    <div className='legales'>
                        <strong><p>Idioma: Español</p></strong>
                        <p>|</p>
                        <a href="#notFound">Privacidad</a>
                        <a href="#notFound">Legales</a>
                        <a href="#notFound">Mapa del Sitio</a>
                    </div>
                    <div className='paginas'>
                            <p>¡Manténgase informado!</p>
                            <img src={face} />
                            <img src={twitter} />
                            <img src={insta} />
                            <img src={youtube} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer;