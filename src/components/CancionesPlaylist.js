import React, { Component } from "react";
import { contenedorCancion, contenedorArtista } from "../functions/config";

class CancionesPlaylist extends Component {

    mostrarCancion = () => {
        this.props.actualizarContenedorDerecho(contenedorCancion);
    }

    mostrarArtista = () => {
        this.props.actualizarContenedorDerecho(contenedorArtista);
    }

    render = () => {
        return (
            <div>
                <h1>CancionesPlaylist</h1>
                <div className="scrollList">
                        <ul className="list-group ">
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                            </li>
                            <li className="list-group-item">
                                <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                                <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                            </li>
                        </ul>                        
                    </div>
            </div>
        );
    }
}

export default CancionesPlaylist;