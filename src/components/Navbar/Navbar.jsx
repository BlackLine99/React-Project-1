import React from 'react';
import n from"./Navbar.module.css"

// let n = {
//     'nav':'Navbar_nav__2O6D8'
//     'item':'Navbar_item__37kUl'
// }

const Navbar = () => {
    return (<nav className={n.nav}>
        <div className={n.item}>
            <a>Profile</a>
        </div>
        <div className={`${n.item} ${n.messages}`}>
            <a>Messages</a>
        </div>
        <div className={n.item}>
            <a>News</a>
        </div>
        <div className={n.item}>
            <a>Music</a>
        </div>
        <div className={n.item}>
            <a>Settings</a>
        </div>
    </nav>
    );
}
export default Navbar;