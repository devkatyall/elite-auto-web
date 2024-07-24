import WebContext from '../ContextProvider'
import '../assets/slider.css'
import { useContext } from 'react'
import Stars from './Stars';

export default function Slider(){

    const reviews = useContext(WebContext);

    return(
        <div className='slider-title'>
        <h2 className='slider-title h2'>Happy Clients!</h2>
        <p className='slider-title p'>We believe our clients are our only brand advocates. that's why we make sure that they are 100% satisfied. See what they have to say for us!</p>
            <div className="slider-nav">
                <div className='slider'>
                    {reviews.map((e)=>(
                        <div className='review-card'>
                            <div className="stars">
                                <Stars stars={e.stars} />
                            </div>
                            <div className="infos">
                                <p className="date-time">
                                    {e.date}
                                </p>
                                <p className="description">
                                    {e.description}
                                </p>
                            </div>
                            <div className="author">
                                — {e.name}
                            </div>
                        </div>
                    )
                    )}
                </div>
                
            </div>
        </div>
    )
}