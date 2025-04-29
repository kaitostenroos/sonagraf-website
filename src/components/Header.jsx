import { Link } from "react-router-dom"

import './Header.css'

import background from '../assets/sonagraf/vids/car_ad.mp4'

function Header() {
    return(
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="blog">News</Link>
                <Link to="about-us">About Us</Link>
            </nav>
            <video className="video-bg" autoPlay muted loop>
                <source src={background} type="video/mp4"></source>
            </video>
        </header>
    )
}
export default Header