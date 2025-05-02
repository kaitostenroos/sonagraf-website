import './AddBanner.css'

import uCrew from '../assets/sonagraf/promotions/u-crew.jpg'

function AddBanner() {
    return(
        <div className='banner-container'>
            <p className='banner-description'>Promotion</p>
            <img className='banner' src={uCrew} alt="Promotion for u-crew" width="400" height="200"/>
        </div>
    );
}

export default AddBanner