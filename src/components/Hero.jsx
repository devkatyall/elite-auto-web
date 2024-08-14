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
                    <p>Professional Car Detailers servicing the Durham Region and surrounding areas. Half a decade of car detailing expertise right at your door, at Elite Auto Aesthetics we go above the standard to ensure your vehicle is left in pristine condition but most importantly we value our clients’ experience with us. 
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