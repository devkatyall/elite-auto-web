import '../assets/nav.css'
import Logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

export default function Nav(){
    return(
        <div className='nav-can'>
            <div className='nc1'>
                <div className='nl'>
                    <Link to='/'>
                        <img src={Logo} />
                    </Link>
                </div>
                <a className="call ncta" href="tel:647-561-6777">
                    Call Now
                    <div className='dot'></div>
                </a>
            </div>
        </div>
    )
}