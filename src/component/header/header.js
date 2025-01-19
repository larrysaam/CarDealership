import './header.css'
import logo from '../../assets/logo2.png'
import { IoGlobeOutline } from "react-icons/io5";


const Header = ()=>{

    return(
        <nav className="navbar">
            <img
                src={logo}
                alt="logo" 
                id="logo"
            />

            <div className='location_div'>
                <IoGlobeOutline className='globe_logo' id='globe'/>
                <p>Yaounde, Cameroon</p>
            </div>
            
        </nav>
    )
}

export default Header