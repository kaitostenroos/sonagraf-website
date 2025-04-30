import { Link } from "react-router-dom"

import './Header.css'

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
            <video className="video-bg" autoPlay muted loop>
                <source src={background} type="video/mp4"></source>
            </video>
        </header>
    )
}
export default Header