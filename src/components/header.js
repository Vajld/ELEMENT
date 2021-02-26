import React from 'react'
import photo1 from '../assets/photo1.jpg'
import photo2 from '../assets/photo2.jpg'
const Header = () => {
    return (
        <div className='header'>
            <img classname='photo1' src={photo1} />
            <img className='photo2' src={photo2} />
        </div>
    )
}

export default Header;
