import '../css/home.css';
import Carousel from './Carousel';
import Carousel2 from './Carousel2';


function Home() {
    return(
        <>
            <div className='containerHome'>
                    <Carousel />
                <div>
                    <h2 className='subtituloHome'>Destacados del mes</h2>
                    <Carousel2 />
                </div>
            </div>
        </>
    )
}    
export default Home;