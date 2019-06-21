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


import { contenedorCancion, contenedorArtista, contenedorPlaylist, listaTipoCarousel, listaTipoList, contenidoListaComentarios } from "../functions/config";

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
                <DisplayInfo actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)}/>
                <br></br>
                <Reproductor />
                <br></br>
                <CajaComentario />
                <br></br>
                <Lista tipo={listaTipoList} contenidoLista={contenidoListaComentarios} actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)} />
            </div>
        );
    }

    contenedorArtista = () => {
        return (
            <div>
                <DisplayInfo actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)}/>
                <br></br>
                <CajaComentario />
                <br></br>
                <Lista tipo={listaTipoList} contenidoLista={contenidoListaComentarios} actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)} />
            </div>
        );
    }

    contenedorPlaylist = () => {
        return (
            <div>
                <DisplayInfo actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)}/>
                <br></br>
                <CancionesPlaylist actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)} />
                <br></br>
                <CajaComentario />
                <br></br>
                <Lista tipo={listaTipoList} contenidoLista={contenidoListaComentarios} actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)} />
            </div>
        );
    }

    render = () => {
        return (
            <div>
                <Router>

                    <div className="container">
                        <nav className="row navbar navbar-expand-lg navbar-dark bg-dark">
                            <p className="navbar-brand" >¡Hola Carlos!<img src="https://profile-images.scdn.co/images/userprofile/default/9f903f2e25bdafdba25bb0482b305ff8240b6f07" width="50" height="50" alt="" className="rounded-circle" /></p>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <div className="nav navbar-nav mr-auto">
                                    <Link to="/buscador" className="nav-item nav-link">Buscar</Link>
                                    <Link to="/miPlaylists" className="nav-item nav-link">Mis Playlists</Link>
                                </div>
                                <div className="nav navbar-nav"><Link to="/miPlaylists" className="nav-item nav-link">Logout</Link>
                                </div>
                            </div>
                        </nav>
                    </div>

                    <br></br>
                    <br></br>

                    <div className="container">
                        <div className="row">
                            {/*Contenedor izquierdo*/}
                            <div className="col">
                                <Route path="/buscador" render={(routeProps) => <Buscador {...routeProps} authToken={this.props.authToken} actualizarContenedorDerecho={this.actualizarContenedorDerecho.bind(this)} />} />
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
