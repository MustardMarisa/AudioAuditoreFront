import React from "react";
import ReactDOM from "react-dom";
import MainWindow from "./MainWindow";
import "./index.css";
import "./animate.css";
import Auth from "./Auth";

//importamos bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

const auth = new Auth();

let state = {};
window.setState = (changes) =>{
    state = Object.assign({},state,changes);
    ReactDOM.render(
        <MainWindow {...state}/>,
        document.getElementById("root")
    );
}

/* eslint no-restricted-globals: 0 */
let username = auth.getProfile().given_name || "Usuario";

let initialState = {
    name: username,
    auth
};

window.setState(initialState);