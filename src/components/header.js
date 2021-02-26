import React from 'react'
import photo1 from '../assets/img/photo1.jpg'
import photo2 from '../assets/img/photo2.jpg'

const Header = () => {
    return (
        <div className='header'>
            <img className='photo1' src={photo1} alt="stol" />
            <img className='photo2' src={photo2} alt="stol" />
        </div>
    )
}

export default Header;
