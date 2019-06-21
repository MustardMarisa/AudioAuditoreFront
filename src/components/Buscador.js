import React, { Component } from "react";
import Lista from "./Lista";
import {
    contenedorCancion, contenedorArtista, contenedorPlaylist, queryCancion, queryArtista,
    queryPlaylist, textoCancion, textoArtista, textoPlaylist, listaTipoList, contenidoListaDisplay
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
            <div >
                <div className="container">
                    <div className="row d-inline-flex">
                        <div className="col-sm">
                            <input type="text" className="form-control" id="exampleInputEmail1" placeholder="¿Qué quieres buscar?..." />
                        </div>
                    </div>
                    <div className="row d-inline-flex">
                        <div className="col btn-group">
                            <button type="button" className="btn btn-info dropdown-toggle" data-toggle="dropdown">
                                <span className="selection">{this.state.textoType}</span><span className="caret"></span>
                            </button>
                            <div className="dropdown-menu">
                                <button className="dropdown-item" onClick={() => this.cambiarQuery(queryCancion)}>{textoCancion}</button>
                                <button className="dropdown-item" onClick={() => this.cambiarQuery(queryArtista)}>{textoArtista}</button>
                                <button className="dropdown-item" onClick={() => this.cambiarQuery(queryPlaylist)}>{textoPlaylist}</button>
                            </div>
                        </div>

                        <div className="col">
                            <button className="btn btn-info">
                                Buscar
                            </button>
                        </div>
                    </div>
                </div>

                <br></br>

                <Lista tipo={listaTipoList} contenidoLista={contenidoListaDisplay} actualizarContenedorDerecho={this.props.actualizarContenedorDerecho} />
            </div>

        );
    }
}

export default Buscador;