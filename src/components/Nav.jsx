import React, { useEffect, useState } from 'react'
import '../styles/Nav.css'


const Nav = () => {
    const [show,handleShow] = useState(false);

    useEffect( () => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 150){
                handleShow(true);
            }
            else handleShow(false);
        });
        return () => {
            window.removeEventListener('scroll');
        };
    }, [])
    return(
        <>
        <div className={`nav ${show && 'nav_black'}`}>
                <img className="logo" src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=49" alt="Netflix Logo"/>
                <img className='avatar' src="https://ih0.redbubble.net/image.618427277.3222/flat,1000x1000,075,f.u2.jpg" alt="User"/>
        </div>
        </>
    );
}

export default Nav;