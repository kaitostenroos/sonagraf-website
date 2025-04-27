import '../App.css'
import './Home.css'

import exampleImage from '../assets/example-image.jpg'

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
        </div>
    )
}

export default Home