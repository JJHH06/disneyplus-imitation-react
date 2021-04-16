import React from 'react';
import disneypluslogo from '../assets/disneyplus-logo.svg';
import avatar from '../assets/avatarpic.png';

const NavBar = () => (
  <header>
    <nav className="navbar navbar-default navbar-expand-md navbar-dark fixed-top  bg-black">
      <div className="container-fluid">
        <a href="https://www.disneyplus.com/" className="navbar-brand">
          <img src={disneypluslogo} alt="logo" width="80" />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <div className="nav-text-icon ">

                <a href="https://www.disneyplus.com/" className="nav-link active">

                  <svg alt="" aria-hidden="true" aria-label="home" color="#f9f9f9" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className="nav-icon">
                    <path d="M26.882 19.414v10.454h-5.974v-5.227h-5.974v5.227H8.961V19.414H5.227L17.921 6.72l12.694 12.694h-3.733z" />
                  </svg>
                  <span className="text-option-navbar">INICIO</span>

                </a>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-text-icon ">

                <a href="https://www.disneyplus.com/" className="nav-link active">

                  <svg alt="" aria-hidden="true" aria-label="home" color="#f9f9f9" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className="nav-icon">
                    <path d="M21.866 24.337c-3.933 2.762-9.398 2.386-12.914-1.13-3.936-3.936-3.936-10.318 0-14.255 3.937-3.936 10.32-3.936 14.256 0 3.327 3.327 3.842 8.402 1.545 12.27l4.56 4.558a2 2 0 0 1 0 2.829l-.174.173a2 2 0 0 1-2.828 0l-4.445-4.445zm-5.786-1.36a6.897 6.897 0 1 0 0-13.794 6.897 6.897 0 0 0 0 13.794z" />
                  </svg>
                  <span className="text-option-navbar">BÚSQUEDA</span>

                </a>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-text-icon ">

                <a href="https://www.disneyplus.com/" className="nav-link active">

                  <svg alt="" aria-hidden="true" aria-label="home" color="#f9f9f9" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className="nav-icon">
                    <path d="M27.85 15.1H20.9V8.15a2.9 2.9 0 0 0-5.8 0v6.95H8.15a2.9 2.9 0 0 0 0 5.8h6.95v6.95a2.9 2.9 0 0 0 5.8 0V20.9h6.95a2.9 2.9 0 1 0 0-5.8z" />
                  </svg>
                  <span className="text-option-navbar">MI LISTA</span>

                </a>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-text-icon ">

                <a href="https://www.disneyplus.com/" className="nav-link active">

                  <svg alt="" aria-hidden="true" aria-label="home" color="#f9f9f9" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className="nav-icon">
                    <path d="M17.625 26.028L10.44 30l1.373-8.412L6 15.631l8.033-1.228 3.592-7.653 3.592 7.653 8.033 1.228-5.813 5.957L24.81 30z" />
                  </svg>
                  <span className="text-option-navbar">ORIGINALES</span>

                </a>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-text-icon ">

                <a href="https://www.disneyplus.com/" className="nav-link active">

                  <svg alt="" aria-hidden="true" aria-label="home" color="#f9f9f9" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className="nav-icon">
                    <path d="M24.71 20.07a2.97 2.97 0 1 0-4.2-4.2 2.97 2.97 0 0 0 4.2 4.2m-12.262 0a2.97 2.97 0 1 0-4.2-4.2 2.97 2.97 0 0 0 4.2 4.2m6.173-10.31a2.969 2.969 0 1 0-4.199 4.198 2.969 2.969 0 0 0 4.199-4.198m0 12.262a2.969 2.969 0 1 0-4.199 4.198 2.969 2.969 0 0 0 4.199-4.198m-1.544-4.629a.846.846 0 1 0-1.197 1.196.846.846 0 0 0 1.197-1.196m18.06-.644c-3.33 6.913-8.165 9.928-11.635 11.24-2.57.971-4.762 1.178-5.949 1.208-.348.032-.698.053-1.052.053C10.287 29.25 5.25 24.213 5.25 18S10.287 6.75 16.5 6.75c6.214 0 11.25 5.037 11.25 11.25a11.19 11.19 0 0 1-2.493 7.054c2.832-1.612 5.844-4.382 8.138-9.143a.968.968 0 0 1 1.742.838" />
                  </svg>
                  <span className="text-option-navbar">PELICULAS</span>

                </a>
              </div>
            </li>
            <li className="nav-item">
              <div className="nav-text-icon ">

                <a href="https://www.disneyplus.com/" className="nav-link active">

                  <svg alt="" aria-hidden="true" aria-label="home" color="#f9f9f9" role="img" version="1.1" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg" className="nav-icon">
                    <path d="M18.84 11.965h6.722a4 4 0 0 1 4 4V26a4 4 0 0 1-4 4H10.375a4 4 0 0 1-4-4V15.965a4 4 0 0 1 4-4h6.211l-3.981-3.981a1.162 1.162 0 1 1 1.643-1.644l3.465 3.465 3.464-3.465a1.162 1.162 0 0 1 1.644 1.644l-3.982 3.981zm6.428 7.73a1.718 1.718 0 1 0 0-3.436 1.718 1.718 0 0 0 0 3.436zm0 6.011a1.718 1.718 0 1 0 0-3.435 1.718 1.718 0 0 0 0 3.435z" />
                  </svg>
                  <span className="text-option-navbar">SERIES</span>

                </a>
              </div>
            </li>
          </ul>

          <div className="d-flex">
            <a href="https://www.disneyplus.com/">
              <img src={avatar} alt="avatar" width="46px" />
            </a>
          </div>
        </div>
      </div>
    </nav>

  </header>
);

export default NavBar;
