import React, { Component } from "react";
import { contenedorCancion, contenedorArtista, contenedorPlaylist, listaTipoCarousel, listaTipoList } from "../functions/config";

class Lista extends Component {

    mostrarCancion = () => {
        this.props.actualizarContenedorDerecho(contenedorCancion);
    }

    mostrarArtista = () => {
        this.props.actualizarContenedorDerecho(contenedorArtista);
    }

    mostrarPlaylist = () => {
        this.props.actualizarContenedorDerecho(contenedorPlaylist);
    }

    render = () => {
        return (
            <div>
                {(this.props.tipo === listaTipoList) &&
                    <div className="scrollList">
                        <ul className="list-group ">
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarPlaylist}>Playlist</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarPlaylist}>Playlist</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarPlaylist}>Playlist</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarPlaylist}>Playlist</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarPlaylist}>Playlist</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarPlaylist}>Playlist</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarPlaylist}>Playlist</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarPlaylist}>Playlist</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarPlaylist}>Playlist</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarPlaylist}>Playlist</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarPlaylist}>Playlist</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarPlaylist}>Playlist</button>
                            </li>
                        </ul>                        
                    </div>
                }

                {(this.props.tipo === listaTipoCarousel) &&
                <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img className="d-block w-100" src="https://i.scdn.co/image/ea4996e789ba320b510225702129af9909993c48" alt="First slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://i.scdn.co/image/a921902562e5ebd1488143a3929f2a11094db775" alt="Second slide" />
                        </div>
                        <div className="carousel-item">
                            <img className="d-block w-100" src="https://i.scdn.co/image/7859070b48ee27636ef827bb42da1d5245a6dc77" alt="Third slide" />
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
                }

            </div>
        );
    }
}

export default Lista;