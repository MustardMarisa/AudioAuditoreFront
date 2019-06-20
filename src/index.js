import React from "react";
import ReactDOM from "react-dom";
import MainWindow from "./MainWindow";
import "./index.css";
import "./animate.css";

//importamos bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

ReactDOM.render(
    <MainWindow />,
    document.getElementById("root")
);