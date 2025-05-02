import { Helmet} from 'react-helmet'

import './About.css'

import jaakko from '../assets/sonagraf/images/jaakko-saari.jpeg'
import sachiko from '../assets/sonagraf/images/Sachiko-Stenroos.jpg'

function About() {
    return(
        <article className="about-wrapper">
            <Helmet>
                <title>About - Sonagraf</title>
                <meta name="description" content="About - a pioneer in Real-Time CG, Virtual Production, and immersive visual engineering. Discover our background, focus, and core values."  />
                <meta property="og:site_name" content="SonaGraf"/>
                <link rel="canonical" href="https://www.sonagraf.com"/>
                <meta property="og:title" content="About Sonagraf - a pioneer in Real-Time CG, Virtual Production, and immersive visual engineering. Discover our background, focus, and core values."/>
                <meta property="og:image" content="https://www.sonagraf.com/assets/sonagraf/images/car-in-city.jpg" />
                <meta property="og:url" content="https://www.sonagraf.com/about"/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content="Pioneer in Real-Time CG, Photo-Realistic Environments and Virtual Production."/>
                <meta name="twitter:title" content="About Sonagraf- a pioneer in Real-Time CG, Virtual Production, and immersive visual engineering. Discover our background, focus, and core values."/>
                <meta name="twitter:image" content="https://www.sonagraf.com/assets/sonagraf/images/car-in-city.jpg"/>
                <meta name="twitter:url" content="https://www.sonagraf.com/about"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:description" content="About Sonagraf - a pioneer in Real-Time CG, Photo-Realistic Environments and Virtual Production."/>
            </Helmet>
            <h1>About Sonagraf</h1>
            <div className='about-text-container'>
                <h2>Background</h2>
                <p>
                    SonaGraf started as kabusiki-kaisha (Ltd.)(株式会社SonaGraf) in Japan at 2022, founded by award-winning CG artist Jaakko Saari. 
                    <br />
                    <br />
                    SonaGraf has worked with several high end brands such as Canon and Nikon, and provided training and services for large companies in Japan and world-wide.
                    <br />
                    <br />
                    We have since then transitioned away into a trade name SonaGraf, in order to be able to provide quality service that is even more cost effective, with extreme focus on quality.
                </p>
                <h2>Focus</h2>
                    <p>
                    SonaGraf focuses on non-game real-time CG production and training using Unreal as our main tool. Although we sometimes work on game related projects the work we do is mostly related to cinematics.
                    <br />
                    <br />
                    Our strength is providing quality at cost-effective price.
                    </p>
                <h2>Values</h2>
                <p>
                We strive to exceed customer expectations at every turn.
                <br />
                <br />
                We are forward thinking in our approach to CG creation, utilizing the latest technology such as Unreal Engine 5 with lumen and nanite support, Houdini and Substance Designer.
                <br />
                <br />
                We believe in achieving higher cost performance and faster iteration by full utilization these technologies.
                <br />
                <br />
                We offer a support support period for our clients even after delivery of service to ensure their all needs are met.
                </p>

            </div>
            <div className="info-container">
                <img src={jaakko} alt="Portrait of Jaakko Saari" width="500" height="750"/>
                <div>
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
                </div>
            </div>
            <div className="info-container">
                <img src={sachiko} alt="Portrait of Sachiko Stenroos" width="500" height="750"/>
                <div>
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
                </div>
            </div>
        </article> 
    )
    
}

export default About