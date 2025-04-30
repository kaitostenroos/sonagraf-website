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
                <p>Copyright © 2025 SonaGraf Co., Ltd</p>
                <div className='links'>
                    <a href="https://www.sonagraf.com/contact">Contact</a>
                    <a href="https://www.sonagraf.com/new-page">Privacy Policy</a>
                    <a href="https://www.sonagraf.com/new-page-1">Terms and Conditions</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer