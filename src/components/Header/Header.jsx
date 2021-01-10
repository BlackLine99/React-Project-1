import React from 'react';
import h from './Header.module.css'

// let h ={
//     'header':'Header_header__1MYET'
//     'img':'Header_img__3nRsX'
// }



const Header = () =>{
    return(
        <header className={h.header}>
        <img className={h.img} src='https://cdn.logo.com/hotlink-ok/logo-social.png'></img>
    </header>
    );
}
export default Header;