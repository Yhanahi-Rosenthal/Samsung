import { useState } from 'react';
import '../css/home.css';
import Carousel from './Carousel';
import Carousel2 from './Carousel2';
import Loading from './Loading';


function Home() {

    const[loader, setLoader] = useState(true)



    return(
        <>
            {loader && <Loading />}
            <div className='containerHome' onLoad={()=>{setLoader(false)}}>
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