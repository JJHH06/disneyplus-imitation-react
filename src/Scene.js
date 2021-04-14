import React from 'react';
import './style.scss';
import NavBar from './components/NavBar'
import SimpleSlider from './components/BannerSlider'


function Scene(){

    return (
        <div>
            <NavBar/>
            <main>
            <SimpleSlider/>
            </main>
            
        </div>

        
    );
}

export default Scene;