import React from 'react';
import './style.scss';
import NavBar from './components/NavBar';
import BannerSlider from './components/BannerSlider';
import CategoryDivision from './components/CategoryDivision/CategoryDivision.js';
import SimpleSlider from './components/ContentChooser/SimpleSlider';


function Scene(){

    return (
        <div>
            <NavBar/>
            <main>
            <BannerSlider/>
            <CategoryDivision/>
            <SimpleSlider/>
            </main>
            
        </div>

        
    );
}

export default Scene;