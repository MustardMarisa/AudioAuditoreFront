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
                <Lista  tipo={listaTipoList} actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)}/>
            </div>
        );
    }

    contenedorArtista = () => {
        return (
            <div>
                <DisplayInfo />
                <CajaComentario />
                <Lista tipo={listaTipoList} actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)}/>
            </div>
        );
    }

    contenedorPlaylist = () => {
        return (
            <div>
                <DisplayInfo />
                <CancionesPlaylist actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)}/>
                <CajaComentario />
                <Lista tipo={listaTipoList} actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)}/>
            </div>
        );
    }

    render = () => {
        return (
            <div>
                <Router>

                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div className="navbar-nav">
                                <Link to="/buscador" className="nav-item nav-link">Buscar</Link>
                                <Link to="/miPlaylists" className="nav-item nav-link">Mis Playlists</Link>
                            </div>
                        </div>
                    </nav>

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
