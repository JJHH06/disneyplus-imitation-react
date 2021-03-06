import React from 'react';
import banner1 from '../assets/banner1.jfif';
import banner1Logo from '../assets/banner1Logo.png';
import banner2Logo from '../assets/banner2Logo.png';
import banner2 from '../assets/banner2.jfif';
import banner3 from '../assets/banner3.jfif';
import banner3Logo from '../assets/banner3Logo.png';

const BannerSlider = () => (
  <div className="initial-banner contenedor-carousel-banner">

    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2" />
        <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3" />
      </div>
      <div className="carousel-inner shadowed">
        <div className="carousel-item active">
          <img src={banner1} className="d-block w-100" alt="..." />
          <img src={banner1Logo} className="d-block w-100 banner-logo animate__animated animate__fadeInRight" alt="..." />

        </div>
        <div className="carousel-item">
          <img src={banner2} className="d-block w-100" alt="..." />
          <img src={banner2Logo} className="d-block w-100 banner-logo animate__animated animate__fadeInRight" alt="..." />

        </div>
        <div className="carousel-item">
          <img src={banner3} className="d-block w-100" alt="..." />
          <img src={banner3Logo} className="d-block w-100 banner-logo animate__animated animate__fadeInRight" alt="..." />

        </div>
      </div>
      <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
        <span className="carousel-control-prev-icon" aria-hidden="true" />
        <span className="visually-hidden">Previous</span>
      </button>
      <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
        <span className="carousel-control-next-icon" aria-hidden="true" />
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  </div>
);
export default BannerSlider;
