//Colocacion de utilidades
import "bootstrap/dist/js/bootstrap";
//import "slick-carousel/slick/slick-theme.scss";
import "./style.scss";


import React from 'react';
import ReactDom from 'react-dom';
import Scene from './Scene.js';

ReactDom.render(
    <React.StrictMode>
        <Scene/>
    </React.StrictMode>,
    document.getElementById("root")
);