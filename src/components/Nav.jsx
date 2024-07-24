import '../assets/nav.css'
import Logo from '../assets/logo.png'

export default function Nav(){
    return(
        <div className='nav-can'>
            <div className='nc1'>
                <div className='nl'>
                    <img src={Logo} />
                </div>
                <a className="call ncta" href="tel:647-561-6777">
                    Call Now
                    <div className='dot'></div>
                </a>
            </div>
        </div>
    )
}