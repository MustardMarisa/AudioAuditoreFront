import React, { Component } from "react";
import { contenedorCancion, contenedorArtista, contenedorPlaylist } from "../functions/config";

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
                <h1>Lista</h1>
                {this.props.tipo &&
                    <div>
                        <button type="button" class="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                        <button type="button" class="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                        <button type="button" class="btn btn-link" onClick={this.mostrarPlaylist}>Playlist</button>
                    </div>
                }
            </div>
        );
    }
}

export default Lista;