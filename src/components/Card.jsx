import '../assets/card.css'
import { useContext } from 'react'
import WebContext from '../ContextProvider'


export default function Card(){

	const services = useContext(WebContext)

    return(
		<div id='pricing' className='container'> 
			<div className='price-title'>
				<h1>Our Services</h1>
				<p>We make sure that you get the best in the market, Not just the service but also the price! Our car detailing prices are competitive and total WORTH IT!</p>
			</div>
		<div className="services-grid">
			{services.map((e) => (
				e.title ?
				<div class="card">
					<div class="header">
						<span class="title">{e.title}</span>
						<span class="price">${e.priceReg}</span>
					</div>
					<p class="desc">For Trucks/Mid Size + ${e.priceBig - e.priceReg}</p>
					<ul class="lists">
						{e.info && e.info.map((i)=>(
							<li class="list">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
								</svg>
								<span>{i}</span>
							</li>
							)
							)}
					</ul>
					<a type='button' href='tel:647-561-6777' class="action"  >Get Started</a>
				</div>  : null
			))}
			{services.map((e) => (
				e.titleAdd ?
				<div class="card">
					<div class="header">
						<span class="title">{e.titleAdd}</span>
						<span class="price">$0</span>
					</div>
					<p class="desc">Add on Services are Charged as per ask</p>
					<ul class="lists">
						{e.infoAdd && e.infoAdd.map((i)=>(
							<li class="list">
								<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
										<path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"></path>
								</svg>
								<span>{i}</span>
							</li>
							)
							)}
					</ul>
					<a type='button' href='tel:647-561-6777' class="action"  >Get Started</a>
				</div>  : null
			))}

		</div>
		</div>
    )
}



