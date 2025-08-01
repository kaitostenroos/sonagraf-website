import './Footer.css'

function Footer() {
    return(
        <footer>
            <div className='address-container'>
                <p>
                    Street Address: <br /> 
                     <br />
                    Terayama-cyo 761-201, Midori-ku, Yokohama <br />
                    Kanagawa 226-0013 <br />
                    Japan <br />
                </p>
                <p className='quote'>
                    "We think human is the most important element.
                    If you take good care of your employees,
                    they take good care of your clients."
                </p>
            </div>
            <div className='bottom-row'>
                <p>All rights reserved. © SonaGraf</p>
                <a href="/about#contacts">Contact</a>
            </div>
        </footer>
    );
}

export default Footer