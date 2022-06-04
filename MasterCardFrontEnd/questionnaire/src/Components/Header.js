import React from 'react'
import "../CSS/Header.css"
import mastercardImg from '../Images/mc-logo-52.svg'

const Header = () =>{

    return(
        <div className='Header'>
            <div className='img'>
                <img src={mastercardImg}  className="logo" alt='logo'/>
            </div>
            <h1 className='Title'>MasterCard Qustionnaire</h1>
        </div>
    )
}

export default Header;