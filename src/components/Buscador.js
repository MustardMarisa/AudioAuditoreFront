import React, { Component } from "react";
import Lista from "./Lista";
import {
    contenedorCancion, contenedorArtista, contenedorPlaylist, queryCancion, queryArtista,
    queryPlaylist, textoCancion, textoArtista, textoPlaylist
} from "../functions/config";

class Buscador extends Component {

    constructor() {
        super();
        this.state = {
            queryType: queryCancion,
            textoType: textoCancion,
        };
    }

    componentDidMount = () => {

        this.cambiarQuery(this.state.queryType);
    }

    cambiarQuery = (type) => {
        switch (type) {
            case queryCancion:
                this.setState({
                    queryType: queryCancion,
                    textoType: textoCancion,
                });
                break;
            case queryArtista:
                this.setState({
                    queryType: queryArtista,
                    textoType: textoArtista,
                });
                break;
            case queryPlaylist:
                this.setState({
                    queryType: queryPlaylist,
                    textoType: textoPlaylist,
                });
                break;
            default:
                this.setState({
                    queryType: queryCancion,
                    textoType: textoCancion,
                });
                break;
        }
    }

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
                <div class="btn-group">
                    <button type="button" class="btn btn-default dropdown-toggle" data-toggle="dropdown">
                        <span class="selection">{this.state.textoType}</span><span class="caret"></span>
                    </button>
                    <div class="dropdown-menu">
                        <button className="dropdown-item" onClick={() => this.cambiarQuery(queryCancion)}>{textoCancion}</button>
                        <button className="dropdown-item" onClick={() => this.cambiarQuery(queryArtista)}>{textoArtista}</button>
                        <button className="dropdown-item" onClick={() => this.cambiarQuery(queryPlaylist)}>{textoPlaylist}</button>
                    </div>
                </div>

                <input type="text" placeholder="¿Qué quieres buscar?..."></input>

                <button className="btn btn-default">
                    Buscar
                </button>

                <Lista />

            </div>
        );
    }
}

export default Buscador;