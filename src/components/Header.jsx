import { Link } from "react-router-dom"

import './Header.css'

function Header() {
    return(
        <header>
            <nav>
                <Link to="/">Home</Link>
                <Link to="blog">News</Link>
                <Link to="about-us">About Us</Link>
            </nav>
        </header>
    )
}
export default Header