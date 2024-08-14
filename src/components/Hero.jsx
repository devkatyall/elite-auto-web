import '../assets/hero.css'
import Vector from '../assets/carservice.png'
export default function Hero(){
    return(
        <div className="hs">
            <div className='hs-2'>
                <img src={Vector} />
            </div>
            <div className='hs-1'>
                <h1>Greater Toronto Area’s Mobile Detailing Experts</h1>
                <div className='hs-line'>
                    <p>Professional Car Detailers servicing in the Durham Region and surrounding areas. Half a decade of car detailing expertise right at your door. 
</p>
                </div>
                <div className='hs-cta'>
                    <a href='tel:647-561-6777'>Give us a Call<i class="fa-solid fa-phone"></i></a>
                    <a href='#pricing'>View Pricing</a>
                </div>
            </div>
        </div>
    )
}