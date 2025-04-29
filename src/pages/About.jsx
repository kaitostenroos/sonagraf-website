import './About.css'

import jaakko from '../assets/sonagraf/images/jaakko-saari.jpeg'
import sachiko from '../assets/sonagraf/images/Sachiko-Stenroos.jpg'

function About() {
    return(
        <div className="about-wrapper">
            <h1>About Us</h1>
            <div className="info-container">
                <img src={jaakko} alt="Portrait of Jaakko Saari" />
                <article>
                    <h2>Founder</h2>
                    <p>
                    Jaakko Saari is a Project Associate Professor at Digital Hollywood University in Tokyo and CG lead with over a decade worth of experience.
                    <br />
                    <br />
                    He has worked at several large commercial advertisements and projects as a lead artist, utilizing real-time CG and technologies such as volumetric video and virtual production. He has also provided training for several Fortune 500 companies, elevating their projects to the next level.
                    <br />
                    <br />
                    He is also formally trained photographer, a graduate from New York Institute of Photography and has held several exhibitions in Japan.
                    <br />
                    <br />
                    He is fluent in Japanese.
                    </p>
                </article>
            </div>
            <div className="info-container">
                <img src={sachiko} alt="Portrait of Jaakko Saari" />
                <article>
                    <h2>Manager</h2>
                    <p>
                    Sachiko Stenroos is a writer and coordinator and has written articles to several magazines on lifestyle and interior design. She has also strong background as translator.
                    <br />
                    <br />
                    She lives in Finland and is in charge of SonaGraf office in Finland. 
                    <br />
                    <br />
                    As native Japanese she is also in charge of localization and quality control of our localization of VR/AR apps. 
                    </p>
                </article>
            </div>
        </div> 
    )
    
}

export default About