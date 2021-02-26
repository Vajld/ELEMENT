import React from 'react'
import photo1 from '../assets/img/photo1.jpg'
import photo2 from '../assets/img/photo2.jpg'

const Header = () => {
    return (
        <div className='header'>
            <img className="photo1" src={photo1} alt="white" />
            <img className="photo2" src={photo2} alt="black" />
        </div>
    )   
}

export default Header;