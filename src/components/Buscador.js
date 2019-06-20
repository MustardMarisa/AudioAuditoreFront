import React, { Component } from "react";
import Lista from "./Lista";
import { contenedorCancion, contenedorArtista, contenedorPlaylist } from "../functions/config";

class Buscador extends Component {

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
                <h1>Buscador</h1>
                <Lista />
                <button type="button" class="btn btn-link" onClick={this.mostrarCancion}>Cancion</button>
                <button type="button" class="btn btn-link" onClick={this.mostrarArtista}>Artista</button>
                <button type="button" class="btn btn-link" onClick={this.mostrarPlaylist}>Playlist</button>
            </div>
        );
    }
}

export default Buscador;