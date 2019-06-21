import React from 'react';
import {
    Route,
    Link,
    BrowserRouter as Router
} from "react-router-dom";

import Buscador from "./Buscador";
import CajaComentario from "./CajaComentario";
import CancionesPlaylist from "./CancionesPlaylist";
import DisplayInfo from "./DisplayInfo";
import Lista from "./Lista";
import Reproductor from "./Reproductor";


import { contenedorCancion, contenedorArtista, contenedorPlaylist, listaTipoCarousel, listaTipoList } from "../functions/config";

//importamos el componente, deben comenzar con mayusculas

class Dashboard extends React.Component {

    constructor() {
        super();
        this.state = {
            contenedorDerecho: null,
        };
    }

    actualizarContenedorDerecho = (tipo) => {
        this.setState({
            contenedorDerecho: tipo,
        });
    }

    contenedorCancion = () => {
        return (
            <div>
                <DisplayInfo />
                <Reproductor />
                <CajaComentario />
                <Lista tipo={listaTipoList} actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)} />
            </div>
        );
    }

    contenedorArtista = () => {
        return (
            <div>
                <DisplayInfo />
                <CajaComentario />
                <Lista tipo={listaTipoList} actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)} />
            </div>
        );
    }

    contenedorPlaylist = () => {
        return (
            <div>
                <DisplayInfo />
                <CancionesPlaylist actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)} />
                <CajaComentario />
                <Lista tipo={listaTipoList} actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)} />
            </div>
        );
    }

    render = () => {
        return (
            <div>
                <Router>

                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <div className="navbar-collapse collapse" id="navbarNavAltMarkup">
                                <div className="nav navbar-nav mr-auto">
                                    <Link to="/buscador" className="nav-item nav-link">Buscar</Link>
                                    <Link to="/miPlaylists" className="nav-item nav-link">Mis Playlists</Link>
                                </div>
                                <div className="nav navbar-nav">
                                    <img src="https://profile-images.scdn.co/images/userprofile/default/9f903f2e25bdafdba25bb0482b305ff8240b6f07" height="50px" width="50px" className="rounded-circle nav-item" alt="auditor" />
                                    <p className="nav-item nav-link">¡Bienvenido auditor!</p>
                                    <Link to="/miPlaylists" className="nav-item nav-link">Logout</Link>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <div className="container">
                        <div className="row">

                            {/*Contenedor izquierdo*/}
                            <div className="col">
                                <Route path="/buscador" render={(routeProps) => <Buscador {...routeProps} actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)} />} />
                                <Route path="/miPlaylists" render={(routeProps) => <Lista {...routeProps} tipo={listaTipoCarousel} actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)} />} />
                            </div>


                            {/*Contenedor derecho*/}
                            <div className="col">
                                {this.state.contenedorDerecho === contenedorCancion &&
                                    this.contenedorCancion()
                                }

                                {this.state.contenedorDerecho === contenedorArtista &&
                                    this.contenedorArtista()
                                }

                                {this.state.contenedorDerecho === contenedorPlaylist &&
                                    this.contenedorPlaylist()
                                }
                            </div>
                        </div>
                    </div>
                </Router>

            </div>
        );
    }
}
export default Dashboard;
