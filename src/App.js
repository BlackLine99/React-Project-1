import React from 'react';
import './App.css';
import './components/Header/Header.module.css';
import './components/Profile/Profile.module.css';
import './components/Navbar/Navbar.module.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';



const App = () => {
    return (
        <div className='app-wrapper'>
           <Header />
            <Navbar />
            <Profile />
        </div>
    );
}





export default App;
