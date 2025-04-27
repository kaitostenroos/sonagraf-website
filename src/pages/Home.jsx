import '../App.css';
import './Home.css';
import LazyImage from '../components/LazyImage';

import waterDropImg from '../assets/sonagraf/images/waterdrop.jpg';
import volcanic from '../assets/sonagraf/images/jaakko-saari-volcanic.jpg';
import trainStation from '../assets/sonagraf/images/jaakko-saari-yoyogi-update.jpg';
import textures from '../assets/sonagraf/images/jaakko-saari-bishamon-redshift.jpg';
import metahuman from '../assets/sonagraf/images/jaakko-saari-unrealeditor-9hpbrheira.jpg';
import training from '../assets/sonagraf/images/DSC05932-scaled.jpeg';

const logoModules = import.meta.glob('../assets/sonagraf/logos/*.{png,jpg,jpeg,svg}', { eager: true });
const logos = Object.entries(logoModules).map(([path, module]) => {
    const fileName = path.split('/').pop();
    return { name: fileName, src: module.default };
});

function Home() {
    return (
        <div className='home-page-content'>
            <p className="description">
                SonaGraf is a visual engineering company.<br></br>
                We craft memorable <span className='highlight'>interactive content</span> and <span className='highlight'>immersive visuals.</span>.
            </p>
            <div className='image-section'>
                <div className='image-container right'>
                    <LazyImage src={waterDropImg} alt='Image of a sport utility vehicle' />
                    <p>Realistic <span className='highlight'>automotive</span> rendering.</p>
                </div>
                <div className='image-container fullwidth'>
                    <LazyImage src={volcanic} alt='Sceneric landscape of a volcanic area' />
                    <p>Immersive 360° <span className='highlight'>virtual worlds</span>.</p>
                </div>
                <div className='image-container'>
                    <LazyImage src={trainStation} alt='Realistic digital redition of Yoyogi train station' />
                    <p>Realistic <span className='highlight'>urban landscapes</span>.</p>
                </div>
                <div className='image-container right'>
                    <LazyImage src={textures} alt='Abstract digital materials' />
                    <p>Tactile <span className='highlight'>digital materials</span>.</p>
                </div>
                <div className='image-container fullwidth'>
                    <LazyImage src={metahuman} alt='Realistic human character' />
                    <p>Photo realistic <span className='highlight'>custom metahumans</span>.</p>
                </div>
                <div className='image-container'>
                    <LazyImage src={training} alt='Jaakko Saari teaching his client' />
                    <p>We train <span className='highlight'>people</span></p>
                </div>
                <div className='list-wrapper'>
                    <p>Our customers are:</p>
                    <p>We provide:</p>
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
                    <img key={logo.name} src={logo.src} alt={logo.name} />
                ))}
            </div>
        </div>
    );
}

export default Home;