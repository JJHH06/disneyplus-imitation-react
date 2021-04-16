import React from 'react';
import './style.scss';
import NavBar from './components/NavBar';
import BannerSlider from './components/BannerSlider';
import CategoryDivision from './components/CategoryDivision/CategoryDivision.js';
import ContentChooser from './components/ContentChooser/ContentChooser';


function Scene(){

    return (
        <div>
            <NavBar/>
            <main>
            <BannerSlider/>
            <CategoryDivision/>
            <ContentChooser/>
            </main>
            
        </div>

        
    );
}

export default Scene;