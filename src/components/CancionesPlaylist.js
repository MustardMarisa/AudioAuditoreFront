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

            <div className="container">
                <div className="card">
                    <div className="row no-gutters">
                        <div className="col-md-12">
                            <div className="card-body">
                            <li className="list-group-item">
                                <p>Cancion: <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button></p>
                                <p>Artista: <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button></p>
                            </li>
                            <li className="list-group-item">
                                <p>Cancion: <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button></p>
                                <p>Artista: <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button></p>
                            </li>
                            <li className="list-group-item">
                                <p>Cancion: <button type="button" className="btn btn-link" onClick={this.mostrarCancion}>Cancion</button></p>
                                <p>Artista: <button type="button" className="btn btn-link" onClick={this.mostrarArtista}>Artista</button></p>
                            </li>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CancionesPlaylist;