import { Helmet } from 'react-helmet';

import '../App.css';
import './Home.css';


import LazyImage from '../components/LazyImage';


import car from '../assets/sonagraf/images/car-in-city.jpg'
import volcanic from '../assets/sonagraf/images/jaakko-saari-volcanic.jpg';
import trainStation from '../assets/sonagraf/images/jaakko-saari-yoyogi-update.jpg';
import textures from '../assets/sonagraf/images/jaakko-saari-bishamon-redshift.jpg';
import metahuman from '../assets/sonagraf/images/jaakko-saari-unrealeditor-9hpbrheira.jpg';
import training from '../assets/sonagraf/images/DSC05932-scaled.jpeg';

const logoModules = import.meta.glob('../assets/sonagraf/logos/*.{png,jpg,jpeg,svg}', { eager: true });
const logos = Object.entries(logoModules).map(([path, module]) => {
    const fileName = path.split('/').pop();
    return { name: fileName, src: module.default, width: "300", height: "78" };
});

function Home() {
    return (
        <div className='home-page-content'>
            <Helmet>
                <title>Sonagraf - Real-Time CG, Photo-Realistic Environments</title>
                <meta name="description" content="Pioneer in Real-Time CG, Photo-Realistic Environments and Virtual Production." />
                <meta property="og:site_name" content="SonaGraf"/>
                <link rel="canonical" href="https://www.sonagraf.com"/>
                <meta property="og:title" content="SonaGraf -  Real-Time CG, Photo-Realistic Environments"/>
                <meta property="og:image" content="https://www.sonagraf.com/assets/sonagraf/images/car-in-city.jpg" />
                <meta property="og:url" content="https://www.sonagraf.com"/>
                <meta property="og:type" content="website"/>
                <meta property="og:description" content="Pioneer in Real-Time CG, Photo-Realistic Environments and Virtual Production."/>
                <meta name="twitter:title" content="SonaGraf -  Real-Time CG, Photo-Realistic Environments"/>
                <meta name="twitter:image" content="https://www.sonagraf.com/assets/sonagraf/images/car-in-city.jpg"/>
                <meta name="twitter:url" content="https://www.sonagraf.com"/>
                <meta name="twitter:card" content="summary"/>
                <meta name="twitter:description" content="Pioneer in Real-Time CG, Photo-Realistic Environments and Virtual Production."/>
            </Helmet>
            <h1 className="description">
                SonaGraf is a visual engineering company.<br></br>
            </h1>
            <p className='description'>
                We craft memorable <span className='highlight'>interactive content</span> and <span className='highlight'>immersive visuals.</span>.
            </p>
            <div className='image-section'>
                <div className='image-container left'>
                    <LazyImage src={car} alt='Image of a sport utility vehicle' width="400" height="250"/>
                    <p>Realistic <span className='highlight'>automotive</span> rendering.</p>
                </div>
                <div className='image-container fullwidth'>
                    <LazyImage src={volcanic} alt='Sceneric landscape of a volcanic area' width="800" height="280"/>
                    <p>Immersive 360° <span className='highlight'>virtual worlds</span>.</p>
                </div>
                <div className='image-container right'>
                    <LazyImage src={trainStation} alt='Realistic digital redition of Yoyogi train station' width="350" height="250"/>
                    <p>Realistic <span className='highlight'>urban landscapes</span>.</p>
                </div>
                <div className='image-container left'>
                    <LazyImage src={textures} alt='Abstract digital materials' width="400" height="250"/>
                    <p>Tactile <span className='highlight'>digital materials</span>.</p>
                </div>
                <div className='image-container right'>
                    <LazyImage src={metahuman} alt='Realistic human character' width="400" height="250"/>
                    <p>Photo realistic <span className='highlight'>custom metahumans</span>.</p>
                </div>
                <div className='image-container left'>
                    <LazyImage src={training} alt='Jaakko Saari teaching his client' width="400" height="250"/>
                    <p>We train <span className='highlight'>people</span>.</p>
                </div>
                <div className='list-wrapper'>
                    <p className='highlight'>Our customers are:</p>
                    <p className='highlight'>We provide:</p>
                    <ul>
                        <li>Advertising Agencies</li>
                        <li>Medical Device Companies</li>
                        <li>Architecture Companies</li>
                        <li>Aerospace</li>
                        <li>Automotive companies</li>
                        <li>Universities</li>
                    </ul>
                    <ul>
                        <li>Customized Curriculum</li>
                        <li>Onsite training</li>
                        <li>Training in our offices</li>
                        <li>Seminars</li>
                        <li>Emergency project support</li>
                        <li>1:1 Training</li>
                    </ul>
                </div>
            </div>
            <div className='logo-wrapper'>
                <h2>Trusted by:</h2>
                {logos.map(logo => (
                    <img key={logo.name} src={logo.src} alt={logo.name} width={logo.width} height={logo.height}/>
                ))}
            </div>
        </div>
    );
}

export default Home;