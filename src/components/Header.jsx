import { Link } from "react-router-dom"

import './Header.css'

import sonagrafLogo from '../assets/sonagraf/images/sglogo_new.png'
import background from '../assets/sonagraf/vids/car_ad.mp4'

function Header() {
    return(
        <header>
            <nav>
                <Link to="/">Home</Link>
                <a href="https://www.sonagraf.com/blog">Blog</a>
                <Link to="about">About</Link>
                <a href="https://www.sonagraf.com/contact">Contact</a>
            </nav>
            <img className="logo" src={sonagrafLogo} alt="Sonagraf logo" width="600" height="115"/>
            <video className="video-bg" autoPlay muted loop>
                <source src={background} type="video/mp4"></source>
            </video>
        </header>
    )
}
export default Header