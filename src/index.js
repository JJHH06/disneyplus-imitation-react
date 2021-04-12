//Colocacion de utilidades
import "./style.scss"
import "bootstrap/dist/js/bootstrap"
import React from 'react';
import ReactDom from 'react-dom';
import Scene from './Scene.js';

ReactDom.render(
    <React.StrictMode>
        <Scene/>
    </React.StrictMode>,
    document.getElementById("root")
);