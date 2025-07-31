import './Footer.css'

function Footer() {
    return(
        <footer>
            <div className='address-container'>
                <p>
                    Street Address: <br /> 
                    <br />
                    Blue Avenue 12F <br />
                    Nishi-ku, Yokohama-shi <br />
                    Kanagawa 220-0012 <br />
                    Japan
                </p>
                <p className='quote'>
                    "We think human is the most important element.
                    If you take good care of your employees,
                    they take good care of your clients."
                </p>
            </div>
            <div className='bottom-row'>
                <p>All rights reserved. © SonaGraf</p>
            </div>
        </footer>
    );
}

export default Footer