import '../assets/hero.css'
import Vector from '../assets/carservice.png'
export default function Hero(){
    return(
        <div className="hs">
            <div className='hs-2'>
                <img src={Vector} />
            </div>
            <div className='hs-1'>
                <h1>Oshawa's Mobile Detailing Experts</h1>
                <div className='hs-line'>
                    <p>Experience the difference of a professional car detail without leaving your driveway, transforming your car with meticulous cleaning and a 100% satisfaction guarantee.</p>
                </div>
                <div className='hs-cta'>
                    <a href='tel:647-561-6777'>Give us a Call<i class="fa-solid fa-phone"></i></a>
                    <a href='#pricing'>View Pricing</a>
                </div>
            </div>
        </div>
    )
}