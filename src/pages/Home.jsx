import '../App.css'
import './Home.css'

import exampleImage from '../assets/example-image.jpg'

const logoModules = import.meta.glob('../assets/sonagraf/logos/*.{png,jpg,jpeg,svg}', { eager: true });
const logos = Object.entries(logoModules).map(([path, module]) => {
    const fileName = path.split('/').pop();
    return { name: fileName, src: module.default };
});

function Home() {
    return (
        <div className='home-page-content'>
            <p className="description">SonaGraf is a visual engineering company.<br></br>
            We craft memorable <span className='highlight'>interactive content</span> and <span className='highlight'>immersive visuals</span>.</p>
            <div className='image-section'>
                <div className='image-container right'>
                    <img src={exampleImage}/>
                    <p>Image description</p>
                </div>
                <div className='image-container'>
                    <img src={exampleImage} />
                    <p>Image description</p>
                </div>
                <div className='image-container right'>
                    <img src={exampleImage} />
                    <p>Image description</p>
                </div>
                <div className='image-container'>
                    <img src={exampleImage} />
                    <p>Image description</p>
                </div>
            </div>
            <div className='logo-wrapper'>
                <h2 >Trusted by:</h2>
                {logos.map(logo => (
                    <img key={logo.name} src={logo.src} alt={logo.name} />
                ))}
            </div>
        </div>
    )
}

export default Home