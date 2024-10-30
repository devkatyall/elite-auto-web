import { Link } from 'react-router-dom'
import '../assets/card.css'
import logo from '../assets/logo.png'

export default function Footer(){
    return(
        <div  className='footer'>
                <img src={logo} />
                <p>Ajax, Durham Region, Ontario, Canada</p>
                <Link to='/policy' >Privacy Policy</Link>
        </div>
    )
}