import React from 'react';
import banner1 from '../assets/banner1.jfif';
import banner1Logo from '../assets/banner1Logo.png';
import banner2Logo from '../assets/banner2Logo.png';
import banner2 from '../assets/banner2.jfif';
import banner3 from '../assets/banner3.jfif';
import banner3Logo from '../assets/banner3Logo.png';
const SimpleSlider = () => {
    return (<div className="initial-banner">


        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active">
                    <img src={banner1} className="d-block w-100" alt="..." />
                    <img src={banner1Logo} className="d-block w-100 banner-logo animate__animated animate__fadeInRight" alt="..." />
                    {/* <div className="carousel-caption d-none d-md-block">
        <h5>Falcon and the Winter Soldier</h5>
        <p>Ve el episodio 5 ya</p>
      </div> */}
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
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>)
}

    ;

export default SimpleSlider