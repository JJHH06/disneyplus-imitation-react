import React from 'react';
import './style.scss';
import NavBar from './components/NavBar';
import BannerSlider from './components/BannerSlider';
import CategoryDivision from './components/CategoryDivision/CategoryDivision';
import SimpleSlider from './components/ContentChooser/SimpleSlider';
import Footer from './components/Footer';

function Scene() {
  return (
    <div>
      <NavBar />
      <main>
        <BannerSlider />
        <CategoryDivision />
        <SimpleSlider />
      </main>
      <Footer />

    </div>

  );
}

export default Scene;
